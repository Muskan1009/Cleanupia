import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Aboutimg from '../assets/Serv.jpg'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to an API)
        alert('Form submitted!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center text-white">
                <img
                    src={Aboutimg} // Replace with actual image path
                    alt="Contact Background"
                    className="absolute inset-0 h-full w-full object-cover brightness-50"
                />
                <div className="relative z-10 px-4">
                    <h1 className="text-6xl font-bold">Get in Touch with Cleanupia</h1>
                    <p className="mt-4 text-xl">
                        Ready for a cleaner, more comfortable space? We’d love to hear from you!
                    </p>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    <h2 className="text-4xl font-bold text-gray-800  text-center">Contact Information</h2>
                    <p className="mt-4 text-lg text-gray-600  text-center">
                        Whether you’re looking to schedule a service, request a quote, or ask a question, our friendly team is here to help.
                    </p>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-center bg-yellow-100 p-6 rounded-lg shadow-lg">
                            <FaPhone className="text-4xl text-yellow-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Phone</h3>
                                <p className="mt-1 text-gray-600">888 581 9885</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-yellow-100 p-6 rounded-lg shadow-lg">
                            <FaEnvelope className="text-4xl text-yellow-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                                <p className="mt-1 text-gray-600">info@cleanupia.com</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-yellow-100 p-6 rounded-lg shadow-lg">
                            <FaMapMarkerAlt className="text-4xl text-yellow-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Address</h3>
                                <p className="mt-1 text-gray-600">Five Greentree Centre, 525 Route 73N, Suite 104, Marlton, NJ 08053</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-600">Fill out the form below, and we’ll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                rows="4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-lg text-gray-600">
                        Don’t wait—contact Cleanupia today and discover the joy of a sparkling clean space!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
