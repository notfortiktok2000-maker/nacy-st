import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight" onClick={() => setIsOpen(false)}>
            NACY ST.
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button onClick={() => handleNavClick('services')} className="hover:text-accent transition-colors cursor-pointer">Services</button>
            <button onClick={() => handleNavClick('why-us')} className="hover:text-accent transition-colors cursor-pointer">Why Us</button>
            <button onClick={() => handleNavClick('pricing')} className="hover:text-accent transition-colors cursor-pointer">Pricing</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-accent transition-colors cursor-pointer">Contact</button>
          </nav>

          <div className="hidden md:block">
            <button 
              type="button"
              className="bg-foreground text-white px-5 py-2 rounded-full text-sm font-medium transition-transform hover:scale-95"
              onClick={() => handleNavClick('contact')}
            >
              Start a project
            </button>
          </div>

          <button 
            type="button" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-xl font-semibold transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button onClick={() => handleNavClick('services')} className="hover:text-accent transition-colors">Services</button>
        <button onClick={() => handleNavClick('why-us')} className="hover:text-accent transition-colors">Why Us</button>
        <button onClick={() => handleNavClick('pricing')} className="hover:text-accent transition-colors">Pricing</button>
        <button onClick={() => handleNavClick('contact')} className="hover:text-accent transition-colors">Contact</button>
        
        <button 
          type="button"
          className="bg-foreground text-white px-8 py-3 rounded-full text-lg mt-8 transition-transform hover:scale-95"
          onClick={() => handleNavClick('contact')}
        >
          Start a project
        </button>
      </div>
    </>
  );
}
