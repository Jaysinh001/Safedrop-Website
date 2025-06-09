
import React from 'react';
import { ArrowRight, Smartphone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform School Transport?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of schools, drivers, and families who trust Safe Drop 
            for secure, efficient, and transparent transportation solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* For Schools */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">For Schools & Institutions</h3>
              <p className="text-blue-100 mb-6">
                Streamline your transportation management with our comprehensive platform designed for educational institutions.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 w-full"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* For Individuals */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Smartphone className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">For Parents & Students</h3>
              <p className="text-blue-100 mb-6">
                Download our mobile app and experience safe, trackable, and convenient school transportation.
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 w-full"
              >
                Download App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-blue-100 mb-4">
              Have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hello@safedrop.app" 
                className="text-white hover:text-blue-200 transition-colors"
              >
                hello@safedrop.app
              </a>
              <span className="hidden sm:block text-blue-300">|</span>
              <a 
                href="tel:+911234567890" 
                className="text-white hover:text-blue-200 transition-colors"
              >
                +91 12345 67890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
