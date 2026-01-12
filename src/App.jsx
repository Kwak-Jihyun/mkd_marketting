import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import ValueComparison from './components/ValueComparison';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-sky-500 selection:text-white">
      <nav className="absolute top-0 w-full z-50 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-white text-2xl font-bold font-serif tracking-tight flex items-center gap-2 relative z-50">
            <span className="w-8 h-8 bg-accent-GOLD rounded-lg flex items-center justify-center text-slate-900 font-bold">M</span>
            <span>목동<span className="text-sky-400">복합</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition-colors">사업 비전</a>
            <a href="#" className="hover:text-white transition-colors">프리미엄 혜택</a>
            <a href="#" className="hover:text-white transition-colors">가치 비교</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <button className="hidden md:block px-5 py-2 rounded-full bg-white/10 hover:bg-accent-GOLD hover:text-slate-900 border border-white/20 text-white text-sm font-bold backdrop-blur-sm transition-all">
            동의율 확인
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative z-50 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-slate-900 md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center text-xl font-medium text-white">
              <a href="#" onClick={toggleMenu} className="hover:text-accent-GOLD transition-colors">사업 비전</a>
              <a href="#" onClick={toggleMenu} className="hover:text-accent-GOLD transition-colors">프리미엄 혜택</a>
              <a href="#" onClick={toggleMenu} className="hover:text-accent-GOLD transition-colors">가치 비교</a>
              <a href="#" onClick={toggleMenu} className="hover:text-accent-GOLD transition-colors">FAQ</a>
              <hr className="border-white/10 w-40 mx-auto" />
              <button onClick={toggleMenu} className="px-8 py-4 rounded-full bg-accent-GOLD text-slate-900 font-bold hover:bg-white transition-colors">
                동의율 확인
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <Features />
        <ValueComparison />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
