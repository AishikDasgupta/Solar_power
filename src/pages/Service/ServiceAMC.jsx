import React from 'react';
import { Shield, Calendar, PhoneCall, FileText, Factory, CheckCircle, Wrench, Settings, TrendingUp } from 'lucide-react';
import { services } from '../../data/mockData';

export default function ServiceAMC() {
  const amc = services.amc;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="heading-1 mb-6">{amc.title}</h1>
            <p className="body-large text-gray-600 mb-8">{amc.description}</p>
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              <Factory className="h-5 w-5 mr-2" />
              <span className="font-medium">Industrial Clients Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Inclusions */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">What's Included in Our AMC</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amc.inclusions.map((inclusion, index) => {
              const icons = [Calendar, Shield, Wrench, PhoneCall, Settings, FileText];
              const IconComponent = icons[index] || CheckCircle;
              
              return (
                <div key={index} className="product-card">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="heading-3">{inclusion}</h3>
                  </div>
                  <p className="body-small text-gray-600">
                    Comprehensive {inclusion.toLowerCase()} to ensure optimal system performance and reliability.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {amc.industries.map((industry, index) => (
              <div key={index} className="product-card text-center">
                <Factory className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="heading-3 mb-2">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Plans */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">AMC Service Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="product-card">
              <div className="text-center mb-6">
                <h3 className="heading-3 mb-2">Basic AMC</h3>
                <p className="body-large text-green-600 font-bold">₹15,000/year</p>
                <p className="body-small text-gray-600">For systems up to 10KW</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Quarterly maintenance visits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Performance monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Basic cleaning & inspection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Emergency call support</span>
                </li>
              </ul>
            </div>
            
            <div className="product-card border-green-500 border-2">
              <div className="text-center mb-6">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-2">
                  Most Popular
                </div>
                <h3 className="heading-3 mb-2">Standard AMC</h3>
                <p className="body-large text-green-600 font-bold">₹25,000/year</p>
                <p className="body-small text-gray-600">For systems 10-50KW</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Monthly maintenance visits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Advanced performance monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Complete system maintenance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">24/7 emergency support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Spare parts coverage (up to ₹10,000)</span>
                </li>
              </ul>
            </div>
            
            <div className="product-card">
              <div className="text-center mb-6">
                <h3 className="heading-3 mb-2">Premium AMC</h3>
                <p className="body-large text-green-600 font-bold">Contact for pricing</p>
                <p className="body-small text-gray-600">For systems above 50KW</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Customized maintenance schedule</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Real-time monitoring system</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Dedicated support engineer</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Priority emergency response</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="body-small">Comprehensive spare parts coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Activities */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <div className="product-card">
            <h2 className="heading-2 text-center mb-8">Maintenance Activities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-3 mb-4">Preventive Maintenance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Panel cleaning and inspection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Inverter performance checks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Electrical connection tightening</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Mounting structure inspection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Battery maintenance (if applicable)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="heading-3 mb-4">Performance Monitoring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Energy generation analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">System efficiency evaluation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Performance benchmarking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Fault detection and diagnosis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="body-small">Monthly performance reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our AMC */}
      <section className="pad-xl">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Why Choose Our AMC Services?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Protect Your Investment</h3>
              <p className="body-small text-gray-600">
                Regular maintenance extends system life and protects your investment
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Maximize Performance</h3>
              <p className="body-small text-gray-600">
                Ensure optimal energy generation and system efficiency
              </p>
            </div>
            <div className="text-center">
              <PhoneCall className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">24/7 Support</h3>
              <p className="body-small text-gray-600">
                Round-the-clock technical support for critical issues
              </p>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Detailed Reporting</h3>
              <p className="body-small text-gray-600">
                Comprehensive maintenance and performance reports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Secure Your Solar Investment</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Ensure maximum performance and longevity of your industrial solar installation 
            with our comprehensive AMC services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get AMC Quote
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