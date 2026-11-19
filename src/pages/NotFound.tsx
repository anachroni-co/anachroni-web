// src/pages/NotFound.tsx
import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-white bg-black font-ibm">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&display=swap');`}
      </style>
      <div className="animate-fadeIn">
        <svg className="w-24 h-24 mx-auto mb-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.95 9.95 0 0 0 5.9-1.9c.427-.317.677-.836.643-1.38a1.557 1.557 0 0 0-.596-1.07 4.993 4.993 0 0 0-2.847-1.04c-.987 0-1.949.29-2.775.83a.75.75 0 0 1-.792 0A4.996 4.996 0 0 0 8.9 15.61a5.01 5.01 0 0 0-2.812 1.053 1.565 1.565 0 0 0-.592 1.066 1.554 1.554 0 0 0 .64 1.38A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
        <h1 className="text-6xl font-light text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-light">Página no encontrada</h2>
        <p className="max-w-md mt-2 text-gray-400">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 mt-6 text-purple-500 transition border border-purple-500 rounded hover:bg-purple-500 hover:text-white"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
