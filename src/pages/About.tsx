
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Safe Drop</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're revolutionizing school transportation with technology that prioritizes safety, 
              transparency, and peace of mind for students, parents, and educational institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To make school transportation safer, more transparent, and stress-free for everyone involved. 
                We believe that every child deserves to travel safely to and from school, and every parent 
                deserves peace of mind knowing their child's whereabouts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through innovative technology and user-centric design, we're bridging the communication 
                gap between drivers, students, and parents while ensuring the highest standards of safety 
                and reliability.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <Shield className="h-16 w-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">
                Every feature we build, every decision we make, is guided by our commitment to keeping 
                students safe during their daily commute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Safe Drop.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety & Security</h3>
              <p className="text-gray-600">
                We prioritize the safety and security of students above all else, implementing 
                robust verification and monitoring systems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Focus</h3>
              <p className="text-gray-600">
                We build solutions that bring communities together, fostering better communication 
                between all stakeholders in school transportation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to provide cutting-edge solutions that make school 
                transportation more efficient and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Safe Drop?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a technology company - we're your partners in ensuring safe school transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600 text-sm">1000+ schools trust us with their transportation needs</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Verified Drivers</h3>
              <p className="text-gray-600 text-sm">Comprehensive background checks for all drivers</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">50K+ Happy Users</h3>
              <p className="text-gray-600 text-sm">Students and parents who rely on Safe Drop daily</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
              <p className="text-gray-600 text-sm">Reliable service you can count on every day</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
