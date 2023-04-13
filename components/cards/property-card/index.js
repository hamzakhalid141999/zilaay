import React from "react";
import classes from "./property-card.module.css";
import bg from "../../../public/assets/component-assets/map-card-assets/map-card-bg.png";
import bath from "../../../public/assets/component-assets/proprerty-card-assets/bath.svg";
import bed from "../../../public/assets/component-assets/proprerty-card-assets/bed.svg";
import size from "../../../public/assets/component-assets/proprerty-card-assets/size.svg";
import Image from "next/image";
import whatsapp_blue from "../../../public/assets/icons/whatsapp_blue.svg";
import whatsapp_color from "../../../public/assets/icons/whatsapp_color.svg";
import ad from "../../../public/assets/icons/ad.png";
import heart_card from "../../../public/assets/icons/heart_card.svg";

function PropertyCard({ isAd }) {
  return (
    <div className={classes.card_body}>
      {isAd ? (
        <>
          <Image className={classes.ad_img} src={ad} fill />
          <div className={classes.ad_content}>
            <p>Some random Ad text</p>
            <div className={classes.btn_filled}>
              <p>View Property</p>
            </div>
          </div>

          <div className={classes.ad_tag}>
            <p>ADS</p>
          </div>

          <img src={heart_card.src} className={classes.heart} />
        </>
      ) : (
        <>
          <img src={heart_card.src} className={classes.heart} />

          <div className={classes.card_img}>
            <Image className={classes.img} fill src={bg} />
          </div>
          <div className={classes.content_container}>
            <div className={classes.content_section}>
              <h2 className={classes.property_title}>PECHS Block 6, PECHS</h2>
              <h2 className={classes.price}>PKR 75 Thansand</h2>
              <div className={classes.details_row}>
                <div className={classes.single_detail}>
                  <img src={bed.src} />
                  <p>8</p>
                </div>
                <div className={classes.single_detail}>
                  <img src={bath.src} />
                  <p>3</p>
                </div>
                <div className={classes.single_detail}>
                  <img src={size.src} />
                  <p>500 Sq. Yd</p>
                </div>
              </div>

              <div className={classes.btns_container}>
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

                  <div
                    style={{ width: "100%", height: "23px" }}
                    className="btn"
                  >
                    <p style={{ fontSize: "10px" }}>Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PropertyCard;
