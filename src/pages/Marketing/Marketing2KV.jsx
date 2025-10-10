import React from 'react';
import { CheckCircle, Building2, Zap, TrendingUp, Shield } from 'lucide-react';
import { marketingSystems } from '../../data/mockData';

export default function Marketing2KV() {
  const system = marketingSystems['2kv'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">{system.title}</h1>
            <p className="body-large text-gray-600 mb-8">{system.description}</p>
            <img 
              src={system.image}
              alt="2KV Solar System"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pad-xl">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">System Features</h2>
              <div className="space-y-4">
                {system.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="body-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="product-card">
              <h3 className="heading-3 mb-4">Ideal Applications</h3>
              <div className="space-y-4">
                {system.applications.map((application, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-green-600" />
                    <span className="body-medium">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Why Choose 2KV Systems?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="product-card text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Scalable Solution</h3>
              <p className="body-small text-gray-600">
                Perfect balance of capacity and cost for medium energy needs
              </p>
            </div>
            <div className="product-card text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Reliable Performance</h3>
              <p className="body-small text-gray-600">
                Consistent power generation with backup capabilities
              </p>
            </div>
            <div className="product-card text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Enhanced Features</h3>
              <p className="body-small text-gray-600">
                Support for refrigerators, ACs, and multiple appliances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Upgrade to 2KV Solar Power</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Experience enhanced energy independence with our 2KV solar systems. 
            Perfect for growing families and small businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Quote for 2KV System
            </a>
            <a href="/sales/inverter" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              View Inverters
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}