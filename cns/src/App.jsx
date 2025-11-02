import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login'; // Import the new Login component
import Footer from './components/Footer';
import Home from './components/Home'; // Import the new Home page component

function App() {
  return (
    // This layout ensures the footer sticks to the bottom of the page
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
 
      {/* Main content grows to fill available space */}
      <main className="flex-grow">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the login page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
