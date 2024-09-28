import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-700 text-white px-5 md:px-10 lg:px-24 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">Cleanupia</h3>
          <p className="mt-2">Professional cleaning services for homes and offices. We ensure a clean, healthy environment with top-notch service.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="mt-2">Email: info@cleanupia.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Cleanupia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
