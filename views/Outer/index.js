import React from "react";
import Gooery from "../../components/GooeryAnimation";
import DecryptText from "../../components/DecryptText";
import PropTypes from "prop-types";

const Outer = ({
  data: { title1, title2, decrypTexts, desciption, button, arr },
}) => {
  return (
    <div className="ai-outer hidden md:block">
      {/* <div className="container"> */}
      <div className="ai-outer-container flex justify-between items-center px-8">
        <div data-aos="fade-up" className="ai-outer-text ">
          <div className="ai-outer-heading">{title1}</div>
          <div className="ai-outer-heading">{title2}</div>
          <div className="ai-outer-heading2">
            <DecryptText values={decrypTexts} />
          </div>
          <div className="ai-outer-description">{desciption}</div>
          <div className=" flex w-[90%] border-2 flex flex-col md:flex-row p-4">
            {arr.map((data, key) => {
              return (
                <div
                  data-aos="flip-left"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-sine"
                  key={key}
                  className=" flex text-white flex-col md:flex-row items-center justify-center flex-1 rounded-lg m-1 p-2"
                  style={{
                    backgroundImage: data.gradient,
                    borderRadius: "10px",
                  }}
                >
                  <div className="flex flex-col justify-center align-items-center md:text-left md:flex-grow">
                    <b
                      className=" text-lg font-bold flex-2"
                      style={{ flex: 2, fontSize: "20px" }}
                    >
                      <span>{data.title1}</span>&nbsp;
                      <span style={{ color: data.primaryColor }}>
                        {data.title2}
                      </span>
                    </b>

                    <img
                      src={data.image}
                      alt=""
                      style={{ flex: 1 }}
                      className="flex-1 w-25 h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="ai-outer-contact">
              <button onClick={button?.onClick} className="ai-button">
                {button?.label}
              </button>
            </div> */}
        </div>
        <div className="ai-outer-gooery">
          <Gooery />
        </div>
      </div>
    </div>
    // </div>
  );
};

Outer.propTypes = {};

export default Outer;
