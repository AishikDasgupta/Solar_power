import React from 'react';
import { Sun, Award, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SalesLoomPanels() {
  return (
    <div className="pt-20">
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Sun className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">Loom Solar Panels</h1>
            <p className="body-large text-gray-600 mb-8">
              High-efficiency solar panels with excellent performance and durability. Wide range of power outputs 
              to suit various installation requirements from residential to commercial applications.
            </p>
          </div>
        </div>
      </section>

      <section className="pad-xl">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/17.jpg"
                alt="Loom Solar Panels"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Product Specifications</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Power Output:</span>
                  <span className="body-medium text-green-600 font-semibold">225wp-715wp</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Category:</span>
                  <span className="body-medium text-green-600 font-semibold">Solar Panels</span>
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
          <h2 className="heading-2 text-center mb-12">Why Choose Loom Solar Panels?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Wide Range</h3>
              <p className="body-small text-gray-600">Multiple power options from 225wp to 715wp</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Durable Design</h3>
              <p className="body-small text-gray-600">Built to last with excellent weather resistance</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">High Performance</h3>
              <p className="body-small text-gray-600">Excellent performance in various lighting conditions</p>
            </div>
            <div className="text-center">
              <Sun className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Versatile</h3>
              <p className="body-small text-gray-600">Suitable for residential and commercial installations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Choose Loom Solar Panels</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Select from our wide range of Loom Solar Panels to meet your specific energy requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Custom Quote
            </Link>
            <Link to="/sales/panel-solar" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              View All Panels
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

