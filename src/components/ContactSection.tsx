
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding blue-gradient text-white">
      <div className="container-custom">
        <div className="text-center">
          {/* Added logo at the top of the section */}
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/664338e2-3887-4da3-b207-e98bf9492182.png" 
              alt="Kind Ventures Logo" 
              className="h-20 md:h-24 object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Interested in discussing potential acquisition opportunities or learning more about Kind Ventures? We'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mt-10">
          <div className="reveal">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a href="mailto:sshahram@kindacquisitions.com" className="text-blue-100 hover:text-white transition-colors">
                    shahram@kindacquisitions.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <a href="tel:+19492025717" className="text-blue-100 hover:text-white transition-colors">
                    (949) 202-5717
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-blue-100">
                    Newport Center Drive<br />
                    Newport Beach, CA 92660
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
