import React from "react";
import classes from "./styles.module.css";
import arrow from "../../public/assets/icons/left_arrow.svg";
import Image from "next/image";

function prev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "-28px",
        top: "40%",
        display: "block",
        zIndex: "+10",
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

export default prev;
