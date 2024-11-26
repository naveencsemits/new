import Image from 'next/image';

 const Compound=()=> {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#fff8f1] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
   
      <div data-aos="fade-up" className="lg:w-1/2 lg:pl-8 text-center">
        <h2 className=" sm:text-4xl text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
          What is Compounded Semaglutide?
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Compounded Semaglutide is a patient-specific medication prescribed by a licensed healthcare provider based on a medical assessment and compounded in a 503(a) Compounding Pharmacy or 503(b) Outsourcing Facility.
        </p>
        {/* <p className="text-gray-600 mb-6 leading-relaxed">
          Compounded medications do not undergo pre-market review or an FDA-approval process. They may differ in efficacy, safety, risk, and side-effect profile from commercially available or FDA-approved drugs.
        </p>
        <p className="text-gray-900 font-bold">
          Henry Meds exclusively works with licensed compounding pharmacies in the United States.
        </p> */}
      </div>
      <div  className=" w-full lg:w-1/2 mb-6 lg:mb-0  ">
        <img
        data-aos="fade-up"
          src="/images/compund.png" // Replace this with your image path
          alt="Compounded Semaglutide"
          width={400}
          height={400}
          className="rounded-lg object-cover  border-2 m-auto"
        />
      </div>
    </div>
  );
}
export default Compound