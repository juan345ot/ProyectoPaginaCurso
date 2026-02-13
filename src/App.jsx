import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InavetInfo from './components/InavetInfo';
import Modality from './components/Modality';
import TargetAudience from './components/TargetAudience';
import ScrollReveal from './components/ScrollReveal';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy loading components for better performance
const Pricing = lazy(() => import('./components/Pricing'));
const EnrollCTA = lazy(() => import('./components/EnrollCTA'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-primary">
      <Navbar />
      <Hero />
      
      {/* 5. ¿Qué es INAVET? */}
      <ScrollReveal>
        <InavetInfo />
      </ScrollReveal>
      
      {/* 6-8. Programa + Modalidad + Duración/Certificación */}
      <ScrollReveal delay={200}>
        <Modality />
      </ScrollReveal>

      {/* 9. ¿Para quién es esta formación? */}
      <ScrollReveal>
        <TargetAudience />
      </ScrollReveal>
      
      <Suspense fallback={
        <div className="py-24 container mx-auto px-4 space-y-12">
          <div className="h-12 bg-white/20 rounded-full w-48 animate-pulse mx-auto"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-white/20 rounded-4xl animate-pulse"></div>
            ))}
          </div>
        </div>
      }>
        {/* 10. Inversión y medios de pago */}
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>

        {/* 11. CTA de inscripción */}
        <EnrollCTA />
        
        {/* 12. FAQ */}
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
        
        {/* Contacto */}
        <FinalCTA />
        
        <Footer />
      </Suspense>

      <WhatsAppButton />
    </div>
  );
}

export default App;
