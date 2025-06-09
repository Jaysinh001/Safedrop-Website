
import React from 'react';
import { Download, UserCheck, MapPin, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Download the App",
      description: "Students, parents, and drivers download the Safe Drop mobile app from their respective app stores.",
      step: "01"
    },
    {
      icon: UserCheck,
      title: "Create Your Profile",
      description: "Set up your profile with verification. Schools can onboard their entire transport network easily.",
      step: "02"
    },
    {
      icon: MapPin,
      title: "Start Tracking",
      description: "Drivers begin their routes while parents and students track location in real-time with live updates.",
      step: "03"
    },
    {
      icon: MessageCircle,
      title: "Stay Connected",
      description: "Communicate safely, make payments seamlessly, and receive important notifications instantly.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Safe Drop Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple, intuitive process designed for 
            schools, drivers, students, and parents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center z-10">
                    {step.step}
                  </div>
                  
                  {/* Icon Container */}
                  <div className="bg-white rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 border-4 border-blue-100">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -z-10"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
