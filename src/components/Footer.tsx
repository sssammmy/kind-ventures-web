
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kind-navy text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img src="/lovable-uploads/664338e2-3887-4da3-b207-e98bf9492182.png" alt="Kind Ventures Logo" className="h-10" />
            <span className="font-montserrat font-bold text-xl">Kind Ventures</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex items-center">
              <Mail size={18} className="mr-2" />
              <a href="mailto:shahram@kindacquisitions.com" className="hover:text-kind-blue transition-colors">
                shahram@kindacquisitions.com
              </a>
            </div>
            
            <div className="flex items-center">
              <Phone size={18} className="mr-2" />
              <a href="tel:+19492025717" className="hover:text-kind-blue transition-colors">
                (949) 202-5717
              </a>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-white/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div>© {currentYear} Kind Ventures. All rights reserved.</div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="https://kindacquisitions.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-kind-blue transition-colors"
            >
              <span>kindacquisitions.com</span>
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
