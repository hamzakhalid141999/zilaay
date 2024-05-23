import React from "react";
import classes from "./elite-agencies-card.module.css";
import logo from "../../../public/assets/component-assets/agency-card-assets/logo.png";
import Image from "next/image";
import elite_tag from "../../../public/assets/tags/elite_tag.svg";

function EliteAgencyCard() {
  return (
    <div className={classes.card_body}>
      <img src={elite_tag.src} className={classes.tag} />
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
