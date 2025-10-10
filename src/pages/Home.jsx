import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Users, HeartHandshake, Star, ChevronRight } from 'lucide-react';
import { heroSlides, products, whyChooseUs, testimonials, clients } from '../data/mockData';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="heading-1 mb-6">
            Empowering a Sustainable Future with Solar Energy
          </h1>
          <p className="body-large text-gray-600 mb-8 max-w-2xl mx-auto">
            Green Power Solar Energy — your trusted partner in solar installation, maintenance, and innovation. 
            Over 20 years of experience serving residential and industrial clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Solar Products</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of high-quality solar products from trusted brands 
              to meet all your energy needs.
            </p>
          </div>
          
          <div className="solar-grid">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="product-card">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="heading-3 mb-2">{product.name}</h3>
                <p className="body-small text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-green-600">{product.category}</span>
                  <span className="text-sm text-gray-500">{product.specs}</span>
                </div>
                <Link to="/sales/panel-solar" className="btn-secondary w-full">
                  View Details
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="pad-xl">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Green Power Solar</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              With over 20 years of experience and 4+ MW of successful installations, 
              we are your trusted partner for all solar energy needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = {
                Award,
                CheckCircle,
                Users,
                HeartHandshake,
              }[item.icon];
              
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="heading-3 mb-3">{item.title}</h3>
                  <p className="body-small text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What Our Clients Say</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients who have trusted us with their solar energy needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="product-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="body-medium text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="pad-xl">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Prestigious Clients</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We are proud to serve leading institutions and organizations across various sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg text-center hover:border-green-300 transition-colors">
                <p className="body-small font-medium text-gray-700">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Go Solar?</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy. 
            Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Free Quote
            </Link>
            <Link to="/why-choose-us" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}