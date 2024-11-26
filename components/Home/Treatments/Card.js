import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Card({ data }) {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col items-center justify-center border-none transition-transform ease-in-out duration-300 cursor-pointer relative overflow-hidden w-[75%] lg:w-[330px] md:w-[220px] h-[50vh] md:h-[60vh] mx-2 transform hover:scale-101 rounded-[1rem] flex-shrink-0`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), url(${data.img})`, // Gradient over the image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-between p-3   text-white w-[100%] h-[100%]">
        <div>
          <p className="text-[1.25rem]">{data.title.line1}</p>
          <p className="text-[1.5rem]">{data.title.line2}</p>
        </div>

        <div>
          {/* <p className="text-white text-[2rem]">{data?.description?.line1}</p>
          <p className="text-white text-[2rem]">{data?.description?.line2}</p> */}
          <div className="flex flex-row justify-between font-normal w-full text-center mt-4">
            <button
              className="p-2 rounded-[1.5rem] bg-white text-black border-[1px] border-skin_border w-full m-1 hover:bg-skin_border hover:text-white transition-all duration-300"
              onClick={() => {
                router.push("/form");
              }}
            >
              Get Started
            </button>

            <button
              onClick={() => {
                router.push(`/product/product${data.id}`);
              }}
              className="p-2 rounded-[1.5rem] bg-transparent text-white border-[1px] border-skin_border backdrop-blur-lg w-full m-1 hover:bg-skin_border hover:text-white hover:text-white transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
