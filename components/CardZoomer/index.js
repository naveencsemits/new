
import React, { useEffect, useState } from "react";

const CardZoomer = (props) => {
  const { content } = props;
  const [hoveredCard, setHoveredCard] = useState(content[0]?.id);
  const [display, setDisplay] = useState(true);
  const [initial, setInitial] = useState(false);

  const handleHoveredCard = () => {
    setHoveredCard(content[0]?.id);
  };

  useEffect(() => {
    handleHoveredCard();
  }, []);

  useEffect(() => {
    if (!initial) {
      setInitial(true);
      return;
    }
    setDisplay(false);
    setTimeout(() => {
      setDisplay(true);
    }, 500);
  }, [hoveredCard]);

  return (
    <div className="flex justify-center items-start gap-5">
      {content.map((card) => (
        <div
          key={card.id}
          className={`flex flex-col items-center justify-center border-none transition-all ease-in-out duration-700 cursor-pointer relative overflow-hidden ${
            hoveredCard === card.id ? "w-[65%] h-[570px]" : "w-[16%] h-[570px]"
          }`}
          style={{ borderRadius: "70px" }}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => handleHoveredCard()}
        >
          <img
            src={card.img}
            alt="content_img"
            className="object-cover w-full h-full transition-opacity duration-300"
            style={{ borderRadius: "70px" }}
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
              hoveredCard === card.id ? "opacity-0" : "opacity-100"
            }`}
          >
            <h2 
              // style={{
              //   backgroundImage: "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
              //   WebkitBackgroundClip: "text",
              //   color: "transparent",
              // }}
              className="text-[2rem] text-white font-bold text-red -rotate-90 absolute bottom-20 left-0 right-0">
              {card.title}
            </h2>
          </div>
          {(hoveredCard === card.id && display) && (
            <div className="bg-[#FFF8F1] absolute bottom-0 left-0 right-0 px-8 py-2 w-full rounded-lg ">
              <h2 
                style={{
                  backgroundImage: "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className="text-[2rem] font-bold">
                {card.title}
              </h2>
              <p className="text-[1.1rem]">{card.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardZoomer;