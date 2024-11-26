import { useState, useEffect } from "react";
import BackgroundVideo from "../BackgroundVideo";
import HeroBanner from "../Home/HeroBanner";
import { SearchIcon } from "../Home/HeroBanner/SearchIcon";

const Content = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl">Begin your journey</h1>

      <button className="flex flex-row  items-center space-x-4 bg-white text-black mt-5 font-semibold py-3 px-5 rounded-full w-full sm:w-auto outline-none border-none">
        <SearchIcon />
        &nbsp; Find my treatment
      </button>
    </div>
  );
};

const ProductMedia = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Component is mounted on the client
  }, []);

  return (
    <div className="h-[60vh] relative overflow-hidden border-6 border-red rounded-lg">
      {/* Only load the video on the client-side */}
      {isClient && (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={`/videos/1.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {/* Overlay content */}
      {/* <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50"> */}
      <div className="absolute inset-0 flex justify-center items-center ">
        {/* <Content /> */}
      </div>
    </div>
  );
};

export default ProductMedia;
