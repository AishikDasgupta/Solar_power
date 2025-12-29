import React from 'react';
import { Battery, Zap, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SalesHavellsInverter() {
  return (
    <div className="pt-20">
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Battery className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">Havells Solar Inverter</h1>
            <p className="body-large text-gray-600 mb-8">
              Grid-tie inverter with MPPT technology for maximum power output. High-efficiency inverters 
              designed for reliable solar power conversion with advanced monitoring capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="pad-xl">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/14.jpg"
                alt="Havells Solar Inverter"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Product Specifications</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Capacity:</span>
                  <span className="body-medium text-green-600 font-semibold">3kw-500kw</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Efficiency:</span>
                  <span className="body-medium text-green-600 font-semibold">97%</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="body-medium font-medium">Type:</span>
                  <span className="body-medium text-green-600 font-semibold">Grid-Tie Inverter</span>
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
              <p className="body-small text-gray-600">97% conversion efficiency for maximum output</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Choose Havells Inverter</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Our expert team will help you select the perfect Havells inverter based on your energy requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Inverter Quote
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

