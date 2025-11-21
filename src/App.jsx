import React from 'react';
import { AntigravityProvider } from './context/AntigravityContext';
import Hero from './components/Hero';
import WaterQuality from './components/WaterQuality';
import ShinshuSalmon from './components/ShinshuSalmon';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <AntigravityProvider>
      <main className="bg-[#020617] min-h-screen text-white overflow-x-hidden selection:bg-emerald-500/30">
        <Hero />
        <WaterQuality />
        <ShinshuSalmon />
        <Events />
        <Footer />
      </main>
    </AntigravityProvider>
  );
}

export default App;
