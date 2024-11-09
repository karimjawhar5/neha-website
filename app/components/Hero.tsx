import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/path/to/your/video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex items-center justify-center h-full text-center text-white">
        <h2 className="text-5xl font-bold">Neha Arora's Film Portfolio</h2>
      </div>
    </section>
  )
}

export default Hero