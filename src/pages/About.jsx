import React from "react";
import { FaThumbsUp, FaLeaf, FaLock } from 'react-icons/fa';
import Aboutimg from '../assets/Serv.jpg'

const About = () => {

  const faqs = [
    {
        "question": "How do I schedule a cleaning service?",
        "answer": "You can easily schedule a service through our online booking form or by giving us a call at -888 581 9885."
    },
    {
        "question": "What types of cleaning products do you use?",
        "answer": "We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment."
    },
    {
        "question": " Do I need to be home during the cleaning?",
        "answer": "No, you don’t have to be home. Our team is fully insured and trustworthy, and you can provide instructions for access if needed."
    }
]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <img
          src={Aboutimg} // Replace with actual image path
          alt="About Background"
          className="absolute inset-0 h-full w-full object-cover brightness-50" // Background image with reduced opacity
        />
        <div className="relative z-10 px-5 flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl xl:text-6xl font-bold">Committed to Clean. Dedicated to You.</h1>
          <p className="md:w-1/2 mt-4 text-center md:text-xl">
            At Cleanupia, we’re more than just a cleaning company. We’re a team of dedicated professionals committed to providing high-quality, reliable cleaning services for homes and businesses.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 sm:px-8 bg-white flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
        <p className="md:w-1/2 mt-4 text-lg text-gray-600">
          Founded in [year], Cleanupia has grown from a small local business into a leading provider of cleaning services across the region. Our success is rooted in our attention to detail, use of eco-friendly products, and a customer-first approach. We believe in making cleaning easy and affordable for everyone.
        </p>

        {/* Our Values Section */}
        <h2 className="mt-12 text-4xl font-bold text-gray-800">Our Values</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Customer Satisfaction */}
          <div className="p-6 border rounded-lg bg-yellow-100 shadow-lg">
            <FaThumbsUp className="text-5xl text-yellow-500 mx-auto" />
            <h3 className="mt-4 text-xl font-bold text-gray-800">Customer Satisfaction</h3>
            <p className="mt-2 text-gray-600">
              We don’t just clean; we aim to exceed your expectations. Every service is tailored to your specific needs, ensuring 100% satisfaction.
            </p>
          </div>

          {/* Eco-Friendly Cleaning */}
          <div className="p-6 border rounded-lg bg-yellow-100 shadow-lg">
            <FaLeaf className="text-5xl text-yellow-500 mx-auto" />
            <h3 className="mt-4 text-xl font-bold text-gray-800">Eco-Friendly Cleaning</h3>
            <p className="mt-2 text-gray-600">
              We care about the environment as much as we care about cleanliness. That’s why we use non-toxic, environmentally friendly cleaning products that are safe for your family, pets, and the planet.
            </p>
          </div>

          {/* Trust & Reliability */}
          <div className="p-6 border rounded-lg bg-yellow-100 shadow-lg">
            <FaLock className="text-5xl text-yellow-500 mx-auto" />
            <h3 className="mt-4 text-xl font-bold text-gray-800">Trust & Reliability</h3>
            <p className="mt-2 text-gray-600">
              Our team is fully vetted, trained, and insured, so you can trust us to get the job done right every time.
            </p>
          </div>
        </div>

        {/* Our Vision Section */}
        <h2 className="mt-12 text-4xl font-bold text-gray-800">Our Vision</h2>
        <p className="md:w-1/2 mt-4 text-lg text-gray-600">
          Our goal is to become the most trusted name in cleaning by delivering consistent, high-quality services and building lasting relationships with our clients.
        </p>
      </section>
    </div>
  );
};

export default About;
