import React from "react";
import classes from "./hot-project-card.module.css";
import Image from "next/image";
import bg from "../../../public/assets/component-assets/hot-project-card-assets/bg.png";
import home from "../../../public/assets/component-assets/hot-project-card-assets/home.svg";
import size from "../../../public/assets/component-assets/hot-project-card-assets/size.svg";
import logo from "../../../public/assets/component-assets/hot-project-card-assets/logo.svg";

function HotProjectCard() {
  return (
    <div className={classes.card_body}>
      <div className={classes.card_img}>
        <Image className={classes.img} fill src={bg} />
      </div>

      <div className={classes.content_container}>
        <img src={logo.src} className={classes.developer_logo} />
        <div className={classes.content_section}>
          <p className={classes.price_tag}>PKR 13.5 Lakh to 56 Lakh</p>
          <p className={classes.address}>Musa Garden Housing Scheme, Lahore</p>
          <p className={classes.city}>Lahore, Batapur</p>

          <div className={classes.single_detail}>
            <img src={home.src} />
            <p>Residential Plots, Commercial Plots</p>
          </div>

          <div className={classes.single_detail}>
            <img src={size.src} />
            <p>450sqft to 900sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotProjectCard;
