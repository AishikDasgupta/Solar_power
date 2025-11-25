import React from 'react';
import { Wrench, CheckCircle, Clock, Award, Users, Shield } from 'lucide-react';
import { services } from '../../data/mockData';

export default function ServiceInstallation() {
  const installation = services.installation;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Wrench className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">{installation.title}</h1>
            <p className="body-large text-gray-600 mb-8">{installation.description}</p>
            <img 
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Solar Installation Process"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Our Installation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installation.process.map((step, index) => (
              <div key={index} className="product-card">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h3 className="heading-3">{step}</h3>
                </div>
                <p className="body-small text-gray-600">
                  Professional execution of {step.toLowerCase()} with attention to detail and quality standards.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Installation Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {installation.benefits.map((benefit, index) => {
              const icons = [Award, CheckCircle, Clock, Users, Shield];
              const IconComponent = icons[index] || CheckCircle;
              
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="heading-3 mb-3">{benefit}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Capacity Range */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">System Capacity Range (3-10 KW)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="product-card text-center">
              <h3 className="heading-3 mb-4">3KW - 10KW Systems</h3>
              <p className="body-medium text-gray-700 mb-4">Perfect for large residential homes</p>
              <ul className="space-y-2 text-left">
                <li className="body-small">• Powers entire household</li>
                <li className="body-small">• Air conditioning support</li>
                <li className="body-small">• Multiple appliances</li>
                <li className="body-small">• Battery backup optional</li>
              </ul>
            </div>
            
            <div className="product-card text-center">
              <h3 className="heading-3 mb-4">5KW - 100KW Systems</h3>
              <p className="body-medium text-gray-700 mb-4">Ideal for small commercial setups</p>
              <ul className="space-y-2 text-left">
                <li className="body-small">• Small offices and shops</li>
                <li className="body-small">• Light industrial loads</li>
                <li className="body-small">• Reliable power supply</li>
                <li className="body-small">• Grid-tie capability</li>
              </ul>
            </div>
            
            <div className="product-card text-center">
              <h3 className="heading-3 mb-4">100KW - 1MW Systems</h3>
              <p className="body-medium text-gray-700 mb-4">Commercial and industrial applications</p>
              <ul className="space-y-2 text-left">
                <li className="body-small">• Large commercial facilities</li>
                <li className="body-small">• Industrial operations</li>
                <li className="body-small">• Healthcare centers</li>
                <li className="body-small">• Educational institutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <div className="product-card">
            <h2 className="heading-2 text-center mb-8">Quality Assurance & Standards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-3 mb-4">Installation Standards</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Compliance with electrical safety codes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Professional mounting and weatherproofing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Optimal panel placement and orientation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Quality DC and AC wiring with proper labeling</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="heading-3 mb-4">Testing & Commissioning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">System performance verification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Safety testing and insulation checks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Grid synchronization and net metering setup</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Complete documentation and handover</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Ready for Professional Installation?</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Get your solar system professionally installed by our certified engineers. 
            From 3KW to 10KW systems, we handle projects of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Installation Quote
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