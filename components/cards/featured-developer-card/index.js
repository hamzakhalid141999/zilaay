import React from "react";
import classes from "./developer-card.module.css";
import logo from "../../../public/assets/component-assets/featured-developer-card-assets/logo.svg";
import Image from "next/image";

function FeaturedDeveloper() {
  return (
    <div className={classes.card_body}>
      <img src={logo.src} />
    </div>
  );
}

export default FeaturedDeveloper;
