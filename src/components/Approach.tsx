
import { useState } from 'react';
import { Search, Handshake, Zap, LineChart } from 'lucide-react';

const Approach = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'acquisition',
      title: 'Acquisition',
      icon: <Search size={24} />,
      description: 'We search for and acquire established B2B service businesses with strong fundamentals, loyal customer bases, and growth potential.',
      points: [
        'Focus on profitable businesses with 5+ years of operation',
        'Seek companies with recurring revenue models',
        'Target businesses with strong customer relationships'
      ]
    },
    {
      id: 'transition',
      title: 'Transition',
      icon: <Handshake size={24} />,
      description: 'We ensure smooth transitions that respect the legacy of acquired businesses while positioning them for future growth and success.',
      points: [
        'Work closely with previous owners during handover',
        'Maintain key client relationships and staff',
        'Preserve core business values and strengths'
      ]
    },
    {
      id: 'transformation',
      title: 'Transformation',
      icon: <Zap size={24} />,
      description: 'We implement strategic technological improvements and operational optimizations to enhance efficiency and service delivery.',
      points: [
        'Modernize systems and processes',
        'Implement scalable technology solutions',
        'Enhance service delivery through automation'
      ]
    },
    {
      id: 'growth',
      title: 'Growth',
      icon: <LineChart size={24} />,
      description: 'We scale businesses through strategic expansion initiatives, new market entry, and enhanced service offerings.',
      points: [
        'Expand service offerings strategically',
        'Enter new markets and customer segments',
        'Invest in marketing and sales capabilities'
      ]
    }
  ];

  return (
    <section id="approach" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-subtitle mx-auto">
            We follow a proven process to acquire, transform, and grow B2B service businesses through strategic technology integration.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-5 py-3 rounded-full transition-all ${
                  activeTab === index 
                    ? 'bg-kind-blue text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span className="font-medium">{tab.title}</span>
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-sm reveal">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-kind-blue/10 rounded-full flex items-center justify-center">
                {tabs[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold text-kind-navy ml-4">{tabs[activeTab].title}</h3>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              {tabs[activeTab].description}
            </p>
            <ul className="space-y-4">
              {tabs[activeTab].points.map((point, i) => (
                <li key={i} className="flex items-center bg-gray-50 p-4 rounded-md">
                  <div className="w-8 h-8 rounded-full bg-kind-blue flex items-center justify-center text-white font-semibold shrink-0">
                    {i + 1}
                  </div>
                  <span className="ml-4 text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
