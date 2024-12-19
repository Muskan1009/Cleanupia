import React from "react";
import { Link } from "react-router-dom";
import HeroImg from '../assets/HeroImg.png'
import resident from '../assets/residential-cleaning.jpg'
import comm from '../assets/Comm.jpg'
import Deep from '../assets/Deep.jpg'
import Carpet from '../assets/carpet.jpg'
import Moveclean from '../assets/Moveclean.jpg'
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import Disclaimer from "../components/Disclaimer";
import { ContactUrl } from "../services/Helpers";

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
        rating: 4,
    },
    {
        name: "David Lee",
        review: "We use Cleanupia for our office, and the team is always professional and thorough.",
        rating: 5,
    },
    {
        name: "Emily Martinez",
        review: "The move-out cleaning service saved us so much time! Highly recommend.",
        rating: 4.5,
    },
];

const Home = () => {

    const navigate = useNavigate()

    return (

        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-yellow-50 px-5 md:px-10 lg:px-24 pt-24 pb-24 md:pb-0 mx-auto flex flex-col lg:flex-row justify-between overflow-hidden">

                <div className="w-auto h-full my-auto flex flex-col gap-2 pb-0 md:pb-24">

                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-green-700 leading-tight">
                        Professional Cleaning Service for Your Home
                    </h1>

                    <p className="text-lg text-gray-600">
                        Reliable, friendly, and trustworthy cleaning services designed to meet your needs.
                    </p>

                    <div className="flex flex-row font-medium gap-2">

                        <Link to='/services' className="mt-2 bg-orange-500 text-white px-8 py-3 rounded-md shadow-lg hover:bg-orange-600 duration-300 w-max">
                            Know More
                        </Link>

                        <a href='tel:+18885819885' className="mt-2 text-green-600 bg-white px-8 py-3 rounded-md shadow-lg hover:bg-green-600 hover:text-white duration-300 w-max">
                            Call Us
                        </a>

                    </div>

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
                            <div key={index} className="p-5 border rounded-lg bg-slate-100 duration-300 transition-all ease-in-out hover:bg-yellow-100">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-40 w-full object-cover rounded-t-lg"
                                />
                                <h3 className="mt-4 text-xl font-bold text-gray-800 text-left">{service.title}</h3>
                                <p className="mt-2 text-gray-600 text-left">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <button onClick={e => navigate('/services')} className="mt-10 bg-orange-500 text-white py-2 px-6 rounded-md duration-300 shadow-lg hover:bg-orange-600">
                        Discover More
                    </button>

                </div>

            </section>

            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-24 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
                    <p className="mt-4 text-lg text-gray-600">Our customers love our service! See what they have to say:</p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {
                            testimonials.map((data, i) => {
                                return (
                                    <div className="p-6 bg-white border rounded-lg shadow-lg flex flex-col items-center justify-between gap-2">
                                        <p className="text-gray-600 italic">
                                            "{data.review}"
                                        </p>
                                        <div className="flex flex-col">
                                            <Rating name="read-only" value={data.rating} precision={0.5} readOnly />
                                            <p className="mt-2 font-semibold text-gray-800">{data.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>

            <section className="py-16 px-5 md:px-10 lg:px-24 flex flex-col h-screen lg:flex-row gap-10">

                <div className="w-full lg:w-1/2 bg-white p-5 shadow-lg rounded-lg flex flex-col gap-2">
                    <p className="text-xl font-medium">
                        Have a query or need a quote?
                        <br />
                    </p>
                    <p className="text-sm mt-2 mb-4">
                        Fill the form by clicking the button below and we’ll get back to you as soon as possible.
                    </p>
                    <a className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 w-max px-6 rounded-lg font-semibold mt-4" href={ContactUrl}>
                        Contact Us
                    </a>
                    <Disclaimer />
                </div>

                {/* <form className="w-full lg:w-1/2 bg-white p-5 shadow-lg rounded-lg">
                    <p className="text-xl font-medium">
                        Have a query or need a quote?
                        <br />
                    </p>
                    <p className="text-sm mt-2 mb-4">
                        Send us a message and we’ll get back to you as soon as possible.
                    </p>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 duration-300"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 duration-300"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone"
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 duration-300"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 duration-300"
                            rows="4"
                        />
                    </div>
                    <Disclaimer />
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg font-semibold w-full mt-4"
                    >
                        Send Message
                    </button>
                </form> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6121.525430369327!2d-74.94141668034702!3d39.90194459536868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c133acab4c0123%3A0x1f3820d10645386f!2sFive%20Greentree%20Center!5e0!3m2!1sen!2sin!4v1727892984580!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='lg:w-1/2 rounded-lg bg-white shadow-lg'></iframe>

            </section>

        </div>
    );
};

export default Home;
