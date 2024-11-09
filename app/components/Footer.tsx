import React from 'react'

const Footer = () => {
  return (
    <footer className="p-6 text-center bg-gray-900 text-white">
    <div>
      <a href="https://instagram.com/neha_arora" target="_blank">Instagram</a> | 
      <a href="https://vimeo.com/neha_arora" target="_blank">Vimeo</a>
    </div>
    <p className="mt-4">© {new Date().getFullYear()} Neha Arora. All rights reserved.</p>
  </footer>
  )
}

export default Footer