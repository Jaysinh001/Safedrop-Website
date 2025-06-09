
import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const Safety = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Driver Verification",
      description: "Comprehensive background checks and document verification for all drivers."
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "End-to-end encryption and secure data storage following industry best practices."
    },
    {
      icon: Eye,
      title: "Live Monitoring",
      description: "24/7 monitoring system with instant alerts for any unusual activity or emergencies."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response",
      description: "One-tap emergency alerts to parents, schools, and emergency services when needed."
    }
  ];

  return (
    <section id="safety" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Safety is Our Top Priority
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We understand that nothing is more important than the safety of students. 
              That's why we've built comprehensive safety measures into every aspect of our platform.
            </p>
            
            <div className="space-y-6">
              {safetyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-800 rounded-lg p-3 flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-blue-100">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Safety Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Safety Statistics
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Zero Security Incidents</div>
                    <div className="text-sm text-gray-600">In the last 12 months</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">0</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Verified Drivers</div>
                    <div className="text-sm text-gray-600">Background checked</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">100%</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Eye className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900">System Uptime</div>
                    <div className="text-sm text-gray-600">Reliable monitoring</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-600">99.9%</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Certified by leading security organizations and compliant with international safety standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
