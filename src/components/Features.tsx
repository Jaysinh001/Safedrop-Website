
import React from 'react';
import { MapPin, MessageCircle, CreditCard, Shield, Bell, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track school buses and vans in real-time with GPS accuracy. Parents know exactly when to expect their child.",
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Secure Communication",
      description: "Direct messaging between drivers, students, and parents in a safe, monitored environment.",
      color: "bg-green-500"
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Seamless fee collection with multiple payment options. Automated reminders and receipts.",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Emergency alerts, driver verification, and comprehensive safety protocols for peace of mind.",
      color: "bg-red-500"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Timely alerts for pickup/drop-off times, route changes, and important announcements.",
      color: "bg-yellow-500"
    },
    {
      icon: Clock,
      title: "Schedule Management",
      description: "Efficient route planning and schedule optimization for better time management.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Safe Transport
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform brings together all stakeholders with cutting-edge technology 
            to ensure safe, efficient, and transparent school transportation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
