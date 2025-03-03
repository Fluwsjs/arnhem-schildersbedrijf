'use client'

import React, { useState } from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CalendarIcon, PhotoIcon, DocumentTextIcon, ClockIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Toaster, toast } from 'react-hot-toast'

export default function Contact() {
  const [formStep, setFormStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: 'interior', // 'interior' or 'exterior'
    projectDetails: '',
    preferredTimeframe: '',
    preferredStartDate: '',
    message: '',
    services: {
      binnenschilderwerk: false,
      buitenschilderwerk: false,
      behangen: false,
      glaswerk: false,
      spuitwerk: false,
      houtrotreparatie: false,
      kleuradvies: false,
      onderhoudsinspectie: false,
      wandafwerking: false,
      plafondafwerking: false
    }
  })

  const serviceLabels: Record<string, string> = {
    binnenschilderwerk: 'Binnenschilderwerk',
    buitenschilderwerk: 'Buitenschilderwerk',
    behangen: 'Behangen',
    glaswerk: 'Glaswerk',
    spuitwerk: 'Spuitwerk',
    houtrotreparatie: 'Houtrot reparatie',
    kleuradvies: 'Kleuradvies',
    onderhoudsinspectie: 'Onderhoudsinspectie',
    wandafwerking: 'Wandafwerking',
    plafondafwerking: 'Plafondafwerking'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData for file uploads
      const formDataToSend = new FormData();
      
      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'services') {
          // Convert services object to a string of selected services
          const selectedServices = Object.entries(formData.services)
            .filter(([_, selected]) => selected)
            .map(([service, _]) => serviceLabels[service])
            .join(', ');
          
          formDataToSend.append('services', selectedServices);
        } else {
          formDataToSend.append(key, String(value));
        }
      });
      
      // Add files
      uploadedFiles.forEach((file, index) => {
        formDataToSend.append(`file-${index}`, file);
      });
      
      // Send data to the API route
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (!response.ok) {
        throw new Error('Er is een fout opgetreden bij het verzenden van uw aanvraag.');
      }
      
      toast.success('Uw offerteaanvraag is succesvol verzonden! We nemen zo snel mogelijk contact met u op.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        projectType: 'interior',
        projectDetails: '',
        preferredTimeframe: '',
        preferredStartDate: '',
        message: '',
        services: {
          binnenschilderwerk: false,
          buitenschilderwerk: false,
          behangen: false,
          glaswerk: false,
          spuitwerk: false,
          houtrotreparatie: false,
          kleuradvies: false,
          onderhoudsinspectie: false,
          wandafwerking: false,
          plafondafwerking: false
        }
      })
      setUploadedFiles([]);
      setFormStep(0)
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Er is een fout opgetreden bij het verzenden van uw aanvraag. Probeer het later opnieuw.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const nextStep = () => {
    setFormStep(prev => prev + 1)
  }

  const prevStep = () => {
    setFormStep(prev => prev - 1)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const formVariants = {
    initial: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
    enter: { x: 100, opacity: 0 }
  }

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      {/* Hero Section - Minimalist Design with Typography Focus */}
      <section className="relative h-[400px] flex items-center justify-center mb-12 pt-20 bg-white dark:bg-dark-background">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 text-primary dark:text-dark-primary"
          >
            Neem <span className="text-secondary dark:text-dark-secondary">Contact</span> Op
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-32 bg-secondary mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-700 dark:text-gray-300"
          >
            Neem contact met ons op voor een vrijblijvende offerte of om uw vragen te beantwoorden
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-lg shadow-lg p-8"
          >
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <div className={`flex items-center ${formStep >= 0 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 0 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                  <span className="ml-2 text-sm font-medium">Persoonlijke gegevens</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-gray-200">
                  <div className={`h-full ${formStep >= 1 ? 'bg-primary' : 'bg-gray-200'}`} style={{ width: formStep >= 1 ? '100%' : '0%', transition: 'width 0.5s ease-in-out' }}></div>
                </div>
                <div className={`flex items-center ${formStep >= 1 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                  <span className="ml-2 text-sm font-medium">Diensten</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-gray-200">
                  <div className={`h-full ${formStep >= 2 ? 'bg-primary' : 'bg-gray-200'}`} style={{ width: formStep >= 2 ? '100%' : '0%', transition: 'width 0.5s ease-in-out' }}></div>
                </div>
                <div className={`flex items-center ${formStep >= 2 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
                  <span className="ml-2 text-sm font-medium">Project details</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-gray-200">
                  <div className={`h-full ${formStep >= 3 ? 'bg-primary' : 'bg-gray-200'}`} style={{ width: formStep >= 3 ? '100%' : '0%', transition: 'width 0.5s ease-in-out' }}></div>
                </div>
                <div className={`flex items-center ${formStep >= 3 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>4</div>
                  <span className="ml-2 text-sm font-medium">Bevestiging</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formStep === 0 && (
                <motion.div 
                  initial="enter"
                  animate="initial"
                  exit="exit"
                  variants={formVariants}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Naam</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mailadres</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefoonnummer</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adres</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-end">
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-primary text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-secondary"
                    >
                      Volgende stap
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {formStep === 1 && (
                <motion.div 
                  initial="enter"
                  animate="initial"
                  exit="exit"
                  variants={formVariants}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Gewenste diensten</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        {Object.entries(formData.services).slice(0, 5).map(([key, value]) => (
                          <motion.label 
                            key={key}
                            className="flex items-center space-x-3 hover:bg-accent/10 p-2 rounded-md transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            <input
                              type="checkbox"
                              name={key}
                              checked={value}
                              onChange={handleChange}
                              className="rounded border-primary text-primary focus:ring-primary transition-all duration-300"
                            />
                            <span className="text-gray-600">{serviceLabels[key]}</span>
                          </motion.label>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {Object.entries(formData.services).slice(5).map(([key, value]) => (
                          <motion.label 
                            key={key}
                            className="flex items-center space-x-3 hover:bg-accent/10 p-2 rounded-md transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            <input
                              type="checkbox"
                              name={key}
                              checked={value}
                              onChange={handleChange}
                              className="rounded border-primary text-primary focus:ring-primary transition-all duration-300"
                            />
                            <span className="text-gray-600">{serviceLabels[key]}</span>
                          </motion.label>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-between">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-300"
                    >
                      Vorige stap
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-600"
                    >
                      Volgende
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {formStep === 2 && (
                <motion.div 
                  initial="enter"
                  animate="initial"
                  exit="exit"
                  variants={formVariants}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">Type project</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                    >
                      <option value="interior">Binnen</option>
                      <option value="exterior">Buiten</option>
                      <option value="both">Beide</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700">Project details</label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Beschrijf uw project zo gedetailleerd mogelijk (afmetingen, huidige staat, gewenste resultaat, etc.)"
                      className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Foto's uploaden</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-primary rounded-md">
                      <div className="space-y-1 text-center">
                        <PhotoIcon className="mx-auto h-12 w-12 text-primary" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-secondary focus-within:outline-none">
                            <span>Upload foto's</span>
                            <input 
                              id="file-upload" 
                              name="file-upload" 
                              type="file" 
                              multiple
                              className="sr-only" 
                              onChange={handleFileUpload}
                              accept="image/*"
                            />
                          </label>
                          <p className="pl-1">of sleep ze hierheen</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF tot 10MB
                        </p>
                      </div>
                    </div>
                    
                    {/* Display uploaded files */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium text-gray-700">Geüploade foto's:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                              <span className="text-sm truncate">{file.name}</span>
                              <button 
                                type="button" 
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="preferredTimeframe" className="block text-sm font-medium text-gray-700">Gewenste uitvoeringsperiode</label>
                    <select
                      id="preferredTimeframe"
                      name="preferredTimeframe"
                      value={formData.preferredTimeframe}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                    >
                      <option value="">Selecteer een periode</option>
                      <option value="asap">Zo snel mogelijk</option>
                      <option value="1month">Binnen 1 maand</option>
                      <option value="3months">Binnen 3 maanden</option>
                      <option value="6months">Binnen 6 maanden</option>
                      <option value="flexible">Flexibel</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="preferredStartDate" className="block text-sm font-medium text-gray-700">Voorkeur startdatum (indien bekend)</label>
                    <input
                      type="date"
                      id="preferredStartDate"
                      name="preferredStartDate"
                      value={formData.preferredStartDate}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-between">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-300"
                    >
                      Vorige stap
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-primary text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-secondary"
                    >
                      Volgende stap
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {formStep === 3 && (
                <motion.div 
                  initial="enter"
                  animate="initial"
                  exit="exit"
                  variants={formVariants}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-medium text-primary mb-4">Bevestig uw offerteaanvraag</h3>
                    
                    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Persoonlijke gegevens</h4>
                        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="font-medium">Naam:</span> {formData.name}
                          </div>
                          <div>
                            <span className="font-medium">E-mail:</span> {formData.email}
                          </div>
                          <div>
                            <span className="font-medium">Telefoon:</span> {formData.phone}
                          </div>
                          <div>
                            <span className="font-medium">Adres:</span> {formData.address}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Geselecteerde diensten</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {Object.entries(formData.services)
                            .filter(([_, selected]) => selected)
                            .map(([service, _]) => (
                              <span key={service} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                                {serviceLabels[service]}
                              </span>
                            ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Project details</h4>
                        <div className="mt-2 text-sm">
                          <div className="mb-2">
                            <span className="font-medium">Type project:</span> {formData.projectType === 'interior' ? 'Binnen' : formData.projectType === 'exterior' ? 'Buiten' : 'Beide'}
                          </div>
                          <div className="mb-2">
                            <span className="font-medium">Beschrijving:</span>
                            <p className="mt-1 whitespace-pre-wrap">{formData.projectDetails}</p>
                          </div>
                          <div className="mb-2">
                            <span className="font-medium">Uitvoeringsperiode:</span> {
                              formData.preferredTimeframe === 'asap' ? 'Zo snel mogelijk' :
                              formData.preferredTimeframe === '1month' ? 'Binnen 1 maand' :
                              formData.preferredTimeframe === '3months' ? 'Binnen 3 maanden' :
                              formData.preferredTimeframe === '6months' ? 'Binnen 6 maanden' :
                              formData.preferredTimeframe === 'flexible' ? 'Flexibel' : '-'
                            }
                          </div>
                          {formData.preferredStartDate && (
                            <div>
                              <span className="font-medium">Voorkeur startdatum:</span> {formData.preferredStartDate}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {uploadedFiles.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Geüploade foto's</h4>
                          <div className="mt-2 text-sm">
                            <ul className="list-disc pl-5 space-y-1">
                              {uploadedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-2">
                        <p className="text-sm text-gray-500">
                          Door op 'Verstuur offerteaanvraag' te klikken, gaat u akkoord met onze voorwaarden en privacybeleid.
                          U ontvangt een bevestigingsmail op het opgegeven e-mailadres.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-between">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-300"
                    >
                      Vorige stap
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`bg-primary text-white px-6 py-3 rounded-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-secondary'}`}
                    >
                      {isSubmitting ? 'Verzenden...' : 'Verstuur offerteaanvraag'}
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div 
              className="flex items-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-5 group-hover:bg-primary/20 transition-all duration-300">
                <MapPinIcon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Adres</h3>
                <p className="text-gray-700">
                  De Brink 3<br />
                  6842 AT Arnhem
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-5 group-hover:bg-primary/20 transition-all duration-300">
                <PhoneIcon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Telefoon</h3>
                <p className="text-gray-700">
                  <span className="block">Vast: <a href="tel:026-3816630" className="hover:text-primary transition-colors">026 - 3816630</a></span>
                  <span className="block">Mobiel: <a href="tel:06-25153451" className="hover:text-primary transition-colors">06-25 153 451</a></span>
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-5 group-hover:bg-primary/20 transition-all duration-300">
                <EnvelopeIcon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">E-mail</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@arnhem-schildersbedrijf.nl" className="hover:text-primary transition-colors">
                    info@arnhem-schildersbedrijf.nl
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}