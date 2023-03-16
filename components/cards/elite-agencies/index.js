import React from "react";
import classes from "./elite-agencies-card.module.css";
import logo from "../../../public/assets/component-assets/agency-card-assets/logo.png";
import Image from "next/image";

function EliteAgencyCard() {
  return (
    <div className={classes.card_body}>
      <div className={classes.img_container}>
        <img className={classes.logo} src={logo.src} />
      </div>
      <div className={classes.content_container}>
        <p>Karachi</p>
        <p>No. of Properties Available</p>
        <p>(25)</p>
      </div>
    </div>
  );
}

export default EliteAgencyCard;
