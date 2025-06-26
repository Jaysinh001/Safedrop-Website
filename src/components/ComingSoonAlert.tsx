
import React, { useState } from 'react';
import { X, Clock } from 'lucide-react';

interface ComingSoonAlertProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ComingSoonAlert: React.FC<ComingSoonAlertProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4 max-w-md w-full border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 rounded-full p-2">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6 leading-relaxed">
            This feature is coming soon! Stay tuned for updates as we work to bring you the best experience.
          </p>
          
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonAlert;
