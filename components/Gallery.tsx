import React from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-dark-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-gold-400 text-sm tracking-widest uppercase font-semibold mb-2">Portfolio</h3>
            <h2 className="font-serif text-4xl text-white">Our Masterpieces</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden group ${idx === 2 ? 'md:row-span-2' : ''} ${idx === 3 ? 'lg:col-span-2' : ''}`}
            >
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                style={{ minHeight: '300px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                <span className="text-gold-400 font-serif italic text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Style Zone No. {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};