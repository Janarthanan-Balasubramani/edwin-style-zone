import React, { useEffect, useState } from 'react';
import { generateSalonImage } from '../services/geminiService';
import { Sparkles, Loader2 } from 'lucide-react';
import AboutImg from '../assets/pexels-delbeautybox-211032-705255.jpg'

export const About: React.FC = () => {
  const [imageSrc, setImageSrc] = useState("https://images.unsplash.com/photo-1521590832896-7ea20ade7dae?q=80&w=2574&auto=format&fit=crop");
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  useEffect(() => {
    // Auto-generate image on mount if API key is present
    const generate = async () => {
      if (!process.env.API_KEY || hasGenerated) return;
      
      setIsGenerating(true);
      const prompt = "A photorealistic image of a barber cutting hair of a man seated in a luxury black and gold barber chair. The scene is a reflection in a large mirror showing both persons. Bright professional studio lights, cinematic lighting, high resolution, dark luxury salon interior background.";
      
      const generatedImage = await generateSalonImage(prompt);
      
      if (generatedImage) {
        setImageSrc(generatedImage);
        setHasGenerated(true);
      }
      setIsGenerating(false);
    };

    generate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="about" className="py-24 bg-dark-900 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 border-2 border-gold-400 p-4 group">
              <div className="relative w-full h-[400px] overflow-hidden bg-dark-800">
                <img 
                  src={AboutImg}
                  alt="Salon Interior Reflection" 
                  className={`w-full h-full object-cover shadow-2xl transition-all duration-700 ${isGenerating ? 'opacity-50 blur-sm' : 'opacity-100 filter grayscale hover:grayscale-0 contrast-125'}`}
                />
                
                {/* AI Label / Loader */}
                <div className="absolute bottom-4 right-4 z-20">
                  {isGenerating ? (
                    <div className="bg-dark-900/80 backdrop-blur text-gold-400 px-3 py-1 rounded-full text-xs flex items-center gap-2 border border-gold-400/30">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Generating AI Vision...
                    </div>
                  ) : (
                    <div className="bg-dark-900/80 backdrop-blur text-gold-400 px-3 py-1 rounded-full text-xs flex items-center gap-2 border border-gold-400/30">
                      <Sparkles className="w-3 h-3" />
                      {hasGenerated ? "AI Generated Reflection" : "Salon Interior"}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-dark-700 z-0"></div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-gold-400 text-sm tracking-widest uppercase font-semibold">Our Story</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Crafting Confidence <br/> Since 2010
            </h2>
            <p className="text-gray-400 leading-relaxed font-light">
              At Edwin Style Zone, we believe that grooming is an art form. Founded by master stylist Edwin, our salon was built on the philosophy that every client deserves a bespoke experience tailored to their unique personality and lifestyle.
            </p>
            <p className="text-gray-400 leading-relaxed font-light">
              We blend traditional barbering techniques with modern styling innovations in an atmosphere of "Dark Luxury" — a space where you can unwind, disconnect, and emerge revitalized.
            </p>
            
            <div className="flex gap-12 pt-8">
              <div>
                <span className="block text-3xl font-serif text-gold-400">10+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-gold-400">5k+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};