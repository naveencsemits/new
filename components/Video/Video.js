import React, { useContext, useRef } from "react";
import CardSlider from "../CardSlider/index";

import styles from "./style.module.css";

export default function Video({ data: arr }) {
  console.log(arr, "567890-");
  let video1 = useRef(null);
  let video2 = useRef(null);
  function check(idx) {
    if (!(video1 && video1.current && video1.current.children)) {
      return;
    }
    let index = 0;
    for (let item of video1.current.children) {
      if (idx != index) item.pause();
      index++;
    }
  }
  return (
    <>
      <div className={styles.section}>
        {/* <div className={styles.left_arrow}>
          {appContext.isMobile ? <MwebRight /> : <Left />}
        </div>
        <div className={styles.right_arrow}>
          {appContext.isMobile ? <MwebLeft /> : <Right />}
        </div> */}
        <CardSlider
          styles={styles}
          isMobile={true}
          isVideo={true}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="flex" ref={video1}>
            {arr.map(function (item, idx) {
              return (
                <video
                  controls
                  // className={styles.video}
                  className="sm:w-[400px] sm:h-[400px] gap-4 rounded-lg mr-20"
                  onPlay={function () {
                    check(idx);
                  }}
                  poster={`${item?.thumbnail}`}
                >
                  <source src={`${item?.url}`} type="video/mp4" />
                </video>
              );
            })}
          </div>
          {/* <video
            controls
            className={styles.video}
            ref={video1}
            onPlay={function () {
              video1Play();
            }}
            poster="https://img.crofarm.com/crofarmweb/otipy/thumbnail_1.webp"
          >
            <source
              src={`${IMG_URL}otipy/otipy_video_1.mp4`}
              type="video/mp4"
            />
          </video>
          <video
            controls
            className={styles.video}
            ref={video2}
            onPlay={function () {
              video2Play();
            }}
            poster="https://img.crofarm.com/crofarmweb/otipy/thumbnail_2.webp"
          >
            <source
              src={`${IMG_URL}otipy/otipy_video_2.mp4`}
              type="video/mp4"
            />
          </video> */}
        </CardSlider>
      </div>
    </>
  );
}
