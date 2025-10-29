import React from 'react';
import Hero from './components/Hero.jsx';
import IconHighlights from './components/IconHighlights.jsx';
import BribeTable from './components/BribeTable.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      <Hero />
      <main className="relative z-0">
        <section className="mx-auto max-w-6xl px-6 sm:px-8 py-12 sm:py-16">
          <IconHighlights />
        </section>
        <section className="mx-auto max-w-6xl px-6 sm:px-8 pb-20">
          <BribeTable />
        </section>
      </main>
      <Footer />
    </div>
  );
}
