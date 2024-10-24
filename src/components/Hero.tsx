import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          className="w-full h-full object-cover"
          alt="Spa ambiente"
        />
        <div className="absolute inset-0 bg-brand-brown/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-cream mb-6">
          Centro exclusivo de bienestar
        </h1>
        <p className="text-xl sm:text-2xl text-brand-cream/90 mb-8 max-w-3xl mx-auto">
          Descubre un oasis de paz y tranquilidad donde cuerpo y mente encuentran su equilibrio perfecto
        </p>
        <a
          href="#reservar"
          className="inline-block bg-brand-cream text-brand-brown px-8 py-3 rounded-md text-lg font-medium hover:bg-white transition-colors"
        >
          Reserva tu experiencia
        </a>
      </div>
    </section>
  );
}