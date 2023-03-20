import React from "react";
import classes from "./property-images.module.css";
import img_1 from "../../../../public/assets/property-detail-assets/img_1.png";
import img_2 from "../../../../public/assets/property-detail-assets/img_2.png";
import img_3 from "../../../../public/assets/property-detail-assets/img_3.png";
import img_4 from "../../../../public/assets/property-detail-assets/img_4.png";
import img_5 from "../../../../public/assets/property-detail-assets/img_5.png";
import Image from "next/image";

function PropertyImages() {
  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <Image fill className={classes.img_1} src={img_1.src} />
      </div>
      <div className={classes.right_panel}>
        <div className={classes.single_row}>
          <div className={classes.img_container}>
            <Image fill className={classes.img_1} src={img_2.src} />
          </div>
          <div className={classes.img_container}>
            <Image fill className={classes.img_1} src={img_4.src} />
          </div>
        </div>
        <div className={classes.single_row}>
          <div className={classes.img_container}>
            <Image fill className={classes.img_1} src={img_3.src} />
          </div>
          <div className={classes.img_container}>
            <Image fill className={classes.img_1} src={img_5.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyImages;
