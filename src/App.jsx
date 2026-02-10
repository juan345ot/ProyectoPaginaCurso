import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InavetInfo from './components/InavetInfo';
import Modality from './components/Modality';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <InavetInfo />
      <Modality />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
