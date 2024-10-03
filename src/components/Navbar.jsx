import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CgMenuRightAlt } from "react-icons/cg";
import Modal from '@mui/material/Modal';

import { NavHashLink } from 'react-router-hash-link';

function Navbar() {

  const navigate = useNavigate();

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
    <header className="bg-green-700 px-5 md:px-10 lg:px-24 py-3 lg:py-8 shadow-lg">
      <div className="container mx-auto flex lg:justify-center items-center">
        {/* <div className="text-2xl font-bold text-green-700">Cleanupia</div> */}
        <ul className="hidden lg:flex space-x-8 text-lg font-medium">
          {
            links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className={({ isActive }) => isActive ? "text-white duration-300 " : " duration-300 text-white/50 hover:text-white"}>{link.name}</NavLink>
              </li>
            ))
          }
          <li>
            <NavHashLink to="/about#faq" className="duration-300 text-white/50 hover:text-white">FAQs</NavHashLink>
          </li>
        </ul>

        <div className='lg:hidden block'>

          <button onClick={handleOpen}>
            <CgMenuRightAlt size={40} className='text-white' />
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
                <li>
                  <NavHashLink to="/about#faq" className="text-green-900 duration-300 ">FAQs</NavHashLink>
                </li>
              </ul>
            </div>
          </Modal>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
