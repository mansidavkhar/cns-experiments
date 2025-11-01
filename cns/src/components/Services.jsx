import React from 'react';

// This is the data for your service cards.
// To tweak this component, just edit this array.
// You can add/remove items, or change the text.
const servicesData = [
  {
    id: 1,
    title: 'Web Design',
    description: 'We create stunning, modern web designs that are responsive and user-friendly.',
    imagePlaceholder: 'Design Icon',
  },
  {
    id: 2,
    title: 'Development',
    description: 'Our team builds fast, scalable, and secure web applications using modern tech.',
    imagePlaceholder: 'Code Icon',
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description: 'We help your site rank higher on search engines to attract more visitors.',
    imagePlaceholder: 'SEO Icon',
  },
  {
    id: 4,
    title: 'Cloud Hosting',
    description: 'Reliable and secure hosting solutions to keep your application online 24/7.',
    imagePlaceholder: 'Cloud Icon',
  },
  {
    id: 5,
    title: 'Support',
    description: 'Ongoing maintenance and support to ensure your website runs smoothly.',
    imagePlaceholder: 'Support Icon',
  },
];

// This is a "carousel" built with Tailwind's flex and overflow utilities.
// - `flex` & `overflow-x-auto`: Creates the horizontal scrolling area.
// - `snap-x` & `snap-mandatory`: Makes the scroll snap to each card.
// - `w-80` & `flex-shrink-0`: Ensures each card has a fixed width.
// - `snap-center`: Tells the container to snap each card to the center.

export default function Services() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg text-center mb-10 max-w-2xl mx-auto">
          Here is a simple carousel of services. You can scroll this list
          horizontally.
        </p>

        {/* Carousel Container */}
        <div className="flex space-x-8 overflow-x-auto py-4 snap-x snap-mandatory mx-55 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-100">
          
          {/* Map over the service data to create cards */}
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex-shrink-0 w-80 bg-gray-50 rounded-lg shadow-lg overflow-hidden snap-center"
            >
              {/* Card Image Placeholder */}
              <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium">
                  {service.imagePlaceholder}
                </span>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
