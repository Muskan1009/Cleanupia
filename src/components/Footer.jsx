import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blogs', path: '/blogs' }
  ]

  const socials = [
    { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61566593729784' },
    { name: 'Instagram', link: 'https://www.instagram.com/cleanupiallc/' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/cleanupia-llc-4414aa330/' },
  ]

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' }
  ]

  return (
    <>
      <footer className="bg-green-700 text-white px-5 md:px-10 lg:px-24 py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

          <div>
            <h3 className="text-lg font-bold">Cleanupia</h3>
            <p className="mt-2">Professional cleaning services for homes and offices. We ensure a clean, healthy environment with top-notch service.</p>
          </div>

          <div className='flex flex-col lg:flex-row gap-5'>
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="mt-2">
                {
                  links.map((link, index) => (
                    <li key={index}><Link to={link.path} className="hover:underline">{link.name}</Link></li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Follow Us</h3>
              <ul className="mt-2">
                {
                  socials.map((social, index) => (
                    <li key={index}>
                      <a href={social.link} target="_blank" rel="noreferrer">{social.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Important Links</h3>
              <ul className="mt-2">
                {
                  legal.map((data, index) => (
                    <li key={index}>
                      <a href={data.link} target="_blank" rel="noreferrer">{data.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2">Email: info@cleanupia.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </footer>
      <div className="text-center p-5 bg-white">
        <p>© 2024 Cleanupia. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
