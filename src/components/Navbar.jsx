import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CgMenuRightAlt } from "react-icons/cg";
import Modal from '@mui/material/Modal';

import { NavHashLink } from 'react-router-hash-link';

function Navbar() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="bg-white px-5 md:px-10 lg:px-24 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-green-700">Cleanupia</div>
        <ul className="hidden lg:flex space-x-8 text-lg font-medium">
          {
            links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className={({ isActive }) => isActive ? "text-green-900 duration-300 " : " duration-300 text-gray-400 hover:text-green-700"}>{link.name}</NavLink>
              </li>
            ))
          }
          <li>
            <NavHashLink to="/about#faq" className="text-gray-400 hover:text-green-700">FAQs</NavHashLink>
          </li>
        </ul>
        <button className="hidden lg:block bg-orange-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-orange-600">Book a Service</button>

        <div className='lg:hidden block'>

          <button onClick={handleOpen}>
            <CgMenuRightAlt size={40} className='text-green-900' />
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            className="flex justify-center items-center"
          >
            <div className='p-10 bg-white rounded-2xl'>
              <ul className="flex flex-col space-y-4 text-lg font-medium">
                {
                  links.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.path} onClick={handleClose} className={({ isActive }) => isActive ? "text-green-900 duration-300 " : " duration-300 text-gray-400 hover:text-green-700"}>{link.name}</NavLink>
                    </li>
                  ))
                }
              </ul>
              <button className="bg-orange-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-orange-600 mt-5">Book a Service</button>
            </div>
          </Modal>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
