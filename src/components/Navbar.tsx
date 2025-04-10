
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element?.getBoundingClientRect().top || 0;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/lovable-uploads/664338e2-3887-4da3-b207-e98bf9492182.png" alt="Kind Ventures Logo" className="h-16 md:h-20" />
            <span className={`font-montserrat font-bold text-xl md:text-2xl ${scrolled ? 'text-kind-navy' : 'text-kind-navy'}`}>
              Kind Ventures
            </span>
          </a>
          
          <div className="hidden lg:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('about')} className={`font-medium hover:text-kind-blue transition-colors ${scrolled ? 'text-gray-800' : 'text-kind-navy'}`}>
              About
            </button>
            <button onClick={() => scrollToSection('approach')} className={`font-medium hover:text-kind-blue transition-colors ${scrolled ? 'text-gray-800' : 'text-kind-navy'}`}>
              Approach
            </button>
            <button onClick={() => scrollToSection('contact')} className={`font-medium hover:text-kind-blue transition-colors ${scrolled ? 'text-gray-800' : 'text-kind-navy'}`}>
              Contact
            </button>
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${scrolled ? 'text-gray-800' : 'text-kind-navy'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-gray-800" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-8 mt-8">
          <button onClick={() => scrollToSection('about')} className="text-xl font-montserrat font-semibold text-gray-800 hover:text-kind-blue transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('approach')} className="text-xl font-montserrat font-semibold text-gray-800 hover:text-kind-blue transition-colors">
            Approach
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-xl font-montserrat font-semibold text-gray-800 hover:text-kind-blue transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
