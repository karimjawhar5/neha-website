import React from 'react'

const About = () => {
  return (
    <section className="flex flex-wrap items-center p-10">
    <div className="w-full md:w-1/2">
      <img
        src="/path/to/neha-photo.jpg"
        alt="Neha Arora"
        className="rounded-lg shadow-lg"
      />
    </div>
    <div className="w-full md:w-1/2 p-8">
      <p className="text-lg">
        Neha Arora is a passionate filmmaker with expertise in directing, editing, and set design.
        Her work reflects creativity and attention to detail, making her a versatile artist in the
        field of film and television.
      </p>
    </div>
  </section>
  )
}

export default About