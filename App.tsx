import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { AIConsultant } from './components/AIConsultant';

function App() {
  return (
    <div className="antialiased bg-dark-900 text-gray-200 selection:bg-gold-400 selection:text-dark-900 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
      </main>
      <Contact />
     {/* <AIConsultant /> */}
    </div>
  );
}

export default App;