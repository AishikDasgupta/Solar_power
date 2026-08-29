import React from 'react';
import { Zap, CheckCircle, Settings, Wrench, Shield } from 'lucide-react';

const electricalServices = [
  'Installation, Testing, commissioning of Power Plant, HT/LT Panels, Synchronization panels, Bus Duct, APFC, ATS Panels Transformer & Package substation.',
  'Erection, Installation & commissioning of Transformers.',
  'Operation and maintenance contract/AMC for LT, HT Panels.',
  'Onsite Transformer testing, Transformer Oil filtration, Rewinding/Recoiling and reassembling service.',
  'Maintenance & testing of Oil cooled (upto 132KV), Dry type Transformers, servicing, Overhauling, Oil filtration, BDV testing and Gasket replacement.',
  'Fault diagnose Management.',
  'Manufacturing and Engineering consultancy for custom design LT control Panel.',
  'Turnkey electrical consultancy for commercial and infrastructure projects.',
  'Switch gear and protection service like VCB, OCB SF6, ACB, LBS, MOCB Protection relay circuits.',
];

const galleryImages = [
  { src: '/assets/elec1.jpeg', alt: 'Electrical Installation Work' },
  { src: '/assets/elec2.jpeg', alt: 'HT/LT Panel Commissioning' },
  { src: '/assets/elec3.jpeg', alt: 'Transformer Maintenance' },
  { src: '/assets/elec4.jpeg', alt: 'Switchgear and Protection Service' },
];

export default function Electricity() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">Electrical Services & Maintenance</h1>
            <p className="body-large text-gray-600 mb-8">
              We provide the following Electrical services and Maintenance work, delivered by our team of certified engineers and technicians.
            </p>
            <img 
              src="/assets/elec1.jpeg" 
              alt="Electrical Services" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {electricalServices.map((service, index) => (
              <div key={index} className="product-card flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="body-medium text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Why Our Electrical Services Stand Out</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="heading-3 mb-3">Expert Installation</h3>
              <p className="body-small text-gray-600">
                Professional installation, testing and commissioning of HT/LT panels, transformers and power plants.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="heading-3 mb-3">Reliable Maintenance</h3>
              <p className="body-small text-gray-600">
                Comprehensive AMC, transformer overhauling, oil filtration and onsite testing services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="heading-3 mb-3">Safety & Compliance</h3>
              <p className="body-small text-gray-600">
                Switchgear protection, fault diagnosis and consultancy with strict safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Our Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Need Electrical Services?</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            From transformer maintenance to turnkey electrical consultancy, our experts are ready to help with your commercial and infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Contact Us
            </a>
            <a href="/service/amc" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              View AMC Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
