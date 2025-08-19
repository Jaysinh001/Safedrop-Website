// Email service utility for sending schedule demo requests
// This is a template that you can integrate with your preferred email service

import emailjs from '@emailjs/browser';

export interface ScheduleDemoData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  clientType: 'college' | 'driver' | 'student';
  message: string;
}

// Test function to verify EmailJS is working
export const testEmailJS = async (): Promise<boolean> => {
  try {
    console.log('Testing EmailJS connection...');
    
    // Test with minimal data
    const testParams = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      organization: 'Test Org',
      client_type: 'college',
      message: 'This is a test message',
      subject: 'Test Demo Request'
    };

    const response = await emailjs.send(
      'service_sk65o4d',
      'template_sygpuxd',
      testParams,
      '8d0N6Lw4ivFd3z538'
    );

    console.log('EmailJS test successful:', response);
    return true;
  } catch (error) {
    console.error('EmailJS test failed:', error);
    return false;
  }
};

export const sendScheduleDemoEmail = async (data: ScheduleDemoData): Promise<boolean> => {
  try {
    console.log('Starting EmailJS send process...');
    console.log('EmailJS data:', data);
    
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      organization: data.organization,
      client_type: data.clientType,
      message: data.message,
      subject: `New Demo Request from ${data.name} - ${data.clientType}`
    };

    console.log('Template parameters:', templateParams);
    console.log('Service ID:', 'service_sk65o4d');
    console.log('Template ID:', 'template_sygpuxd');
    console.log('Public Key:', '8d0N6Lw4ivFd3z538');

    const response = await emailjs.send(
      'service_sk65o4d',
      'template_sygpuxd',
      templateParams,
      '8d0N6Lw4ivFd3z538'
    );

    console.log('EmailJS response:', response);
    console.log('Response status:', response.status);
    
    return response.status === 200;
  } catch (error) {
    console.error('Detailed EmailJS error:', error);
    console.error('Error type:', typeof error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    return false;
  }
};

// Backup function using the old method (for testing)
export const sendScheduleDemoEmailBackup = async (data: ScheduleDemoData): Promise<boolean> => {
  try {
    // Log the data for debugging
    console.log('Schedule Demo Request Data (Backup):', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
