import React from "react";

export default function Card({ data }) {
  return (
    <div
      data-aos={`flip-left`}
      data-aos-delay="100"
      data-aos-easing="ease-in-sine"
      className={`border-3 flex flex-col items-center justify-center border-none transition-transform ease-in-out duration-300 cursor-pointer relative overflow-hidden lg:flex-1 sm:w-[100%] w-[85vw] h-[50vh] md:h-[60vh] md:mx-2 transform hover:scale-101 rounded-[1.5rem] flex-shrink-0 `}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${data.img})`, // Gradient over the image
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="flex flex-col  justify-between  font-bold text-white w-[100%] h-[100%]">
        <h2 className="text-[1.5rem] opacity-1 p-4 invisible ">{data.title}</h2>
        <div className=" backdrop-blur-lg py-2">
          <h2 className="text-[1.35rem] opacity-1 md:px-4 pt-2 ">
            {data.title}
          </h2>

          <div className="flex flex-col justify-between font-normal w-full ">
            <p className="text-white text-[1.2rem] px-4">
              {data?.description?.line1}
            </p>
            <p className="text-white text-[1.2rem] px-4">
              {data?.description?.line2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
