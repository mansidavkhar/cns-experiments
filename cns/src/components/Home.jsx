import React from 'react';
import Hero from './Hero';

// This is the "Home" page component.
// It's simple, just showing the Hero.
export default function Home() {
  return (
    <div>
      <Hero />
      {/* You could add more components here like "Features", "Testimonials" */}
    </div>
  );
}
