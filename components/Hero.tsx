import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <h2 className="text-gold-400 uppercase tracking-[0.2em] text-sm md:text-base animate-fade-in-down">
          Welcome to Edwin Style Zone
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
          Redefine Your <br/>
          <span className="italic text-gold-400">Elegance</span>
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto text-lg font-light leading-relaxed">
          Where luxury meets artistry. Experience premium grooming services designed to elevate your personal style.
        </p>
        <div className="pt-8">
          <Button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};