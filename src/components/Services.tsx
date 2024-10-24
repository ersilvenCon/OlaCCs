import React from 'react';
import { Flower2, Flame, Moon, Heart } from 'lucide-react';

const services = [
  {
    icon: <Flower2 className="h-8 w-8" />,
    title: "Masajes Terapéuticos",
    description: "Técnicas especializadas para aliviar tensiones y promover la relajación profunda."
  },
  {
    icon: <Flame className="h-8 w-8" />,
    title: "Veloterapia",
    description: "Tratamiento ancestral que utiliza velas para equilibrar la energía corporal."
  },
  {
    icon: <Moon className="h-8 w-8" />,
    title: "Terapias Holísticas",
    description: "Enfoque integral para el bienestar físico, mental y espiritual."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Asesorías Personalizadas",
    description: "Guía experta para alcanzar tus objetivos de bienestar."
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-brand-brown mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
            Descubre nuestra gama completa de servicios diseñados para tu bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-brand-brown mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif text-brand-brown mb-2">{service.title}</h3>
              <p className="text-brand-dark/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}