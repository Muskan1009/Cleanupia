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
import { Helmet } from "react-helmet";

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

              <Route path="/" element={<>
            <Helmet>
            <title>Cleanupia | Professional Cleaning Services in Marlton, NJ</title>
        <meta
          name="description"
          content="Cleanupia offers professional residential, Airbnb, and deep cleaning services in Marlton, NJ. Our expert team ensures a spotless, inviting environment tailored to your needs."
        />
        <meta
          name="keywords"
          content="Cleanupia, cleaning services Marlton NJ, residential cleaning, Airbnb cleaning, deep cleaning, professional cleaners, eco-friendly cleaning solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cleanupia LLC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cleanupia.com/" />
            </Helmet>
            <Home />
          </>} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<>
            <Helmet>
            <title>Contact Cleanupia | Get in Touch for Professional Cleaning</title>
            <meta
              name="description"
              content="Reach out to Cleanupia for all your residential, Airbnb, and deep cleaning needs in Marlton, NJ. Contact us today for a free consultation!"
            />
            <meta
              name="keywords"
              content="Cleanupia contact, cleaning services contact Marlton NJ, cleaning company support, free cleaning consultation"
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://cleanupia.com/contact" />
            <meta
              property="og:title"
              content="Contact Cleanupia | Get in Touch for Professional Cleaning"
            />
            <meta
              property="og:description"
              content="Contact Cleanupia for professional residential and Airbnb cleaning services in Marlton, NJ. We are here to help!"
            />
            <meta property="og:url" content="https://cleanupia.com/contact" />
            <meta
              property="og:image"
              content="https://cleanupia.com/assets/contact-cleaning.jpg"
            />
            </Helmet>
            <Contact />
          </>} />

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
