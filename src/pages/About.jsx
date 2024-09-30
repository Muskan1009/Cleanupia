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
      <section id="faq" className='px-5 md:px-36 py-10 md:py-20 bg-gray-200 text-white font-semibold text-lg'>

        <div className='flex flex-col items-center gap-2 pb-8'>
          <div className='font-bold text-4xl text-gray-900'>FAQs</div>
          <div className='text-xl text-center text-gray-800 mt-2'>Frequently Asked Questions</div>
        </div>

        {
          faqs.map((faq, index) => {
            return (
              <div key={index} className='flex flex-col gap-2'>
                <div className='md:px-14 py-2 font-semibold text-gray-800'>{index + 1}. {faq.question}</div>
                <div className='bg-white px-14 py-2 text-black font-normal rounded-lg'>{faq.answer}</div>
              </div>
            )
          })
        }

      </section>

      <section id="faq" className='px-5 xl:px-36 py-10 md:py-20 text-white font-semibold text-lg'>

        <div className='flex flex-col items-center gap-2 pb-8'>
          <div className='font-bold text-4xl text-gray-900'>Meet Our Team</div>
        </div>

        <figure class="md:flex bg-green-700 rounded-xl p-8 md:p-0 items-center mx-auto xl:w-1/2">
          <img class="w-44 h-44 rounded-full mx-auto bg-white md:ml-8" src="/sarah-dayan.jpg" alt="" />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem ratione sed quasi, obcaecati voluptatem molestias architecto dignissimos saepe a nobis ipsum alias facilis vitae, nostrum labore delectus exercitationem asperiores?
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="">
                Member Name
              </div>
              <div class="">
                Designation
              </div>
            </figcaption>
          </div>
        </figure>

      </section>

    </div>
  );
};

export default About;
