import React from "react";
import classes from "./map-section.card.module.css";
import bg from "../../../public/assets/component-assets/map-card-assets/map-card-bg.png";
import developer_logo from "../../../public/assets/component-assets/map-card-assets/developer-logo.svg";
import Image from "next/image";
import hot_tag from "../../../public/assets/tags/hot-ribbon.svg";
import whatsapp_blue from "../../../public/assets/icons/whatsapp_blue.svg";
import whatsapp_color from "../../../public/assets/icons/whatsapp_color.svg";
import Link from "next/link";

import grey_drop_down from "../../../public/assets/icons/grey_drop_down.svg";
import video_card from "../../../public/assets/icons/video_card.svg";
import camera_card from "../../../public/assets/icons/camera_card.svg";
import share_card from "../../../public/assets/icons/share_card.svg";
import heart_card from "../../../public/assets/icons/heart_card.svg";

function PropertyDemoCard() {
  return (
    <Link href={"/property-detail"}>
      <div className={classes.card_body}>
        <img src={hot_tag.src} className={classes.tag} />
        <div className={classes.card_img}>
          <img src={heart_card.src} className={classes.heart} />
          <img src={share_card.src} className={classes.share} />
          <div className={classes.icons_container}>
            <div className={classes.single_tab}>
              <img src={video_card.src} className={classes.video} />
              <p>17</p>
            </div>
            <div className={classes.single_tab}>
              <img src={camera_card.src} className={classes.camera} />
              <p>2</p>
            </div>
          </div>
          <Image className={classes.img} fill src={bg} />
        </div>
        <div className={classes.content_container}>
          <div className={classes.content_section}>
            <h2 className={classes.property_title}>
              House For Sale in DHA Karachi
            </h2>
            <h2 className={classes.price}>PKR 4.05 Crore</h2>
            <p className={classes.address}>DHA Phase 7 Extension DHA Defence</p>
            <p className={classes.description_text}>Description</p>
            <div className={classes.details_row}>
              <p>4 Bed</p>
              <p>4 Bath</p>
              <p>500 Sq Yrds</p>
            </div>
            <p className={classes.status_text}>
              {" "}
              On Zilaay: 2 October 2022 (Updated 12 October 2022)
            </p>
            <p>Property ID: </p>

            {/* <div className={classes.btns_container}>
              <div className={classes.non_primary_btns}>
                <div
                  style={{ width: "100%", height: "23px" }}
                  className="btn_secondary"
                >
                  <p style={{ fontSize: "10px" }}>Call</p>
                </div>
                <div
                  style={{ width: "100%", height: "23px" }}
                  className="btn_secondary"
                >
                  <p style={{ fontSize: "10px" }}>WhatsApp</p>
                  <img src={whatsapp_blue.src} />
                </div>

                <div style={{ width: "100%", height: "23px" }} className="btn">
                  <p style={{ fontSize: "10px" }}>Email</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyDemoCard;
