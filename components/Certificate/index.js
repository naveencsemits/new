import React from "react";
import Measurement from "../Measurement";

const CertificateOfGuarantee = () => {
  return (
    <div className="p-8 bg-[#faf8f2]"> 
      <h2 className="text-black text-[3rem] px-2 py-4 font-bold">
    Guarantee{" "}
    <span
      style={{
        backgroundImage:
          "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Certificate
    </span>
  </h2>
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:space-x-6">
      {/* First Section */}
      
      <div data-aos="flip-left" className=" border-1 max-w-3xl p-8 w-full lg:w-1/2">
        {/* Badge/Logo */}
        {/* <div className="flex justify-center mb-6">
          <div className="relative text-center">
            <div className="inline-block rounded-lg border-4 p-4">
              <div className="font-bold text-lg">Health Commerce</div>
              <div className="text-sm font-medium uppercase">
                Satisfaction Guarantee
              </div>
            </div>
          </div>
        </div> */}

        {/* Title */}
        <h2 className="text-center text-2xl font-extrabold mb-2">
          The Health Commerce Guarantee
        </h2>
        <p className="text-center text-lg font-medium text-gray-500 mb-8">
          100% Satisfaction Or Your Money Back
        </p>

        {/* Description */}
        <p className="text-gray-700 text-center mb-4 leading-6">
          For the first 30 days from when you sign up, you get complete access
          to Henry programs and our providers to fully test how effective our
          weight loss treatments are. Join the thousands of patients in
          trusting Henry.
        </p>
        <p className="text-gray-700 text-center leading-6">
          If you are not 100% satisfied within the first 30 days from when you
          join the Henry Meds Program, simply request your money back, and you
          will be refunded in full.
        </p>
Measurement
        {/* No Questions Asked */}
        <p className="text-center font-semibold text-gray-800 mt-6">
          No questions asked.
        </p>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <button className=" font-bold py-3 px-6 rounded-lg shadow hover:bg-green-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div data-aos="flip-left" className="  max-w-3xl p-8 w-full lg:w-1/2">
       <Measurement/>
      </div>
    </div>
    </div>
  );
};

export default CertificateOfGuarantee;
