
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy and data security are our top priorities. Learn how we collect,
              use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: December 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Overview */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Safe Drop ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our mobile
                application and related services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By using Safe Drop, you consent to the practices described in this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Student and parent information for account setup</li>
                    <li>School and transportation route details</li>
                    <li>Payment information for fee collection</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Location Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Real-time GPS location data for tracking purposes</li>
                    <li>Route information and stops</li>
                    <li>Pickup and drop-off locations</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Communication Data</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Messages sent through our platform</li>
                    <li>Emergency alerts and notifications</li>
                    <li>Customer support communications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Provide real-time tracking services</li>
                    <li>Facilitate communication between users</li>
                    <li>Process payments and fee collection</li>
                    <li>Send important notifications and alerts</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Safety & Security</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Verify driver credentials and backgrounds</li>
                    <li>Monitor for emergency situations</li>
                    <li>Ensure compliance with safety protocols</li>
                    <li>Investigate and resolve safety concerns</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Analyze usage patterns to improve services</li>
                    <li>Develop new features and functionality</li>
                    <li>Optimize routes and scheduling</li>
                    <li>Enhance user experience</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Comply with applicable laws and regulations</li>
                    <li>Respond to legal requests and court orders</li>
                    <li>Protect our rights and interests</li>
                    <li>Prevent fraud and abuse</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>End-to-end encryption for all communications</li>
                    <li>Secure data storage with regular backups</li>
                    <li>Multi-factor authentication for accounts</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal data</li>
                    <li>Compliance with data protection regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Access and Update</h3>
                  <p className="text-gray-600">You can access and update your personal information through your account settings.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Data Deletion</h3>
                  <p className="text-gray-600">You can request deletion of your personal data, subject to legal and safety requirements.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Opt-out</h3>
                  <p className="text-gray-600">You can opt-out of non-essential communications and marketing messages.</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-900 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About This Policy?</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@safedrop.app</p>
                <p><strong>Phone:</strong> +91 95104 83242</p>
                <p><strong>Address:</strong> Safe Drop Technologies, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
