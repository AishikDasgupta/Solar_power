import React from 'react';
import { Award, Building, MapPin, Users, Zap, CheckCircle } from 'lucide-react';
import { brands, serviceAreas } from '../data/mockData';

export default function About() {
  const achievements = [
    { icon: Zap, value: '4+ MW', label: 'Solar Installations' },
    { icon: Users, value: '500+', label: 'Happy Customers' },
    { icon: Building, value: '20+', label: 'Years Experience' },
    { icon: Award, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">About Green Power Solar Energy</h1>
            <p className="body-large text-gray-600 mb-8">
              Established in September 2023 by Mr. Aktar Ali Mondal, a professional with over 20 years 
              of experience in Electrical and Solar installations. We are your trusted partner for 
              sustainable energy solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="heading-3 text-green-600 mb-1">{achievement.value}</div>
                    <div className="body-small text-gray-600">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="pad-xl">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Company Overview</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="body-medium mb-2">
                      <strong>City Office:</strong> Garia, Kolkata
                    </p>
                    <p className="body-small text-gray-600">
                      We provide engineering, supply, installation, commissioning, and maintenance 
                      for both domestic and industrial solar projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="body-medium mb-2">
                      <strong>Industrial Expertise:</strong> Fuel Service Stations
                    </p>
                    <p className="body-small text-gray-600">
                      Specialize in repair and maintenance for industrial jobs including 
                      Off-grid and On-grid installations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="body-medium mb-2">
                      <strong>Major Clients:</strong> HPCL, IOCL, BPCL
                    </p>
                    <p className="body-small text-gray-600">
                      Served major petroleum companies for both new and existing solar projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Solar Installation"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="heading-3 text-green-700 mb-4">
                  "Harnessing the power of the sun to illuminate the future."
                </h3>
                <p className="body-small text-green-600">
                  Our mission is to provide reliable, efficient, and sustainable solar energy solutions 
                  that contribute to a cleaner environment and energy independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">Experience & Expertise</h2>
            <p className="body-large text-gray-600">
              With extensive experience in solar installations, we have successfully completed 
              over 2 MW on-grid and 1 MW off-grid installations and maintenance projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="product-card">
              <h3 className="heading-3 mb-4">On-Grid Installations</h3>
              <p className="body-medium text-gray-700 mb-4">2 MW Completed</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="body-small">Grid-tie solar systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="body-small">Net metering installations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="body-small">Commercial & residential</span>
                </li>
              </ul>
            </div>
            
            <div className="product-card">
              <h3 className="heading-3 mb-4">Off-Grid Installations</h3>
              <p className="body-medium text-gray-700 mb-4">1 MW Completed</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="body-small">Standalone solar systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="body-small">Remote area electrification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="body-small">Industrial applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="pad-xl">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Service Areas</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We provide onsite and offsite aftersales service to customers regularly across 
              West Bengal and neighboring regions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg text-center hover:border-green-300 hover:bg-green-50 transition-all">
                <MapPin className="h-4 w-4 text-green-600 mx-auto mb-2" />
                <span className="body-small font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Deal With */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Brands We Deal With</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We partner with leading solar equipment manufacturers to ensure quality and reliability 
              in every installation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="product-card text-center py-4">
                <span className="body-medium font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestigious Clients */}
      <section className="pad-xl">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Prestigious Clients</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Our professional teams deliver high-quality solar services with dedication and 
              precision to prestigious institutions and organizations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Ramkrishna Mission – Belur Moth',
              'BKM Purulia ITI',
              'Tallygunge ITI',
              'National Institute of Technology – Mizoram',
              'Hariharpur Gram Panchayet – Mallikpur, Kolkata',
              'Mohanpur Gram Panchayet – Barrackpur',
              'Bhalotia Engineering Works Pvt Ltd – Jamshedpur',
              'Citykart Shopping Mall – Laheriasarai, Darbhanga',
              'Leather Complex'
            ].map((client, index) => (
              <div key={index} className="product-card">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="body-medium font-medium">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}