import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Building, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL_HERE';
      
      if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        toast.error('Google Script URL not configured. Please add REACT_APP_GOOGLE_SCRIPT_URL to your .env file.');
        setIsSubmitting(false);
        return;
      }

      // Use no-cors mode for Google Apps Script to avoid CORS preflight issues
      // Note: With no-cors, we can't read the response, but the data will be sent
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // With no-cors mode, response.ok will always be false, so we assume success
      // The data will still be sent to Google Sheets
      toast.success('Thank you! Your message has been sent successfully. We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Contact Green Power Solar Energy</h1>
            <p className="body-large text-gray-600">
              Get in touch with our solar experts for consultation, quotes, and support. 
              We're here to help you harness the power of the sun.
            </p>
          </div>
        </div>
      </section>

      <div className="container pad-xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="heading-2 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your solar energy requirements..."
                  rows="6"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-3 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone (10 AM – 7 PM)</h4>
                    <p className="body-small text-gray-600">9903144213</p>
                    <p className="body-small text-gray-600">9051167746</p>
                    <p className="body-small text-gray-600">8910858002</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="body-small text-gray-600">gpse1988@gmail.com</p>
                    <p className="body-small text-gray-600">connect@gpse.co.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="product-card">
              <h3 className="heading-3 mb-4">Office Locations</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Building className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold">City Office</h4>
                  </div>
                  <p className="body-small text-gray-600 ml-7">
                    412D/5, NSC Bose Road<br />
                    Opp Garia Traffic Guard<br />
                    Kolkata – 700047 WB
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold">Registered Office</h4>
                  </div>
                  <p className="body-small text-gray-600 ml-7">
                    Bonnhooghly, Narendrapur<br />
                    Ramchandrapur, Mohan Ghosh Road<br />
                    Kolkata – 700103 WB
                  </p>
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className="product-card">
              <h3 className="heading-3 mb-4">Business Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="body-small font-medium">GST Number:</span>
                  <span className="body-small text-gray-600">19BISPM1609L1Z0</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-small font-medium">MSME Certificate:</span>
                  <span className="body-small text-gray-600">UDYAM-WB-18-0053829</span>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="product-card">
              <div className="flex items-center space-x-2 mb-4">
                <CreditCard className="h-5 w-5 text-green-600" />
                <h3 className="heading-3">Bank Details</h3>
              </div>
              <div className="space-y-2">
                <p className="body-small"><strong>Account Name:</strong> Green Power Solar Energy</p>
                <p className="body-small"><strong>Bank:</strong> Bandhan Bank, Boral Branch</p>
                <p className="body-small"><strong>A/c No:</strong> 1023 0012 7756 93</p>
                <p className="body-small"><strong>IFSC:</strong> BDBL0002009</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="heading-3 mb-6 text-center">Find Us on Map</h3>
          <div className="product-card p-0 overflow-hidden">
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=412D/5,+NSC+Bose+Road,+Opp+Garia+Traffic+Guard,+Kolkata+700047&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Green Power Solar Energy - City Office Location"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">City Office</p>
                    <p className="text-gray-600">
                      412D/5, NSC Bose Road, Opp Garia Traffic Guard, Kolkata – 700047 WB
                    </p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/WoZkhx4RoHJZiJoU6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}