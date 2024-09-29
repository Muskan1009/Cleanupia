import React from "react";
import { Link } from "react-router-dom";
import HeroImg from '../assets/HeroImg.png'
import resident from '../assets/residential-cleaning.jpg'
import comm from '../assets/Comm.jpg'
import Deep from '../assets/Deep.jpg'
import Carpet from '../assets/carpet.jpg'
import Moveclean from '../assets/Moveclean.jpg'
import { useNavigate } from "react-router-dom";

// Sample data for services
const services = [
    {
        title: "Residential Cleaning",
        description:
            "Keep your home spotless with our customizable residential cleaning packages. We handle everything from dusting to deep-cleaning kitchens.",
        image: resident, // Replace with actual image paths
    },
    {
        title: "Commercial Cleaning",
        description:
            "A clean office is key to productivity. Our commercial cleaning services ensure a spotless workspace tailored to your needs.",
        image: comm,
    },
    {
        title: "Deep Cleaning",
        description:
            "Our deep cleaning service tackles every nook and cranny. Perfect for spring cleaning or post-construction cleanup.",
        image: Deep,
    },
];

// Sample data for testimonials
const testimonials = [
    {
        name: "Sarah Johnson",
        review: "Cleanupia made my house feel like new again! Their deep cleaning service is top-notch.",
        image: "sarah.jpg", // Replace with actual image paths
    },
    {
        name: "David Lee",
        review: "We use Cleanupia for our office, and the team is always professional and thorough.",
        image: "david.jpg",
    },
    {
        name: "Emily Martinez",
        review: "The move-out cleaning service saved us so much time! Highly recommend.",
        image: "emily.jpg",
    },
];

const Home = () => {

    const navigate = useNavigate()

    return (

        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-yellow-50 px-5 md:px-10 lg:px-24 pt-24 pb-24 md:pb-0 mx-auto flex flex-col lg:flex-rowcenter justify-between overflow-hidden">

                <div className="w-auto h-full my-auto flex flex-col gap-2 pb-0 md:pb-24">
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-green-700 leading-tight">
                        Professional Cleaning Service for Your Home
                    </h1>
                    <p className="text-lg text-gray-600">
                        Reliable, friendly, and trustworthy cleaning services designed to meet your needs.
                    </p>
                    <Link to='/about'><button className="mt-2 bg-orange-500 text-white px-8 py-3 rounded-md shadow-lg hover:bg-orange-600 w-max">
                        Know More
                    </button></Link>
                </div>

                <img src={HeroImg} className='hidden md:block object-cover lg:w-[50%]' />

            </section>

            {/* Core Services Section */}
            <section className="py-16 bg-white">

                <div className="mx-auto px-5 md:px-10 lg:px-24 text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800">Our Core Services</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover how we can make your space cleaner, healthier, and more inviting.
                    </p>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-5 border rounded-lg bg-yellow-100">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-40 w-full object-cover rounded-t-lg"
                                />
                                <h3 className="mt-4 text-xl font-bold text-gray-800">{service.title}</h3>
                                <p className="mt-2 text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <button onClick={e=>navigate('/services')} className="mt-10 bg-orange-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-orange-600">
                        Discover More
                    </button>

                </div>

            </section>
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-24 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
                    <p className="mt-4 text-lg text-gray-600">Our customers love our service! See what they have to say:</p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white border rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">
                                "Cleanupia's team did a fantastic job! My house has never looked cleaner. Highly recommended!"
                            </p>
                            <div className="mt-4 text-yellow-500 text-2xl font-bold">🌟🌟🌟🌟🌟</div>
                            <p className="mt-2 font-semibold text-gray-800">- Sarah K.</p>
                        </div>

                        <div className="p-6 bg-white border rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">
                                "Professional and efficient. They made my move-out cleaning a breeze, saving me time and stress."
                            </p>
                            <div className="mt-4 text-yellow-500 text-2xl font-bold">🌟🌟🌟🌟🌟</div>
                            <p className="mt-2 font-semibold text-gray-800">- James T.</p>
                        </div>

                        <div className="p-6 bg-white border rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">
                                "Our office has never looked better thanks to Cleanupia. We appreciate their attention to detail."
                            </p>
                            <div className="mt-4 text-yellow-500 text-2xl font-bold">🌟🌟🌟🌟🌟</div>
                            <p className="mt-2 font-semibold text-gray-800">- Office Manager, XYZ Co.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
