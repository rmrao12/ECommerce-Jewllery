import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';

const BlogDisplay = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogList, setBlogList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogList(storedBlogs);
    const selectedBlog = storedBlogs[parseInt(id)];
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) return <div className="container mx-auto px-4 py-8">Blog not found</div>;

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Find index of current blog
  const currentIndex = parseInt(id); // Convert id to an integer with base 10

const nextIndex=currentIndex+1;
  // Determine previous and next blog
  const previousBlog = currentIndex > 0 ? blogList[currentIndex - 1] : null;
  const nextBlog = (currentIndex >= 0 && currentIndex < blogList.length - 1) ? blogList[nextIndex] : null;
console.log(blogList.length);
console.log(blogList[nextIndex])
console.log(nextIndex)
  return (
    <div>
      {/* Main Image Banner */}
      {blog.mainImage && (
        <div>
          <img 
            src={blog.mainImage} 
            alt={blog.title}             
            className="w-full h-[400px] object-cover rounded-lg pt-20" 
          />
        </div>
      )}
      <div className="bg-[#e2dacf] p-10">
    <div className="container mx-auto max-w-4xl px-4 py-8 mt-[-64px] relative bg-white shadow-md ">
    

      {/* Blog Content */}
      <div className="p-6  z-100">
        <h1 className="text-5xl font-bold mb-4 text-center">{blog.title}</h1>
        <p className="text-gray-700 text-sm mb-4 text-center">{blog.author}</p>
        <p className="text-gray-700 mb-8">{blog.detail}</p>

        {blog.sections.map((section, index) => (
          <div key={index} className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
            <p className="text-gray-700 mb-4">{section.content}</p>

            {/* Display list if available in the section */}
            {section.list && section.list.length > 0 && (
              <ul className="list-disc pl-5 mb-4">
                {section.list.map((item, idx) => (
                  <li key={idx} className="text-gray-700 mb-2">{item.lists}</li>
                ))}
              </ul>
            )}

            <p className="text-gray-700 mb-4">{section.extraText}</p>

            {/* Display images with specific layout */}
            {section.images.length > 0 && !(index === blog.sections.length - 2 && section.images.length > 1) && (
              <div className={`grid gap-4 mt-4 ${section.images.length > 2 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                {/* Custom layout for more than 2 images */}
                {section.images.length > 2 ? (
                  <>
                    <div className="grid grid-cols-1 gap-4">
                      <img 
                        src={section.images[0]} 
                        alt={`Section ${index} image 0`} 
                        className="w-full h-auto object-cover rounded-lg" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {section.images.slice(1).map((image, idx) => (
                        <img 
                          key={idx} 
                          src={image} 
                          alt={`Section ${index} image ${idx + 1}`} 
                          className="w-full h-auto object-cover rounded-lg" 
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  section.images.map((image, idx) => (
                    <img 
                      key={idx} 
                      src={image} 
                      alt={`Section ${index} image ${idx}`} 
                      className="w-full h-auto object-cover rounded-lg" 
                    />
                  ))
                )}
              </div>
            )}

            {/* Slider for the last section */}
            {index === blog.sections.length - 2 && section.images.length > 1 && (
              <div className="mt-8">
                <Slider {...sliderSettings}>
                  {section.images.map((image, idx) => (
                    <div key={idx} className="w-full h-auto">
                      <img 
                        src={image} 
                        alt={`Slider image ${idx}`} 
                        className="w-full h-auto object-cover rounded-lg" 
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        ))}

      
      </div>
    </div>
      {/* Navigation Buttons */}
      <div className="mx-auto max-w-4xl ">
      <div className="flex items-center justify-between mt-8">
  {previousBlog && (
    <Link 
      to={`/blog/${currentIndex - 1}`} 
      className="mt-4  flex flex-col items-start"
    >
      <div className="flex items-center space-x-2">
        <FaArrowLeft size={16} />
        <span>Previous Blog</span>
      </div>
      <p className="mt-1">{previousBlog.title}</p>
    </Link>
  )}
  
  {/* Separator Line */}
  <div className="w-px bg-gray-800 h-10 mx-4"></div>

  {nextBlog && (
    <Link 
      to={`/blog/${currentIndex + 1}`} 
      className="mt-4 flex flex-col items-end"
    >
      <div className="flex items-center space-x-2">
        <span>Next Blog</span>
        <FaArrowRight size={16} />
      </div>
      <p className="mt-1 text-right">{nextBlog.title}</p>
    </Link>
  )}
</div>
        </div>
        </div>
    </div>
  );
};

export default BlogDisplay;
