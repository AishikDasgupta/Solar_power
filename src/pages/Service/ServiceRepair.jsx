import React from 'react';
import { Wrench, Search, Settings, Battery, AlertTriangle, CheckCircle, Sun, TrendingUp } from 'lucide-react';
import { services } from '../../data/mockData';

export default function ServiceRepair() {
  const repair = services.repair;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Tool className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">{repair.title}</h1>
            <p className="body-large text-gray-600 mb-8">{repair.description}</p>
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Solar System Repair"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Our Repair Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repair.services.map((service, index) => {
              const icons = [Search, Settings, TrendingUp, Wrench, AlertTriangle, CheckCircle];
              const IconComponent = icons[index] || Wrench;
              
              return (
                <div key={index} className="product-card">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="heading-3">{service}</h3>
                  </div>
                  <p className="body-small text-gray-600">
                    Professional {service.toLowerCase()} to restore your solar system to optimal performance.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">What We Cover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {repair.coverage.map((coverage, index) => {
              const icons = [Sun, Battery, Search, AlertTriangle, TrendingUp];
              const IconComponent = icons[index] || CheckCircle;
              
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="heading-3 mb-3">{coverage}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Common Solar System Issues We Fix</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="product-card">
              <h3 className="heading-3 mb-4">Performance Issues</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="body-small font-medium">Reduced Power Output</p>
                    <p className="body-small text-gray-600">Panel soiling, shading, or degradation issues</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="body-small font-medium">Inverter Problems</p>
                    <p className="body-small text-gray-600">Error codes, shutdowns, or efficiency loss</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="body-small font-medium">Battery Issues</p>
                    <p className="body-small text-gray-600">Reduced capacity, charging problems, or failure</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="product-card">
              <h3 className="heading-3 mb-4">Electrical & Mechanical</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="body-small font-medium">Wiring Problems</p>
                    <p className="body-small text-gray-600">Loose connections, corrosion, or damage</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="body-small font-medium">Mounting Issues</p>
                    <p className="body-small text-gray-600">Panel shifting, structural damage, or leaks</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="body-small font-medium">Safety Concerns</p>
                    <p className="body-small text-gray-600">Ground faults, arc faults, or isolation issues</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="heading-3 mb-3">Diagnosis</h3>
              <p className="body-small text-gray-600">
                Comprehensive system analysis to identify root causes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="heading-3 mb-3">Quote</h3>
              <p className="body-small text-gray-600">
                Detailed repair estimate with transparent pricing
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="heading-3 mb-3">Repair</h3>
              <p className="body-small text-gray-600">
                Professional repair using quality parts and components
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="heading-3 mb-3">Testing</h3>
              <p className="body-small text-gray-600">
                Performance verification and system optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="pad-xl">
        <div className="container">
          <div className="product-card bg-red-50 border-red-200">
            <div className="text-center">
              <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-6" />
              <h2 className="heading-2 text-red-800 mb-4">Emergency Repair Services</h2>
              <p className="body-large text-red-700 mb-6">
                24/7 emergency response for critical solar system failures and safety issues
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="heading-3 text-red-800 mb-2">Safety Issues</h3>
                  <p className="body-small text-red-600">Immediate response for electrical hazards</p>
                </div>
                <div>
                  <h3 className="heading-3 text-red-800 mb-2">System Failures</h3>
                  <p className="body-small text-red-600">Critical component failures requiring urgent attention</p>
                </div>
                <div>
                  <h3 className="heading-3 text-red-800 mb-2">Weather Damage</h3>
                  <p className="body-small text-red-600">Storm damage and urgent structural repairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Need Solar System Repair?</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Don't let a malfunctioning solar system cost you money. Our expert technicians 
            will diagnose and repair your system quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Schedule Repair Service
            </a>
            <a href="tel:9903144213" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              Emergency: 9903144213
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}