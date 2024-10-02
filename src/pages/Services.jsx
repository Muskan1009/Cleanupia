import React from "react";
// Import the necessary icons (FontAwesome or HeroIcons)
import { FaHome, FaBuilding, FaBroom, FaCouch, FaTruckMoving } from 'react-icons/fa';
import servImg from '../assets/Serv.jpg'; // Ensure this path is correct
import resident from '../assets/residential-cleaning.jpg'
import comm from '../assets/Comm.jpg'
import Deep from '../assets/Deep.jpg'
import Carpet from '../assets/carpet.jpg'
import Moveclean from '../assets/Moveclean.jpg'
import Deep2 from '../assets/deep2.jpg'
import Upholstry from '../assets/upholstry.jpg'
import { useNavigate } from "react-router-dom";

// Sample data for services
const services = [
  {
    title: "House Cleaning Services",
    description:
      "Whether you need a regular cleaning schedule or a deep cleaning of your home, our team delivers professional and thorough cleaning solutions to keep your space looking pristine.",
    icon: FaHome,
    image: resident, // Replace with actual image paths
  },
  {
    title: "Office Cleaning Services",
    description:
      "A clean office promotes productivity and professionalism. We offer customized office cleaning services to keep your workspace neat, organized, and hygienic.",
    icon: FaBuilding,
    image: comm, // Replace with actual image paths
  },
  {
    title: "Airbnb Cleaning",
    description:
      "Make sure your Airbnb property is guest-ready with our specialized cleaning services. We offer fast turnaround times and high-quality cleaning to ensure your guests have an excellent stay.",
    icon: FaBroom,
    image: Deep, // Replace with actual image paths
  },
  {
    title: "Deep Cleaning Specialists",
    description:
      "For those hard-to-reach places and extra-dirty spaces, our deep cleaning services go beyond regular cleaning to ensure a complete and thorough clean.",
    icon: FaCouch,
    image: Deep2, // Replace with actual image paths
  },
  {
    title: "Carpet Cleaning",
    description:
      "Keep your carpets fresh and stain-free with our professional carpet cleaning services. We use specialized equipment to remove dirt, allergens, and stains.",
    icon: FaTruckMoving,
    image: Carpet, // Replace with actual image paths
  },
  {
    title: "Upholstery Cleaning",
    description:
      "Refresh your furniture and extend its lifespan with our expert upholstery cleaning services. We use safe, non-toxic cleaning solutions to remove stains, dirt, and odors.",
    icon: FaTruckMoving,
    image: Upholstry, // Replace with actual image paths
  },
  {
    title: "Move-Out Cleaning",
    description:
      "Leave your old property spotless with our move-out cleaning services. Ideal for tenants looking to get their deposit back or homeowners preparing for sale.",
    icon: FaTruckMoving,
    image: Moveclean, // Replace with actual image paths
  }
];

const Services = () => {

  const navigate = useNavigate();

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

                <button onClick={e => navigate('/cost-calculator')} className="bg-white rounded-lg w-full flex gap-5 justify-center items-center py-2 mt-5">
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
