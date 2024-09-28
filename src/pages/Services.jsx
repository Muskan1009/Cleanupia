import React from "react";
// Import the necessary icons (FontAwesome or HeroIcons)
import { FaHome, FaBuilding, FaBroom, FaCouch, FaTruckMoving } from 'react-icons/fa';
import servImg from '../assets/Serv.jpg'; // Ensure this path is correct
import resident from '../assets/residential-cleaning.jpg'
import comm from '../assets/Comm.jpg'
import Deep from '../assets/Deep.jpg'
import Carpet from '../assets/carpet.jpg'
import Moveclean from '../assets/Moveclean.jpg'

// Sample data for services
const services = [
  {
    title: "Residential Cleaning ",
    description:
      "Let us take care of the mess so you can enjoy a clean and comfortable home. Our residential cleaning services include dusting, vacuuming, mopping, and detailed bathroom and kitchen cleaning. Whether you need regular cleaning or a one-time deep clean, we have a solution for you.",
    icon: FaHome,
    image: resident, // Replace with actual image paths
  },
  {
    title: "Commercial Cleaning ",
    description:
      "A clean and organized workspace boosts productivity and creates a welcoming atmosphere. Our commercial cleaning services are designed for offices, retail spaces, and other business environments, offering flexible scheduling to minimize disruption.",
    icon: FaBuilding,
    image: comm,
  },
  {
    title: "Deep Cleaning ",
    description:
      "Our deep cleaning services go beyond surface-level cleaning, targeting hard-to-reach areas and eliminating built-up grime. Perfect for a seasonal refresh, after renovation, or any time your space needs a thorough top-to-bottom clean.",
    icon: FaBroom,
    image: Deep,
  },
  {
    title: "Carpet & Upholstery Cleaning ",
    description:
      "Revive your carpets and upholstery with our professional cleaning services. We use industry-grade equipment to remove tough stains, dirt, and allergens, extending the life of your fabrics and improving indoor air quality.",
    icon: FaCouch,
    image: Carpet,
  },
  {
    title: "Move-In/Move-Out Cleaning ",
    description:
      "Moving can be overwhelming, but Cleanupia is here to help! Our move-in/move-out cleaning services ensure your new or former home is spotless and ready for the next chapter. We’ll handle everything from deep-cleaning kitchens and bathrooms to wiping down baseboards and floors.",
    icon: FaTruckMoving,
    image: Moveclean,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white ">
        <img
          src={servImg}
          alt="Service Background"
          className="absolute h-full w-full object-cover brightness-50" // Background image with reduced opacity
        />
        <div className="relative z-10 px-4">
          <h1 className="text-2xl md:text-5xl xl:text-6xl font-bold">
            Comprehensive Cleaning Services 🧼
          </h1>
          <p className="mt-4 text-center md:text-xl">
            Top-notch cleaning services for your home or business. Trust us to make your space shine.
          </p>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full font-semibold">
            Get Your First Booking
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether it's your home, office, or business space, we provide top-notch cleaning services to meet your needs.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-5 flex flex-col border rounded-lg bg-yellow-100 shadow-lg transition duration-300 transform hover:scale-105 justify-between">

                <div className="flex flex-col">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-40 w-full object-cover rounded-t-lg"
                  />
                  <h3 className="mt-4 text-2xl font-bold text-gray-800">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>

                </div>

                <button className="bg-white rounded-lg w-full flex gap-5 justify-center items-center py-2 mt-5">
                  <p className="text-yellow-500 text-xl font-semibold">Book Now</p>
                  <service.icon size={25} className="text-yellow-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
