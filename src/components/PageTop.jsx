import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import Logo from '../assets/logo.jpg'

const PageTop = () => {

    const topData = [
        {
            title: 'Phone',
            details: '888 581 9885',
            icon: MdAccessTimeFilled, // Updated icon
            color: '#F7931E' // Orange
        },
        {
            title: 'Email Address',
            details: 'info@cleanupia.com',
            icon: AiOutlineMail, // Updated icon
            color: '#3498db' // Blue
        },
        {
            title: 'Location',
            details: 'Five Greentree Centre, 525 Route 73N, Suite 104, Marlton, NJ 08053',
            icon: ImLocation, // Updated icon
            color: '#8CC63F' // Green
        }
    ]

    return (
        <header className='flex flex-col xl:flex-row justify-between items-center py-5 px-5 xl:px-28 bg-white shadow-md'>
            {/* Logo Section */}
            <img src={Logo} alt="" className='w-20 rounded-full' />

            {/* Info Section */}
            <div className='flex flex-col md:flex-row gap-5 xl:gap-10 mt-5 xl:mt-0 items-center'>

                {topData.map((data, index) => (
                    <div
                        key={index}
                        className='flex items-center space-x-3 text-sm transition-transform duration-300 ease-in-out'
                    >
                        {/* Colorful Icon */}
                        <data.icon
                            size={40}
                            className='hidden xl:block'
                            style={{ color: data.color }} // Added color to icon
                        />
                        <data.icon
                            size={30}
                            className='block xl:hidden'
                            style={{ color: data.color }}
                        />

                        {/* Info Text */}
                        <div className='text-center md:text-left'>
                            <h4 className='text-gray-700 font-semibold'>{data.title}</h4>
                            <p className='font-bold text-black text-md'>{data.details}</p>
                        </div>
                    </div>
                ))}

            </div>

        </header>
    )
}

export default PageTop;