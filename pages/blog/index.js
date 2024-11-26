import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Strip from "../../components/Strip";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";

const BlogListPage = () => {
  const blogs = [
    {
      id: 1,
      title: "10 Tips for a Healthy Lifestyle",
      date: "November 22, 2024",
      author: "John Doe",
      image: "/images/semaglutideinjectable.jpg",
    },
    {
      id: 2,
      title: "How to Manage Stress Effectively",
      date: "November 20, 2024",
      author: "Jane Smith",
      image: "/images/tablet1.jpg",
    },
    {
      id: 3,
      title: "The Benefits of Regular Exercise",
      date: "November 18, 2024",
      author: "Michael Brown",
      image: "/images/tablet2.jpg",
    },
    {
      id: 4,
      title: "Eating Well on a Budget",
      date: "November 15, 2024",
      author: "Sarah Johnson",
      image: "/images/tirzepatide.jpg",
    },
    
  ];

  const ViewElement = ({ children, id }) => (
    <div id={id} className="view-element mt-10 mb-20">
      {children}
    </div>
  );

  const Blogs=({data})=>{
    return(
        <div>
             <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Our Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link href="/blog/blog1">
            <div
              key={blog.id}
              data-aos={"flip-right"}
              className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
            >
              
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {blog.date} | By {blog.author}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
        </div>

    );
  }

  return (
    <ParallaxProvider>
        <ViewElement>
            <Strip/>
        </ViewElement>

        <ViewElement>
            <Header/>
        </ViewElement>

        <ViewElement>
            <Blogs data={""}/>
        </ViewElement>

        <ViewElement>
            <Footer/>
        </ViewElement>
   
    </ParallaxProvider>
  );
};

export default BlogListPage;
