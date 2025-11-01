import React from 'react';

// A simple, static "About" section component.
// Styled with Tailwind for easy modification.

export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          This is a placeholder "About Us" page for your website. You can easily replace this text with details about your project, company, or yourself. The purpose of this boilerplate is to provide a clean, responsive starting point.
        </p>
        <p className="text-gray-600 text-lg">
          We are using Tailwind CSS for styling, which makes it simple to adjust colors, spacing, and layout by modifying class names directly in your JSX. This component is fully responsive and will look great on all devices.
        </p>
      </div>
    </div>
  );
}

