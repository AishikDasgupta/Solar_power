import React from 'react';

export default function Gallery() {
  const images = [];
  
  for (let i = 1; i <= 37; i++) {
    images.push(`${i}.jpg`);
  }
  
  images.push('Logo.jpg');

  return (
    <div className="pt-20">
      <section className="pad-xl">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Gallery</h1>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Explore our collection of solar installations and projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                <img
                  src={`/assets/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

