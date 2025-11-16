import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroExact';

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#061428] to-[#071b31] text-[#eaf4ff] font-inter">
      <Navbar />
        <HeroSection />
      <main className="max-w-6xl mx-auto px-6 py-20">
      </main>
        <Footer />
    </div>
  )
}
