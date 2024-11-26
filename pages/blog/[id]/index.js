import { ParallaxProvider } from "react-scroll-parallax";
import Strip from "../../../components/Strip";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BlogDetails from "./BlogDetails";


const blogData = {
  title: "Traveling with Compounded GLP-1 Medications",
  subtitle:
    "Learn how to travel with compounded GLP-1 medications like compounded semaglutide or compounded tirzepatide.",
  updatedDate: "2024-03-15",
  publishedDate: "2023-05-31",
  image: "https://via.placeholder.com/800x400",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  description:"Traveling can be a thrilling adventure, allowing you to explore new destinations and create lasting memories. However, for individuals who rely on compounded GLP-1 injectable medications, traveling requires careful planning.",
  content: [
    {
      heading: "Research Transportation Options",
      description:
        "Before you embark on your journey, it’s important to research different transportation options available to you. Consider modes of transportation such as airplanes, trains, or buses."
    },
    {
      heading: "Check Transportation Regulations",
      description: [
        "Each mode of transportation may have specific guidelines regarding medications requiring cold storage.",
        "Familiarize yourself with the regulations and comply to avoid issues during security checks."
      ]
    },
    {
      heading: "Pack Medications Appropriately",
      description: [
        "Use a portable cooler or insulated bag to maintain the required temperature for your medications.",
        "Consider using gel packs or ice packs designed for medical purposes to keep them stable."
      ]
    },
    {
      heading: "Check Transportation Regulations",
      description: [
        "Each mode of transportation may have specific guidelines regarding medications requiring cold storage.",
        "Familiarize yourself with the regulations and comply to avoid issues during security checks."
      ]
    },
    {
      heading: "Pack Medications Appropriately",
      description: [
        "Use a portable cooler or insulated bag to maintain the required temperature for your medications.",
        "Consider using gel packs or ice packs designed for medical purposes to keep them stable."
      ]
    },
    {
      heading: "Check Transportation Regulations",
      description: [
        "Each mode of transportation may have specific guidelines regarding medications requiring cold storage.",
        "Familiarize yourself with the regulations and comply to avoid issues during security checks."
      ]
    },
    {
      heading: "Pack Medications Appropriately",
      description: [
        "Use a portable cooler or insulated bag to maintain the required temperature for your medications.",
        "Consider using gel packs or ice packs designed for medical purposes to keep them stable."
      ]
    }
  ]


}
  

export default function BlogPage() {
    const ViewElement = ({ children, id }) => (
        <div id={id} className="view-element mt-10 mb-20">
            {children}
        </div>
        );
  return (
   
   <ParallaxProvider>
    <ViewElement>
        <Strip/>
    </ViewElement>
    <ViewElement>
        <Header/>
    </ViewElement>
    <ViewElement>
    <BlogDetails blog={blogData} />
    </ViewElement>
    <ViewElement>
        <Footer/>
    </ViewElement>

   </ParallaxProvider>
   
     
    
  
  );
}