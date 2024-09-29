import React, { useState } from 'react'
import blogJson from '../static/blogs.json'
import { useParams, useNavigate } from 'react-router-dom'

import { FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ data,onClick }) => {
    return (
        <div className="p-5 border rounded-lg bg-yellow-50 shadow-lg flex flex-col gap-2 justify-between">
            <img src={data?.img} alt="" className='w-full aspect-video object-cover rounded-lg' />
            <h3 className="text-xl font-bold text-gray-800">{data?.title}</h3>
            <p className="text-gray-600">
                {data?.intro.slice(0, 200)}...
            </p>
            <button
                className="mt-2 flex items-center text-yellow-500 hover:text-yellow-600 font-semibold"
                onClick={onClick}
            >
                Read More <FaArrowRight className="ml-2" />
            </button>
        </div>
    );
};

const Blog = () => {

    const navigate = useNavigate()

    const [blogData, setBlogData] = useState(blogJson)

    const handleReadMore = (blogNo) => {
        navigate(`/blogs/${blogNo}`)
    }

    return (
        <section className="px-5 md:px-10 lg:px-24 py-4 bg-white flex flex-col items-center">

            <h2 className="text-4xl font-bold text-gray-800 text-center">Our Blogs</h2>
            <p className="md:w-1/2 mt-4 text-lg text-gray-600 text-center">
                Discover the latest tips, trends, and updates in the world of professional cleaning with Cleanupia’s expert blog posts.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData?.map((blog, index) => (
                    <BlogCard
                        key={index}
                        data={blog}
                        onClick={() => handleReadMore(index)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Blog