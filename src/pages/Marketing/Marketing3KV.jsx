import React from 'react';
import { CheckCircle, Factory, Zap, Crown, Battery } from 'lucide-react';
import { marketingSystems } from '../../data/mockData';

export default function Marketing3KV() {
  const system = marketingSystems['3kv'];

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
              alt="3KV Solar System"
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
              <h2 className="heading-2 mb-6">Premium System Features</h2>
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
              <h3 className="heading-3 mb-4">Commercial Applications</h3>
              <div className="space-y-4">
                {system.applications.map((application, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Factory className="h-5 w-5 text-green-600" />
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
          <h2 className="heading-2 text-center mb-12">Why Choose 3KV Systems?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="product-card text-center">
              <Crown className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Premium Performance</h3>
              <p className="body-small text-gray-600">
                Maximum energy independence with premium components
              </p>
            </div>
            <div className="product-card text-center">
              <Battery className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">High Capacity</h3>
              <p className="body-small text-gray-600">
                Power all household appliances including air conditioning
              </p>
            </div>
            <div className="product-card text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Commercial Grade</h3>
              <p className="body-small text-gray-600">
                Industrial-strength components for commercial applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Go Premium with 3KV Solar</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Experience complete energy independence with our premium 3KV solar systems. 
            Ideal for large homes and commercial establishments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Quote for 3KV System
            </a>
            <a href="/service/installation" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              View Installation Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}