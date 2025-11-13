import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsGallery } from './components/ProjectsGallery';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="relative group">
              <span className="text-2xl text-white tracking-tighter">
                VK
              </span>
              <span className="text-2xl bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] bg-clip-text text-transparent">
                .
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00FFF7]/20 to-[#8B00FF]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group relative px-6 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/10 to-[#8B00FF]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] group-hover:w-full transition-all" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-colors overflow-hidden group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/5 to-[#8B00FF]/5 translate-y-full group-hover:translate-y-0 transition-transform" />
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white relative z-10" />
              ) : (
                <Menu className="w-5 h-5 text-white relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800"
            >
              <div className="px-6 py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group block px-4 py-3 text-gray-400 hover:text-white transition-colors relative overflow-hidden"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/10 to-[#8B00FF]/10 translate-x-full group-hover:translate-x-0 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <ProjectsGallery />
        <div id="skills">
          <Skills />
        </div>
        <Footer />
      </main>

      {/* Cursor follower effect (optional enhancement) */}
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:block hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 247, 0.05), transparent 80%)'
        }} />
      </div>
    </div>
  );
}
