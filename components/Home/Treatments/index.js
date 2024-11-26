import React from "react";
import Card from "./Card";
import styles from "./style.module.css";
import { seed } from "./seed";
import Heading from "../../Heading";

export default function Treatments({ data }) {
  const finalData = data ? data : seed;
  return (
    <div className="p-4" style={{ background: "rgb(250, 248, 242)" }}>
      <Heading heading="Popular" subheading="treatement" />

      <div
        className={` ${styles.op}`}
        style={{
          width: "100%",
          overflowX: "auto", // Enable horizontal scrolling
          overflowY: "hidden", // Hide vertical scroll (optional)
          whiteSpace: "nowrap", // Keep items on one line
          display: "flex",
          gap: "1rem",
        }}
      >
        {finalData.map((item, index) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
}
