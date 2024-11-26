import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Strip from "../../components/Strip";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Reviews from "../../views/Reviews";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Steven Peacock",
      title: "Doctor of Osteopathy, Chief Medical Officer",
      image: "/images/doctor1.png",
    },
    {
      name: "Dr. Crystal Jacovino",
      title: "Endocrinologist, Medical Director",
      image: "/images/doctor2.png",
    },
    {
      name: "Kaedi Fehlberg",
      title: "Nurse Practitioner, Clinical Team Manager",
      image: "/images/doctor4.png",
    },
    {
      name: "Evan Johnson",
      title: "Physician Assistant, Clinical Team Manager",
      image: "/images/doctor4.png",
    },
    {
      name: "Hee Jin Cayetano",
      title: "Physician Assistant, Registered Dietitian",
      image: "/images/doctor4.png",
    },
    {
      name: "Trace Owens",
      title: "Nurse Practitioner",
      image: "/images/doctor4.png",
    },
    {
      name: "Alena Cundiff",
      title: "Nurse Practitioner",
      image: "/images/doctor4.png",
    },
    {
      name: "Kimberley Taylor",
      title: "Nurse Practitioner",
      image: "/images/doctor4.png",
    },
  ];
  const ViewElement = ({ children, id }) => (
    <div id={id} className="view-element">
      {children}
    </div>
  );

  const Providers=()=>{
    return(
        <div className="">
        <section className="bg-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="lg:w-1/2 text-center lg:text-left p-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Meet the Henry Team
              </h2>
              <p className="mt-4 text-2xl text-gray-600">
                Our providers are all independently-licensed experts in helping
                clients achieve their health goals. It’s our belief that everyone
                should have access to effective, easy, and affordable healthcare.
              </p>
              <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-grey-700 transition">
                Get Started
              </button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 p-8">
              <img
                src="/images/femaledoctor2.png"
                alt="Team Lead"
                className="rounded-lg"
              />
            </div>
          </div>
  
          {/* Team Members Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full border-2 "
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-center text-sm text-gray-600">
                  {member.title}
                </p>
              </div>
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
        <Providers/>
    </ViewElement>

    <ViewElement>
        <Reviews/>
    </ViewElement>

    <ViewElement>
        <Footer/>
    </ViewElement>
    </ParallaxProvider>
  );
};

export default TeamSection;
