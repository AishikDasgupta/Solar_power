import React from 'react';
import { Battery, Zap, Settings, Shield } from 'lucide-react';
import { salesProducts } from '../../data/mockData';

export default function SalesInverter() {
  const inverters = salesProducts.inverters;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Battery className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">{inverters.title}</h1>
            <p className="body-large text-gray-600 mb-8">{inverters.description}</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Our Inverter Range</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inverters.products.map((product, index) => (
              <div key={index} className="product-card">
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="heading-3 mb-3">{product.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Capacity:</span>
                    <span className="body-small text-green-600 font-semibold">{product.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Efficiency:</span>
                    <span className="body-small text-green-600 font-semibold">{product.efficiency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Type:</span>
                    <span className="body-small text-green-600 font-semibold">{product.type}</span>
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

      {/* Inverter Types */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Inverter Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="product-card text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Grid-Tie Inverters</h3>
              <p className="body-small text-gray-600 mb-4">
                Convert DC power from solar panels to AC power and feed excess energy back to the grid
              </p>
              <ul className="text-left space-y-1">
                <li className="body-small">• Net metering compatible</li>
                <li className="body-small">• High efficiency (95-98%)</li>
                <li className="body-small">• No battery required</li>
                <li className="body-small">• Lower maintenance</li>
              </ul>
            </div>
            
            <div className="product-card text-center">
              <Battery className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Off-Grid Inverters</h3>
              <p className="body-small text-gray-600 mb-4">
                Standalone inverters that work with battery storage for complete energy independence
              </p>
              <ul className="text-left space-y-1">
                <li className="body-small">• Battery backup included</li>
                <li className="body-small">• Pure sine wave output</li>
                <li className="body-small">• Remote area suitable</li>
                <li className="body-small">• Load management features</li>
              </ul>
            </div>
            
            <div className="product-card text-center">
              <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Hybrid Inverters</h3>
              <p className="body-small text-gray-600 mb-4">
                Advanced inverters that combine grid-tie and off-grid functionality with smart features
              </p>
              <ul className="text-left space-y-1">
                <li className="body-small">• Grid + battery backup</li>
                <li className="body-small">• Smart energy management</li>
                <li className="body-small">• Mobile app monitoring</li>
                <li className="body-small">• Maximum flexibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Protection Features</h3>
              <p className="body-small text-gray-600">Overcurrent, overvoltage, and short circuit protection</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">MPPT Technology</h3>
              <p className="body-small text-gray-600">Maximum Power Point Tracking for optimal energy harvest</p>
            </div>
            <div className="text-center">
              <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Smart Monitoring</h3>
              <p className="body-small text-gray-600">Real-time monitoring and remote diagnostics</p>
            </div>
            <div className="text-center">
              <Battery className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">High Efficiency</h3>
              <p className="body-small text-gray-600">Up to 98% conversion efficiency for maximum output</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Choose the Right Inverter</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Our expert team will help you select the perfect inverter based on your 
            energy requirements and system configuration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Inverter Quote
            </a>
            <a href="/sales/charge-controller" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              View Charge Controllers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}