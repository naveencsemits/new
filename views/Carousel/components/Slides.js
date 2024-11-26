import React from "react";
import SliderCard from "./SliderCard";

function Slides({ data }) {
  return (
    <div className="flex w-full gap-6">
      {data.map((item) => {
        return <SliderCard key={item.img} data={item} />;
      })}
    </div>
  );
}

export default Slides;
