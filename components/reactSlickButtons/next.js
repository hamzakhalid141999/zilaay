import React from "react";
import classes from "./styles.module.css";
import arrow from "../../public/assets/icons/right_arrow.svg";
import Image from "next/image";

function next(props) {
  const { className, style, onClick, xPosition, yPosition } = props;

  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: xPosition ? xPosition : "-23px",
        top: yPosition ? yPosition : "40%",
        display: "block",
      }}
    >
      <Image
        src={arrow}
        height={"50"}
        width={"50"}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default next;
