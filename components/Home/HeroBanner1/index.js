// components/WeightLossComponent.js

import Image from "next/image";
import CardZoomer from "../CardZoomer";
import { card_zoomer_content } from "./zoomer";
import CardSlider from "../CardSlider";
import Card from "../Products/Card";

export default function HeroBanner() {
  let arr = card_zoomer_content;
  return (
    <div className="bg-[#FFF8F1] p-6 md:p-8 lg:p-12 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start justify-center max-w-7xl mx-auto">
      <div className=" flex flex-wrap justify-center md:justify-start gap-4 mt-8 md:mt-0">
        {/* <CardZoomer content={card_zoomer_content} /> */}
        <CardSlider isMobile={false} isOtipy={false} isNews={true}>
          {arr.map((item, index) => {
            return (
              <Card
                data={item}
                item={item}
                date={item?.date}
                title={item?.name}
                key={index}
              />
            );
          })}
        </CardSlider>
      </div>
    </div>
  );
}
