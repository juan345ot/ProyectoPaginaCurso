import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InavetInfo from './components/InavetInfo';
import Modality from './components/Modality';
import ScrollReveal from './components/ScrollReveal';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy loading components for better performance
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      
      <ScrollReveal>
        <InavetInfo />
      </ScrollReveal>
      
      <ScrollReveal delay={200}>
        <Modality />
      </ScrollReveal>
      
      <Suspense fallback={
        <div className="py-24 container mx-auto px-4 space-y-12">
          <div className="h-12 bg-gray-100 rounded-full w-48 animate-pulse mx-auto"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-gray-100 rounded-4xl animate-pulse"></div>
            ))}
          </div>
        </div>
      }>
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>
        
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
        
        <FinalCTA />
        
        <Footer />
      </Suspense>

      <WhatsAppButton />
    </div>
  );
}

export default App;
