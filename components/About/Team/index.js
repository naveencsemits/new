import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

export default function Team({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section
      className=" px-6  md:p-8 lg:px-8 lg:py-12 "
      style={{ background: "rgb(250, 248, 242)!important" }}
    >
      <div className="text-black text-[3rem]  font-bold" data-aos="fade-in">
        <span>Meet the </span>
        <span
          style={{
            backgroundImage:
              "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Team
        </span>
      </div>{" "}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, idx) => {
          return (
            <div
              className="bg-white shadow-lg rounded-lg p-6"
              data-aos="fade-up"
            >
              <img
                src={item.image}
                alt="Team Member 1"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="mt-2 text-gray-600">{item.position}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
