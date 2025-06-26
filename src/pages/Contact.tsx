import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComingSoonAlert from '@/components/ComingSoonAlert';

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAlert(true);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
                {/* Hero Section */}
                <section className="pt-20 pb-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Get in Touch
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Have questions about Safe Drop? We're here to help! Reach out to us and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Contact Form */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="What's this about?"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                            required
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                                        Send Message
                                        <Send className="ml-2 h-5 w-5" />
                                    </Button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl shadow-lg p-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-blue-100 rounded-lg p-3">
                                                <Mail className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Email</h3>
                                                <a href="mailto:jcdevs.info@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                    jcdevs.info@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="bg-blue-100 rounded-lg p-3">
                                                <Phone className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Phone</h3>
                                                <a href="tel:+911234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                    +91 95104 83242
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="bg-blue-100 rounded-lg p-3">
                                                <MapPin className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Location</h3>
                                                <p className="text-gray-600">Vadodara, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                                    <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
                                    <p className="text-blue-100 mb-6">
                                        Join thousands of schools and families who trust Safe Drop for their transportation needs.
                                    </p>
                                    <Button
                                        className="bg-white text-blue-600 hover:bg-gray-100"
                                        onClick={() => window.open('https://play.google.com/store/apps/developer?id=JC+DEVS&hl=en_IN', '_blank')}
                                    >
                                        Download App
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />

            <ComingSoonAlert
                isOpen={showAlert}
                onClose={() => setShowAlert(false)}
                title="Message Sent"
            />
        </>
    );
};

export default Contact;