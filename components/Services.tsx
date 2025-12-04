import React from 'react';
import { SERVICES_DATA } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-800 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">Explore our curated selection of premium treatments designed to rejuvenate your look.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((category, idx) => (
            <div key={idx} className="bg-dark-900 p-8 border border-dark-700 hover:border-gold-400/50 transition-colors duration-300">
              <h3 className="font-serif text-2xl text-gold-400 mb-8 pb-4 border-b border-dark-700">{category.category}</h3>
              <ul className="space-y-6">
                {category.items.map((item, i) => (
                  <li key={i} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-lg text-white font-medium group-hover:text-gold-300 transition-colors">{item.name}</span>
                      <span className="text-gold-400 font-serif text-xl">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-gray-500 italic font-light">{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};