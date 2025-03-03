'use client'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Pagina Niet Gevonden</h2>
        <p className="text-blue-600 mb-8">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Terug naar Home
        </a>
      </div>
    </div>
  )
}