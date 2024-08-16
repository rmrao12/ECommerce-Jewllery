import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs.mainImage);

  useEffect(() => {
    // Fetch blogs from localStorage
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
    
  }, []);
  return (
    <div>
      <div className="bg-[rgba(18,29,22,0.35)] py-12 ">
        <header className="text-center m-auto mb-8 max-w-[350px] sm:max-w-[500px]">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <div>
            <span>
              <Link to="/" className="text-white hover:text-gray-800 underline">
                Home
              </Link>
            </span>
            <span className="text-white">/</span>
            <span className="text-white">Blog</span>
          </div>
        </header>
      </div>
      <div className="bg-[#e2dacf]">
      <div className="container xl:max-w-[60%] max-w-[90%] mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md  overflow-hidden">
              {/* Main Image */}
              <img 
                src={blog.mainImage} 
                alt={blog.title} 

                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{blog.author}</p>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <Link 
                  to={`/blog/${index}`} 
                  className="text-blue-500 mt-4 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;
