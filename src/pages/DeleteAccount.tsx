import React, { useState } from 'react';
import { Trash2, AlertTriangle, Phone, Mail, MessageSquare } from 'lucide-react';

const DeleteAccount = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    email: '',
    reason: '',
    confirmation: ''
  });
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Check if all required fields are filled and confirmation is correct
    if (name === 'confirmation') {
      const allFieldsFilled = formData.mobileNumber && formData.email && formData.reason && value === 'DELETE';
      setIsValid(allFieldsFilled);
    } else {
      const allFieldsFilled = value && formData.mobileNumber && formData.email && formData.reason && formData.confirmation === 'DELETE';
      setIsValid(allFieldsFilled);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      // Handle account deletion logic here
      setIsSubmitted(true);
      // In a real application, you would send this data to your backend
      console.log('Account deletion request:', formData);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="container max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 border border-green-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Trash2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Request Submitted Successfully
            </h1>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-medium">
                Your Account Deletion Request is sent to The team
              </p>
              <p className="text-green-700 mt-2">
                Your account will be deleted within 14 working days
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              You will receive a confirmation email shortly. Please check your inbox.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="container max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 border border-red-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Trash2 className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Delete Your Account
            </h1>
            <p className="text-gray-600 leading-relaxed">
              We're sorry to see you go! Deleting your account will permanently erase all your data, 
              including your profile, settings, and content. This action cannot be undone.
            </p>
          </div>

          {/* Warning Box */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <strong className="text-red-800 font-semibold">Warning:</strong>
                <span className="text-red-700 ml-1">
                  Once you delete your account, you will not be able to recover it.
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mobile Number Field */}
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="inline h-4 w-4 mr-2" />
                Registered Mobile Number *
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your mobile number"
              />
            </div>

            {/* Email Field */}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your email address"
              />
            </div>

            {/* Reason Field */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline h-4 w-4 mr-2" />
                Reason for Account Deletion *
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                placeholder="Please tell us why you want to delete your account..."
              />
            </div>

            {/* Confirmation Field */}
            <div>
              <label htmlFor="confirmation" className="block text-sm font-medium text-gray-700 mb-2">
                Type <strong className="text-red-600">DELETE</strong> to confirm: *
              </label>
              <input
                type="text"
                id="confirmation"
                name="confirmation"
                value={formData.confirmation}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  formData.confirmation && !isValid 
                    ? 'border-red-300 bg-red-50' 
                    : 'border-gray-300'
                }`}
                placeholder="Type DELETE to confirm"
              />
              {formData.confirmation && !isValid && (
                <p className="mt-1 text-sm text-red-600">
                  Please fill all required fields and type "DELETE" exactly to confirm
                </p>
              )}
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={!isValid}
                className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  isValid
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-sm'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Deletion Request
              </button>
              
              <div className="text-center">
                <span className="text-sm text-gray-500">
                  No navigation links provided as requested
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
