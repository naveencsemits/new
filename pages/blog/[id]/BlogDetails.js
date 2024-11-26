import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const BlogDetails = ({ blog }) => {
  return (
    <div className=" sm:w-[80vw] mx-auto sm:p-8  rounded-lg flex items-center justify-center flex-col">
      {/* Blog Title */}
      <header className="text-center m-6">
        <h1 className="text-3xl font-bold ">{blog.title}</h1>
        <div className="text-sm text-gray-500 mt-2">
          <p>Updated {blog.updatedDate}</p>
          <p>Published {blog.publishedDate}</p>
        </div>
        <p className="mt-4 text-gray-600">{blog.subtitle}</p>
      </header>

      {/* Featured Image */}
      {blog.image && (
        <div className="mb-6 text-center">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[500px] rounded-lg object-cover"
          />
        </div>
      )}

      {/* Social Sharing */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <a href={blog.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href={blog.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href={blog.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
        </a>
      </div>

      <div className="flex justify-center m-auto mb-5 mt-5">
        <h2>{blog.description}</h2>
      </div>

      {/* Blog Content */}
      <article className="prose prose-sm sm:prose-lg lg:prose-xl mx-auto">
        {blog.content.map((section, index) => (
          <div key={index} className="mb-6">
            {/* Render section heading */}
            <h2 className="font-bold text-lg sm:text-xl"> {section.heading}</h2>
            {/* Render section description */}
            {Array.isArray(section.description) ? (
              <ul className="list-disc list-inside mt-2">
                {section.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 mt-1">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-gray-700">{section.description}</p>
            )}
          </div>
        ))}
      </article>
    </div>
  );
};

export default BlogDetails;
