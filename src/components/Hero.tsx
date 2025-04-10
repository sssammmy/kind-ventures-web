
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-white to-[#ECF6FF]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1REE5REYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col max-w-5xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-kind-navy mb-6">
              Transforming Businesses Through <span className="text-kind-blue">One of a <span className="text-kind-navy">Kind</span> Acquisition <span className="text-kind-navy">Playbook</span></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl">
              We acquire long-standing profitable B2B service businesses and scale them with technology and experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToAbout}
                className="px-8 py-3 bg-kind-blue text-white rounded-md hover:bg-kind-navy transition-colors duration-300 font-medium"
              >
                Learn More
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-transparent border-2 border-kind-navy text-kind-navy rounded-md hover:bg-kind-navy hover:text-white transition-colors duration-300 font-medium"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-kind-blue text-kind-blue hover:bg-kind-blue hover:text-white transition-all"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
