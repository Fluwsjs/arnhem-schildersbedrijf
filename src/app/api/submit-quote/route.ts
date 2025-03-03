import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const projectType = formData.get('projectType') as string;
    const projectDetails = formData.get('projectDetails') as string;
    const preferredTimeframe = formData.get('preferredTimeframe') as string;
    const preferredStartDate = formData.get('preferredStartDate') as string;
    const services = formData.get('services') as string;
    const message = formData.get('message') as string;
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    // Prepare email content
    const emailContent = `
      <h1>Nieuwe offerteaanvraag van ${name}</h1>
      
      <h2>Persoonlijke gegevens:</h2>
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefoon:</strong> ${phone}</p>
      <p><strong>Adres:</strong> ${address}</p>
      
      <h2>Geselecteerde diensten:</h2>
      <p>${services}</p>
      
      <h2>Project details:</h2>
      <p><strong>Type project:</strong> ${
        projectType === 'interior' ? 'Binnen' : 
        projectType === 'exterior' ? 'Buiten' : 'Beide'
      }</p>
      <p><strong>Beschrijving:</strong> ${projectDetails}</p>
      <p><strong>Uitvoeringsperiode:</strong> ${
        preferredTimeframe === 'asap' ? 'Zo snel mogelijk' :
        preferredTimeframe === '1month' ? 'Binnen 1 maand' :
        preferredTimeframe === '3months' ? 'Binnen 3 maanden' :
        preferredTimeframe === '6months' ? 'Binnen 6 maanden' :
        preferredTimeframe === 'flexible' ? 'Flexibel' : '-'
      }</p>
      ${preferredStartDate ? `<p><strong>Voorkeur startdatum:</strong> ${preferredStartDate}</p>` : ''}
      
      ${message ? `<h2>Aanvullend bericht:</h2><p>${message}</p>` : ''}
    `;
    
    // Prepare attachments if there are files
    const attachments: any[] = [];
    
    // Check for files in the form data
    const fileKeys = Array.from(formData.keys()).filter(key => key.startsWith('file-'));
    for (const key of fileKeys) {
      const file = formData.get(key) as File;
      if (file && file instanceof File) {
        const buffer = Buffer.from(await file.arrayBuffer());
        
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type,
        });
      }
    }
    
    // Send email to business owner
    await transporter.sendMail({
      from: `"Arnhem Schildersbedrijf Website" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'info@arnhem-schildersbedrijf.nl',
      subject: `Nieuwe offerteaanvraag van ${name}`,
      html: emailContent,
      attachments,
    });
    
    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Arnhem Schildersbedrijf" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Bevestiging van uw offerteaanvraag',
      html: `
        <h1>Bedankt voor uw offerteaanvraag, ${name}!</h1>
        <p>Wij hebben uw aanvraag ontvangen en zullen zo spoedig mogelijk contact met u opnemen.</p>
        
        <h2>Samenvatting van uw aanvraag:</h2>
        <p><strong>Diensten:</strong> ${services}</p>
        <p><strong>Type project:</strong> ${
          projectType === 'interior' ? 'Binnen' : 
          projectType === 'exterior' ? 'Buiten' : 'Beide'
        }</p>
        <p><strong>Uitvoeringsperiode:</strong> ${
          preferredTimeframe === 'asap' ? 'Zo snel mogelijk' :
          preferredTimeframe === '1month' ? 'Binnen 1 maand' :
          preferredTimeframe === '3months' ? 'Binnen 3 maanden' :
          preferredTimeframe === '6months' ? 'Binnen 6 maanden' :
          preferredTimeframe === 'flexible' ? 'Flexibel' : '-'
        }</p>
        
        <p>Met vriendelijke groet,</p>
        <p>Het team van Arnhem Schildersbedrijf</p>
        <p>Tel: 026 - 3816630 | Mobiel: 06-25 153 451</p>
        <p>Email: info@arnhem-schildersbedrijf.nl</p>
      `,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verwerken van uw aanvraag.' },
      { status: 500 }
    );
  }
} 