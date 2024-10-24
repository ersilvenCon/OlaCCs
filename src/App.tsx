import React from 'react';
import { Leaf, Calendar, Clock, Users, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;