import { useContext, useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import styles from "./style.module.css";
const CardSlider = (props) => {

  let [left, setLeft] = useState(false);
  let [right, setRight] = useState(true);
  const showControl = props.showControl;
  function checkScroll() {
    // console.log(cardRef.current.scrollLeft, cardRef.current.scrollWidth);
    // console.log(
    //   "##",
    //   document.getElementById("kli").offsetWidth,
    //   document.getElementById("kli").scrollWidth,
    //   document.getElementById("kli"),
    //   cardRef.current.offsetWidth,
    //   cardRef.current.clientWidth,
    //   cardRef.current.scrollLeft,
    //   prev == cardRef.current.scrollLeft
    // );

    if (
      cardRef.current.scrollLeft + cardRef.current.offsetWidth >=
      cardRef.current.scrollWidth - 5
    ) {
      setRight(false);
    } else {
      setRight(true);
    }
    if (cardRef.current.scrollLeft && cardRef.current.scrollLeft > 0) {
      setLeft(true);
    } else {
      setLeft(false);
    }
  }
  const isMobile = props.isMobile;
  const cardRef = useRef();
  const slideLeft = () => {
    if (cardRef.current.scrollLeft) {
      cardRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    cardRef.current.scrollLeft += 500;
  };
  // useEffect(function () {
  //   appContext.setNews(true);
  // }, []);

  return (
    <div className={styles.op}>
      {!isMobile && !props.isOtipy && left && (
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
          style={
            props.house && props.house != undefined
              ? { backgroundColor: "#532E12", color: "white", opacity: 1 }
              : props.showNews && props.showNews != undefined
              ? { display: "none" }
              : props.isVideo && props.isVideo != undefined
              ? { background: "white", opacity: "1" }
              : {}
          }
        />
      )}
      <div
        ref={cardRef}
        onScroll={checkScroll}
        className={styles.card_container}
        style={
          props.isOtipy
            ? props.isNews
              ? {}
              : props.isMobile
              ? {}
              : { display: "flex", justifyContent: "center" }
            : props.isMobile
            ? {}
            : props.isVideo && props.isVideo != undefined
            ? { display: "flex", justifyContent: "center" }
            : {}
        }
      >
        {props.children}
      </div>
      {!isMobile && !props.isOtipy && right && (
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
          style={
            props.house && props.house != undefined
              ? { backgroundColor: "#532E12", color: "white", opacity: 1 }
              : props.showNews && props.showNews != undefined
              ? { display: "none" }
              : props.isVideo && props.isVideo != undefined
              ? { background: "white", opacity: "1" }
              : {}
          }
        />
      )}
    </div>
  );
};
export default CardSlider;
