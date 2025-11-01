import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // Import the new About component
import Contact from './components/Contact'; // Import the new Contact component
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    // This layout ensures the footer sticks to the bottom of the page
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Main content grows to fill available space */}
      <main className="flex-grow">
        <Hero />
        
        {/* Render the new components */}
        <About />
        <Services />
        <Contact />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;

