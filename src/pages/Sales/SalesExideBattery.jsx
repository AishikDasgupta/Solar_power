import React from 'react';
import { Battery, Zap, Shield, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SalesExideBattery() {
  return (
    <div className="pt-20">
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Battery className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">Exide Solar Battery</h1>
            <p className="body-large text-gray-600 mb-8">
              Deep cycle tubular battery designed for solar applications. Reliable energy storage solution 
              with long lifespan and excellent performance for off-grid and hybrid solar systems.
            </p>
          </div>
        </div>
      </section>

      <section className="pad-xl">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/16.jpg"
                alt="Exide Solar Battery"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Product Specifications</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Capacity:</span>
                  <span className="body-medium text-green-600 font-semibold">100Ah-200Ah</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Voltage:</span>
                  <span className="body-medium text-green-600 font-semibold">12Volt</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Type:</span>
                  <span className="body-medium text-green-600 font-semibold">Deep Cycle Tubular</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Category:</span>
                  <span className="body-medium text-green-600 font-semibold">Batteries</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="body-small text-gray-600 mb-4">Contact for pricing</p>
                <Link to="/contact" className="btn-primary w-full">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Why Choose Exide Solar Battery?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Battery className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Deep Cycle Design</h3>
              <p className="body-small text-gray-600">Specifically designed for solar applications with deep discharge capability</p>
            </div>
            <div className="text-center">
              <RotateCcw className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Long Lifespan</h3>
              <p className="body-small text-gray-600">Extended battery life with proper maintenance</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">High Performance</h3>
              <p className="body-small text-gray-600">Reliable power output for consistent energy supply</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Trusted Brand</h3>
              <p className="body-small text-gray-600">Exide is a trusted name in battery technology</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Power Your Solar System with Exide</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Choose reliable Exide batteries for your solar energy storage needs. Get your custom quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Battery Quote
            </Link>
            <Link to="/sales/others" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              View Other Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

