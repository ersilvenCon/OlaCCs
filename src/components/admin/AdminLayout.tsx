import React from 'react';
import { Calendar, Users, Settings, Package, LogOut } from 'lucide-react';

const navigation = [
  { name: 'Citas', icon: Calendar, href: '/admin/appointments' },
  { name: 'Servicios', icon: Package, href: '/admin/services' },
  { name: 'Equipo', icon: Users, href: '/admin/team' },
  { name: 'Configuración', icon: Settings, href: '/admin/settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-brand-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Ola Caracas"
                />
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-white hover:text-brand-cream flex items-center">
                <LogOut className="h-5 w-5 mr-2" />
                Salir
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 mr-8">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-4 py-2 text-brand-brown hover:bg-brand-cream rounded-md"
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Main content */}
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}