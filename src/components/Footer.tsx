import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77239.41718601124!2d-66.8837042094281!3d10.47920308851372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe3a4d1a6815f935%3A0xdbc346dab08ca407!2sOla%20Ccs!5e1!3m2!1ses-419!2sve!4v1729786412832!5m2!1ses-419!2sve" 
          className="w-full h-[400px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Ola Caracas</h3>
            <p className="text-green-100 mb-4">
              Tu centro exclusivo de bienestar en Caracas
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ola.ccs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-100 hover:text-white transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-100" />
                <span className="text-green-100">Caracas, Venezuela</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-100" />
                <span className="text-green-100">+58 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-100" />
                <span className="text-green-100">info@olacaracas.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Horario</h3>
            <div className="space-y-2 text-green-100">
              <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
              <p>Sábado: 9:00 AM - 4:00 PM</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} Ola Caracas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}