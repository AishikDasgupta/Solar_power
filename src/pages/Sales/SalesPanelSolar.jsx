import React from 'react';
import { Sun, Award, Shield, Zap } from 'lucide-react';
import { salesProducts } from '../../data/mockData';

export default function SalesPanelSolar() {
  const panels = salesProducts.panels;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Sun className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">{panels.title}</h1>
            <p className="body-large text-gray-600 mb-8">{panels.description}</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Our Solar Panel Range</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panels.products.map((product, index) => (
              <div key={index} className="product-card">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="heading-3 mb-3">{product.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Power Output:</span>
                    <span className="body-small text-green-600 font-semibold">{product.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Efficiency:</span>
                    <span className="body-small text-green-600 font-semibold">{product.efficiency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Warranty:</span>
                    <span className="body-small text-green-600 font-semibold">{product.warranty}</span>
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

      {/* Features Section */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Why Choose Our Solar Panels?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Premium Quality</h3>
              <p className="body-small text-gray-600">Top-tier solar panels from trusted manufacturers</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">25-Year Warranty</h3>
              <p className="body-small text-gray-600">Extended warranty coverage for peace of mind</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">High Efficiency</h3>
              <p className="body-small text-gray-600">Maximum power generation from available space</p>
            </div>
            <div className="text-center">
              <Sun className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Weather Resistant</h3>
              <p className="body-small text-gray-600">Designed to withstand harsh weather conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="pad-xl">
        <div className="container">
          <div className="product-card">
            <h2 className="heading-2 text-center mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-3 mb-4">Monocrystalline Panels</h3>
                <ul className="space-y-2">
                  <li className="body-small">• High efficiency: 20-22%</li>
                  <li className="body-small">• Better performance in low light</li>
                  <li className="body-small">• Space efficient design</li>
                  <li className="body-small">• Premium aesthetics</li>
                  <li className="body-small">• Longer lifespan</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-3 mb-4">Polycrystalline Panels</h3>
                <ul className="space-y-2">
                  <li className="body-small">• Cost-effective solution</li>
                  <li className="body-small">• Good efficiency: 15-18%</li>
                  <li className="body-small">• Reliable performance</li>
                  <li className="body-small">• Easy installation</li>
                  <li className="body-small">• Suitable for large installations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Harness Solar Power?</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Choose from our premium range of solar panels and start your journey 
            towards energy independence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Custom Quote
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