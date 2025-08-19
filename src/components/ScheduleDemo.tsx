import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, Building, Car, GraduationCap, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sendScheduleDemoEmail, sendScheduleDemoEmailBackup } from '@/lib/emailService';

interface ScheduleDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  clientType: 'college' | 'driver' | 'student' | '';
  message: string;
}

const ScheduleDemo: React.FC<ScheduleDemoProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    clientType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Ensure clientType is not empty before sending
      if (!formData.clientType) {
        alert('Please select your client type.');
        setIsSubmitting(false);
        return;
      }

      console.log('Attempting to send email...');
      
      // Try EmailJS first
      let success = false;
      try {
        success = await sendScheduleDemoEmail({
          ...formData,
          clientType: formData.clientType as 'college' | 'driver' | 'student'
        });
        console.log('EmailJS result:', success);
      } catch (emailjsError) {
        console.error('EmailJS failed, trying backup method:', emailjsError);
        // Fallback to backup method
        success = await sendScheduleDemoEmailBackup({
          ...formData,
          clientType: formData.clientType as 'college' | 'driver' | 'student'
        });
        console.log('Backup method result:', success);
      }
      
      if (success) {
        // Show success message
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            organization: '',
            clientType: '',
            message: ''
          });
          onClose();
        }, 3000);
      } else {
        // Handle error case
        alert('There was an error sending your request. Please try again or contact us directly.');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.phone && formData.clientType;
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Demo Scheduled!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for your interest! We've received your demo request and will contact you within 24 hours.
          </p>
          <p className="text-sm text-gray-500">
            Check your email for confirmation details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Schedule a Demo</h2>
                <p className="text-sm text-gray-600">Let us show you how Safe Drop can transform your transportation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form Container with Scroll */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Client Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                I am a: *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'college', label: 'College/School', icon: Building, color: 'blue' },
                  { value: 'driver', label: 'Driver', icon: Car, color: 'green' },
                  { value: 'student', label: 'Student/Parent', icon: GraduationCap, color: 'purple' }
                ].map((type) => {
                  const Icon = type.icon;
                  const isSelected = formData.clientType === type.value;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, clientType: type.value as any }))}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        isSelected
                          ? `border-${type.color}-500 bg-${type.color}-50`
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`h-6 w-6 mx-auto mb-2 ${
                        isSelected ? `text-${type.color}-600` : 'text-gray-400'
                      }`} />
                      <span className={`font-medium ${
                        isSelected ? `text-${type.color}-700` : 'text-gray-700'
                      }`}>
                        {type.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="inline h-4 w-4 mr-2" />
                  {formData.clientType === 'college' ? 'School/College Name' : 
                   formData.clientType === 'driver' ? 'Transport Company' : 'Organization'}
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={formData.clientType === 'college' ? 'Enter school/college name' : 
                             formData.clientType === 'driver' ? 'Enter company name' : 'Enter organization name'}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Tell us about your transportation needs, current challenges, or any specific questions..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="px-6 bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Scheduling...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Schedule Demo
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;
