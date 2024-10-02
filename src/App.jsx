import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Blog from './pages/Blog';
import Read from './pages/Read';

import ScrollReset from './components/ScrollReset';
import CostCalculator from './pages/CostCalculator';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import PageTop from './components/PageTop';

function App() {
  return (
    <>
      <Router>

        <ScrollReset />

        <div className="flex flex-col min-h-screen">

          <PageTop />

          <Navbar />

          <main className="flex-grow">

            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path='/cost-calculator' element={<CostCalculator />} />

              <Route path='/blogs' element={<Blog />} />
              <Route path='/blogs/:blogID' element={<Read />} />

              <Route path='/privacy' element={<Privacy />} />
              <Route path='/terms' element={<Terms />} />

            </Routes>

          </main>

          <Footer />

        </div>

      </Router>
    </>
  );
}

export default App;
