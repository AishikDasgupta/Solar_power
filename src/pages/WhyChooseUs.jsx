import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Users, 
  HeartHandshake, 
  Zap, 
  Shield, 
  Clock, 
  Globe,
  TrendingUp,
  Settings
} from 'lucide-react';

export default function WhyChooseUs() {
  const strengths = [
    {
      icon: Award,
      title: '20+ Years of Professional Experience',
      description: 'Over two decades of expertise in electrical and solar installations with proven track record',
      details: [
        'Established by Mr. Aktar Ali Mondal with 20+ years experience',
        'Successfully completed 4+ MW of solar installations',
        'Expertise in both residential and industrial projects'
      ]
    },
    {
      icon: Zap,
      title: 'Expertise in Both On-grid and Off-grid Systems',
      description: 'Comprehensive knowledge of all solar system types for diverse energy needs',
      details: [
        '2.5+ MW on-grid installations completed',
        '1.5+ MW off-grid systems installed',
        'Specialized in hybrid solutions'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Work with Trusted Brands',
      description: 'Partnership with leading solar equipment manufacturers ensures quality and reliability',
      details: [
        'Vikram Solar, Havells, Loom Solar, Waaree',
        'Luminous, Exide, Enphase, Polycab',
        'UTL, Millennium, Deye, and more trusted brands'
      ]
    },
    {
      icon: Clock,
      title: 'Fast, Reliable Installation',
      description: 'Efficient project execution with minimal disruption and timely completion',
      details: [
        'Streamlined installation process',
        'Professional project management',
        'Minimal disruption to daily operations'
      ]
    },
    {
      icon: HeartHandshake,
      title: 'Comprehensive After-sales Service and AMC',
      description: 'Ongoing support and maintenance to ensure optimal system performance',
      details: [
        'Regular maintenance visits',
        'Emergency call support',
        'Annual Maintenance Contracts for industrial clients'
      ]
    },
    {
      icon: Globe,
      title: 'Nationwide Project Execution',
      description: 'Extensive service coverage across West Bengal and neighboring regions',
      details: [
        'Service areas spanning 22+ locations',
        'Onsite and offsite service capabilities',
        'Remote monitoring and support'
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and testing ensure reliable solar installations',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Advanced monitoring and optimization for maximum energy generation',
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored solar solutions designed to meet specific energy requirements',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional engineers and technicians dedicated to excellence',
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pad-xl bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Why Choose Green Power Solar Energy?</h1>
            <p className="body-large text-gray-600 mb-8">
              With over 20 years of experience and 4+ MW of successful installations, 
              we are your trusted partner for reliable, efficient, and sustainable solar energy solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="heading-2 text-green-600 mb-2">20+</div>
                <div className="body-small text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="heading-2 text-green-600 mb-2">4+ MW</div>
                <div className="body-small text-gray-600">Installed Capacity</div>
              </div>
              <div className="text-center">
                <div className="heading-2 text-green-600 mb-2">500+</div>
                <div className="body-small text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="heading-2 text-green-600 mb-2">100%</div>
                <div className="body-small text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Strengths */}
      <section className="pad-xl">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Core Strengths</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Discover what makes Green Power Solar Energy the preferred choice for solar installations 
              across West Bengal and beyond.
            </p>
          </div>
          
          <div className="space-y-12">
            {strengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="heading-3">{strength.title}</h3>
                    </div>
                    <p className="body-medium text-gray-700 mb-6">{strength.description}</p>
                    <ul className="space-y-2">
                      {strength.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="body-small text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="product-card">
                      <img 
                        src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1497440001374-f26997328c1b' : '1508514177221-188b1cf16e9d'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                        alt={strength.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="pad-xl bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Additional Benefits</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Beyond our core strengths, we offer additional benefits that ensure your solar investment 
              delivers maximum value and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="product-card text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="heading-3 mb-3">{benefit.title}</h3>
                  <p className="body-small text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="pad-xl">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Proven Process</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful project delivery from consultation to commissioning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation & Assessment',
                description: 'Site survey and energy requirement analysis'
              },
              {
                step: '02',
                title: 'System Design',
                description: 'Custom solar system design and engineering'
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Professional installation with quality assurance'
              },
              {
                step: '04',
                title: 'Support & Maintenance',
                description: 'Ongoing support and regular maintenance services'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="heading-3 mb-3">{process.title}</h3>
                <p className="body-small text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="body-large text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have chosen Green Power Solar Energy 
            for their solar installation needs. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 btn-primary">
              Get Free Consultation
            </a>
            <a href="/about" className="border-2 border-white text-white hover:bg-white hover:text-green-600 btn-secondary">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}