import React, { useState } from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. We will contact you at ${formData.phone} shortly to confirm your ${formData.service} appointment.`);
    setFormData({ name: '', phone: '', service: '' });
  };

  return (
    <footer id="contact" className="bg-dark-800 pt-24 pb-8 border-t border-dark-700 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-4xl text-white mb-8">Visit Us</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-dark-900 p-4 rounded-full border border-gold-400/30">
                  <MapPin className="text-gold-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Location</h4>
                  <p className="text-gray-400 font-light">123 Luxury Lane, Golden District<br/>Mumbai, India 400001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-dark-900 p-4 rounded-full border border-gold-400/30">
                  <Phone className="text-gold-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Booking</h4>
                  <p className="text-gray-400 font-light">+91 98765 43210<br/>bookings@edwinstylezone.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-dark-900 p-4 rounded-full border border-gold-400/30">
                  <Clock className="text-gold-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Hours</h4>
                  <p className="text-gray-400 font-light">Mon - Sat: 10:00 AM - 9:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-dark-900 p-8 lg:p-12 border border-dark-700">
            <h3 className="font-serif text-2xl text-white mb-6">Request Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-dark-800 border-b border-dark-600 focus:border-gold-400 text-white px-4 py-3 outline-none transition-colors"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-dark-800 border-b border-dark-600 focus:border-gold-400 text-white px-4 py-3 outline-none transition-colors"
                />
              </div>
              <div>
                <select 
                  className="w-full bg-dark-800 border-b border-dark-600 focus:border-gold-400 text-gray-300 px-4 py-3 outline-none transition-colors"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  required
                >
                  <option value="" disabled>Select Service</option>
                  <option value="Haircut">Premium Haircut</option>
                  <option value="Massage">Relaxation Massage</option>
                  <option value="Bridal">Bridal Makeup</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <Button type="submit" className="w-full">Confirm Request</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dark-700">
          <p className="text-gray-500 text-sm">© 2024 Edwin Style Zone. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors"><Twitter className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};