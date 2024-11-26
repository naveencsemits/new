import React from "react";
import Card from "./Card";
import styles from "./style.module.css";
import { seed } from "./seed";
import Heading from "../../Heading";

export default function Products() {
  return (
    <div className="p-4" style={{ background: "rgb(250, 248, 242)" }}>
      {/* <div className="text-black text-[3rem] px-10 py-4 font-bold">
        <p>Leading doctors for trusted care. </p>
        <p
          style={{
            backgroundImage:
              "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          on your own terms
        </p>
      </div> */}
      <Heading heading={"Medical"} subheading={"Experts"} />

      <div
        className={`${styles.op}`}
        style={{
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        {seed.map((item, index) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
}
