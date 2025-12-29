import React from 'react';
import { Battery, Zap, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SalesDurasolInverter() {
  return (
    <div className="pt-20">
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Battery className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">Durasol Inverter</h1>
            <p className="body-large text-gray-600 mb-8">
              Off-grid and Hybrid inverter for reliable solar power conversion. Perfect for standalone systems 
              and hybrid installations requiring battery backup.
            </p>
          </div>
        </div>
      </section>

      <section className="pad-xl">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/15.jpg"
                alt="Durasol Inverter"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Product Specifications</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Capacity:</span>
                  <span className="body-medium text-green-600 font-semibold">3kw-14kw</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Type:</span>
                  <span className="body-medium text-green-600 font-semibold">Off-grid/Hybrid</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Category:</span>
                  <span className="body-medium text-green-600 font-semibold">Inverters</span>
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
          <h2 className="heading-2 text-center mb-12">Why Choose Durasol Inverter?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Battery className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Battery Backup</h3>
              <p className="body-small text-gray-600">Complete energy independence with battery storage</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Pure Sine Wave</h3>
              <p className="body-small text-gray-600">Clean power output for sensitive electronics</p>
            </div>
            <div className="text-center">
              <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Load Management</h3>
              <p className="body-small text-gray-600">Smart load management and priority settings</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Reliable Performance</h3>
              <p className="body-small text-gray-600">Durable design for remote and off-grid applications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Choose Durasol for Off-Grid Solutions</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Perfect for remote locations and areas with unreliable grid power. Get your custom quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Quote
            </Link>
            <Link to="/sales/inverter" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              View All Inverters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

