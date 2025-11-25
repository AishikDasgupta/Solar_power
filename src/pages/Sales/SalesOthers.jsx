import React from 'react';
import { Droplet, Zap, Award, Shield } from 'lucide-react';

export default function SalesOthers() {
  const products = {
    waterHeater: {
      title: 'Solar Water Heater',
      description: 'Energy-efficient solar water heating solutions',
      products: [
        {
          name: 'Supreme Solar Water Heater',
          capacity: '100LPD to 500LPD',
          features: [
            'High-efficiency solar collectors',
            'Durable storage tank',
            'Long-lasting performance',
            'Easy installation',
          ],
          price: 'Contact for pricing',
        },
      ],
    },
    pumps: {
      title: 'Solar Pumps',
      description: 'Reliable solar-powered pumping solutions',
      products: [
        {
          name: 'Kirloskar Solar Pump',
          features: [
            'High efficiency motor',
            'Durable construction',
            'Suitable for irrigation',
            'Low maintenance',
          ],
          price: 'Contact for pricing',
        },
        {
          name: 'Crompton Solar Pump',
          features: [
            'Energy efficient',
            'Reliable performance',
            'Long service life',
            'Professional installation support',
          ],
          price: 'Contact for pricing',
        },
      ],
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Other Solar Products</h1>
            <p className="body-large text-gray-600 mb-8">
              Explore our range of additional solar-powered products including water heaters and pumps
            </p>
          </div>
        </div>
      </section>

      {/* Water Heater Section */}
      <section className="pad-xl">
        <div className="container">
          <div className="text-center mb-12">
            <Droplet className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="heading-2 mb-4">{products.waterHeater.title}</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              {products.waterHeater.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.waterHeater.products.map((product, index) => (
              <div key={index} className="product-card">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="heading-3 mb-3">{product.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="body-small font-medium">Capacity:</span>
                    <span className="body-small text-green-600 font-semibold">{product.capacity}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-green-600">•</span>
                      <span className="body-small text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Pumps Section */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Zap className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="heading-2 mb-4">{products.pumps.title}</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              {products.pumps.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {products.pumps.products.map((product, index) => (
              <div key={index} className="product-card">
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="heading-3 mb-3">{product.name}</h3>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-green-600">•</span>
                      <span className="body-small text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
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
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Why Choose Our Products?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Premium Quality</h3>
              <p className="body-small text-gray-600">Top-tier products from trusted manufacturers</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Warranty Coverage</h3>
              <p className="body-small text-gray-600">Extended warranty for peace of mind</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Energy Efficient</h3>
              <p className="body-small text-gray-600">Maximum performance with minimal energy consumption</p>
            </div>
            <div className="text-center">
              <Droplet className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Professional Support</h3>
              <p className="body-small text-gray-600">Expert installation and after-sales service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Explore More Solar Solutions?</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Discover our complete range of solar products and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Custom Quote
            </a>
            <a href="/sales/panel-solar" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              View Solar Panels
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

