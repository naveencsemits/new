import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

export default function Journey({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section
      className=" px-6 md:p-8 lg:px-8 lg:py-12 rounded-lg"
      style={{ background: "rgb(250, 248, 242)!important" }}
    >
      <div className="text-black text-[3rem] font-bold" data-aos="fade-in">
        <span>Our </span>
        <span
          style={{
            backgroundImage:
              "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Journey
        </span>
      </div>
      <div className="mt-8 space-y-8 pl-24">
        {data.map((item, idx) => {
          return (
            <div className="cursor-pointer flex items-center space-x-4 hover:translate-x-4 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl">
                {item.year}
              </div>
              <div className="text-lg text-gray-600">{item.description} </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
