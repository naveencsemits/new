import { useState, useEffect } from "react";

const BackgroundVideo = ({ Component, videoUrl }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts on the client
  }, []);

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 w-auto w-full h-full transform -translate-x-1/2 -translate-y-1/2 object-contain bg-opacity-50"
      >
        <source src={`${videoUrl}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Lighter gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 z-10">
        <Component />
      </div>
    </div>
  );
};

export default BackgroundVideo;
