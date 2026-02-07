import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseInfo from './components/CourseInfo';
import TeacherInfo from './components/TeacherInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <CourseInfo />
      <TeacherInfo />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
