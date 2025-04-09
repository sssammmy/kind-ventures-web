
import { Check, TrendingUp, Target, BarChart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle mx-auto">
            Kind Ventures is an acquisition firm focused on scaling established B2B service businesses through strategic technology implementation and operational excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="reveal">
            <div className="h-full flex flex-col p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-kind-blue/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-kind-blue" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-kind-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                We're committed to acquiring valuable businesses and transforming them with strategic technological advancements while preserving their core values and strengths.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start">
                  <Check className="text-kind-blue shrink-0 mt-1" size={20} />
                  <span className="ml-3 text-gray-700">Preserve business legacy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kind-blue shrink-0 mt-1" size={20} />
                  <span className="ml-3 text-gray-700">Implement innovative technology</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kind-blue shrink-0 mt-1" size={20} />
                  <span className="ml-3 text-gray-700">Scale operations thoughtfully</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="reveal">
            <div className="h-full flex flex-col p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-kind-blue/10 rounded-full flex items-center justify-center mb-6">
                <BarChart className="text-kind-blue" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-kind-navy mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-6">
                Our team brings decades of combined experience in business operations, technology implementation, and strategic growth to every acquisition.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start">
                  <Check className="text-kind-blue shrink-0 mt-1" size={20} />
                  <span className="ml-3 text-gray-700">Operational excellence</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kind-blue shrink-0 mt-1" size={20} />
                  <span className="ml-3 text-gray-700">Technology integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kind-blue shrink-0 mt-1" size={20} />
                  <span className="ml-3 text-gray-700">Financial optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
