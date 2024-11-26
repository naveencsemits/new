import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

export default function Mission() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section
      className="mt-24 bg-white px-6  md:p-8 lg:px-8 lg:py-12 rounded-lg bg"
      style={{ background: "rgb(250, 248, 242)!important" }}
    >
      <div className="text-black text-[3rem]  font-bold" data-aos="fade-in">
        <span>Our </span>
        <span
          style={{
            backgroundImage:
              "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Mission{" "}
        </span>
      </div>{" "}
      <p className="mt-4 text-lg text-gray-600 text-justify" data-aos="fade-up">
        Our mission is to provide cutting-edge and innovative solutions designed
        to simplify and enhance everyday life. By leveraging the latest
        advancements in technology, we aim to create products and services that
        not only make tasks easier but also improve overall efficiency. We are
        deeply committed to the belief that technology has the potential to
        transform lives, making them more convenient, productive, and
        fulfilling. Through our solutions, we strive to empower individuals,
        enabling them to achieve more with less effort and time, ultimately
        driving meaningful change in both personal and professional realms.
      </p>
    </section>
  );
}
