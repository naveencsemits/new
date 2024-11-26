import CardZoomer from "../CardZoomer";


export default function HeroBanner({ data }) {
  return (
    <div className="bg-[#FFF8F1] gap-10 mt-24 p-6 md:p-8 lg:p-12 rounded-lg shadow-md flex flex-col md:flex-row items-center  justify-center  mx-auto">
      <div className="md:w-[40%] space-y-4  md:text-left p-4">
        <div className="bg-[#FFD9B2] text-[#564E4A] font-medium text-sm py-1 px-3 rounded-full inline-block">
          {data.strip}
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#564E4A] leading-tight">
          {data.title.line1}{" "}
          <span className="text-[#DAA06D]"> {data.title.line2}</span>
        </h1>
        <ul className="space-y-2 text-[#564E4A]">
          {data.bullet_points.map((item, idx) => {
            return (
              <li
                className="flex items-start justify-center md:justify-start"
                key={idx}
              >
                <span className="w-6 h-6 bg-[#FFD9B2] rounded-full mr-3 flex items-center justify-center text-white font-semibold">
                  ✓
                </span>
                {item}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <button className="bg-black text-white font-semibold py-3 px-5 rounded-full w-full sm:w-auto">
            {data.button_txt}
          </button>
        </div>
        <p className="text-xs text-[#A6A29F] mt-4 text-center md:text-left ">
          {data.disclaimer_txt}
        </p>
      </div>

      <div className="md:w-[60%] flex flex-wrap justify-center md:justify-start gap-4 mt-8 md:mt-0 ">
        <CardZoomer content={data.carousel_data} />
      </div>
     
    </div>
  );
}
