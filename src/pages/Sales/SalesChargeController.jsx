import React from 'react';
import { Settings, Smartphone, Shield, TrendingUp } from 'lucide-react';
import { salesProducts } from '../../data/mockData';

export default function SalesChargeController() {
  const controllers = salesProducts.controllers;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Settings className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">{controllers.title}</h1>
            <p className="body-large text-gray-600 mb-8">{controllers.description}</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Our Charge Controller Range</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {controllers.products.map((product, index) => (
              <div key={index} className="product-card">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="heading-3 mb-3">{product.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Current:</span>
                    <span className="body-small text-green-600 font-semibold">{product.current}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Voltage:</span>
                    <span className="body-small text-green-600 font-semibold">{product.voltage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Display:</span>
                    <span className="body-small text-green-600 font-semibold">{product.display}</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="body-small text-gray-600 mb-3">{product.price}</p>
                  <a href="/contact" className="btn-primary w-full">
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Controller Types */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Charge Controller Technology</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="product-card">
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="heading-3 mb-4">MPPT Controllers</h3>
              <p className="body-medium text-gray-700 mb-4">
                Maximum Power Point Tracking technology for optimal energy harvesting
              </p>
              <ul className="space-y-2">
                <li className="body-small flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Up to 30% more efficient than PWM
                </li>
                <li className="body-small flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Better performance in partial shade
                </li>
                <li className="body-small flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Advanced battery charging algorithms
                </li>
                <li className="body-small flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Temperature compensation
                </li>
              </ul>
            </div>
            
            <div className="product-card">
              <Settings className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="heading-3 mb-4">PWM Controllers</h3>
              <p className="body-medium text-gray-700 mb-4">
                Pulse Width Modulation controllers for cost-effective battery charging
              </p>
              <ul className="space-y-2">
                <li className="body-small flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Cost-effective solution
                </li>
                <li className="body-small flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Simple and reliable operation
                </li>
                <li className="body-small flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Suitable for small systems
                </li>
                <li className="body-small flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Low maintenance requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Key Features & Protection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Multi-Protection</h3>
              <p className="body-small text-gray-600">
                Overcharge, deep discharge, short circuit, and reverse polarity protection
              </p>
            </div>
            <div className="text-center">
              <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Smart Monitoring</h3>
              <p className="body-small text-gray-600">
                LCD displays and mobile app connectivity for real-time monitoring
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Efficiency</h3>
              <p className="body-small text-gray-600">
                High conversion efficiency with minimal power losses
              </p>
            </div>
            <div className="text-center">
              <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Programmable</h3>
              <p className="body-small text-gray-600">
                Customizable charging parameters for different battery types
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Info */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <div className="product-card">
            <h2 className="heading-2 text-center mb-8">Why Charge Controllers Matter</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-3 mb-4">Battery Protection</h3>
                <p className="body-medium text-gray-700 mb-4">
                  Charge controllers prevent battery damage by regulating the voltage and current 
                  flowing from solar panels to batteries.
                </p>
                <ul className="space-y-2">
                  <li className="body-small">• Prevents overcharging damage</li>
                  <li className="body-small">• Extends battery lifespan</li>
                  <li className="body-small">• Maintains optimal charging voltage</li>
                  <li className="body-small">• Temperature compensation</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-3 mb-4">System Optimization</h3>
                <p className="body-medium text-gray-700 mb-4">
                  Advanced controllers optimize energy harvest and system performance 
                  through intelligent algorithms and monitoring.
                </p>
                <ul className="space-y-2">
                  <li className="body-small">• Maximum power point tracking</li>
                  <li className="body-small">• Load control features</li>
                  <li className="body-small">• System status monitoring</li>
                  <li className="body-small">• Data logging capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Optimize Your Solar System</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Choose the right charge controller to maximize your solar system's performance 
            and protect your battery investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Controller Quote
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