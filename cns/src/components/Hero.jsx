// This component demonstrates:
// 1. Responsiveness: Stacks (flex-col) on mobile, side-by-side (md:flex-row) on desktop.
// 2. Interactivity: Hover effects on the button.

export default function Hero() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center mx-40">
        
        {/* Left Column (Text & CTA) */}
        <div className="md:w-1/2 lg:pr-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Build Modern UIs with Tailwind
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            This is a simple boilerplate for a responsive and interactive hero
            section. You can easily modify this for any case study.
          </p>
          <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg
                           hover:bg-blue-700 transition duration-300 ease-in-out
                           transform hover:-translate-y-1">
            Get Started
          </button>
        </div>
        
        {/* Right Column (Image Placeholder) */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg
                        flex items-center justify-center">
            <span className="text-gray-500 text-xl font-medium">
              <img src="https://via.placeholder.com/400x300" alt="Hero Image" className="w-50 h-50" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

