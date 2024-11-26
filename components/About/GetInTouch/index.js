import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

export default function GetInTouch() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration
      easing: "fade-up",
    });
  }, []);
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800" data-aos="fade-up">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600" data-aos="fade-up">
          We'd love to hear from you. Contact us for more information or
          inquiries.
        </p>
        <div className="mt-8">
          <p className="text-lg font-semibold text-gray-800" data-aos="fade-up">
            Email: contact@ourcompany.com
          </p>
          <p className="mt-2 text-lg text-gray-800" data-aos="fade-up">
            Phone: +1 (123) 456-7890
          </p>
        </div>
      </div>
    </section>
  );
}
