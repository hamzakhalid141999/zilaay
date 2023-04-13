import React, { useState, useEffect } from "react";
import classes from "./property-detail.module.css";
import PropertyImages from "./property-images";
import star_filled from "../../../public/assets/property-detail-assets/star_filled.svg";
import star_empty from "../../../public/assets/property-detail-assets/star_empty.svg";
import hot_tag from "../../../public/assets/tags/hot-ribbon.svg";

import message from "../../../public/assets/property-detail-assets/message.svg";
import call from "../../../public/assets/property-detail-assets/call.svg";
import chat from "../../../public/assets/property-detail-assets/chat.svg";
import logo from "../../../public/assets/component-assets/agency-card-assets/logo.png";
import Image from "next/image";

import waste from "../../../public/assets/icons/waste.svg";
import study from "../../../public/assets/icons/study.svg";
import sofa from "../../../public/assets/icons/sofa.svg";
import services from "../../../public/assets/icons/services.svg";
import parking_icon from "../../../public/assets/icons/parking_icon.svg";
import kitchen from "../../../public/assets/icons/kitchen.svg";
import flooring from "../../../public/assets/icons/flooring.svg";
import elevators from "../../../public/assets/icons/elevators.svg";
import electricity from "../../../public/assets/icons/electricity.svg";
import drop_down from "../../../public/assets/icons/drop_down.svg";
import dining from "../../../public/assets/icons/dining.svg";
import bed from "../../../public/assets/icons/bed.svg";
import bath from "../../../public/assets/icons/bath.svg";
import whatsapp_icon from "../../../public/assets/icons/whatsapp_color.svg";
import phone_blue from "../../../public/assets/icons/phone_blue.svg";
import email_white from "../../../public/assets/icons/email_white.svg";
import profile from "../../../public/assets/property-detail-assets/profile.png";
import doc1 from "../../../public/assets/property-detail-assets/doc1.png";
import doc2 from "../../../public/assets/property-detail-assets/doc2.png";
import ad from "../../../public/assets/property-detail-assets/ad.png";
import { useInView } from "react-intersection-observer";

function PropertyDetailContent({ stickyDivRef }) {
  const [isTopPanelSticky, setIsTopPanelSticky] = useState(false);

  console.log("IS STICKY: ", isTopPanelSticky);

  return (
    <div className={classes.container}>
      <PropertyImages setIsTopPanelSticky={setIsTopPanelSticky} />
      <div className={classes.content_container}>
        <div
          style={{
            position: isTopPanelSticky && "fixed",
            top: isTopPanelSticky && "35px",
            width: isTopPanelSticky && "100vw",
            borderRadius: isTopPanelSticky && "0",
          }}
          className={classes.stats_panel}
        >
          <div
            style={{
              marginLeft: isTopPanelSticky && "14px",
            }}
            className={classes.btns_container}
          >
            <div className="btn_rounded">
              <p>Overview</p>
            </div>

            <div className="btn_rounded_white">
              <p style={{ color: "black" }}>Location & Nearby</p>
            </div>

            <div className="btn_rounded_white">
              <p style={{ color: "black" }}>Description</p>
            </div>

            <div className="btn_rounded_white">
              <p style={{ color: "black" }}>Property Features</p>
            </div>

            <div className="btn_rounded_white">
              <p style={{ color: "black" }}>Property Documents</p>
            </div>
          </div>

          <div className={classes.btns_container_right}>
            <p className={classes.stat}>
              24 <span>Photos</span>
            </p>
            <p className={classes.stat}>
              2 <span>Virtual Tours</span>
            </p>{" "}
            <p className={classes.stat}>
              4 <span>Videos</span>
            </p>
          </div>
        </div>
        <div className={classes.details_container}>
          <div className={classes.left_panel}>
            <div className={classes.section}>
              <div className={classes.initial_info_container}>
                <h3>New Horizons</h3>
                <p>3619 Kings Gate Dr, Memphis, TN 38116</p>
                <p>Whitehaven</p>

                {/* <div className={classes.single_row_details}>
                  <div className={classes.stars_container}>
                    <img src={star_filled.src} />
                    <img src={star_filled.src} />
                    <img src={star_filled.src} />
                    <img src={star_filled.src} />
                    <img src={star_empty.src} />
                  </div>
                  <p className={classes.rating}>
                    3.9 <span>(28 Reviews)</span>
                  </p>
                  <div className={classes.single_row}>
                    <img src={hot_tag.src} />
                    <p>Verified Listing</p>
                  </div>
                </div> */}
              </div>

              <div className={classes.overview_details_container}>
                <div className={classes.heading_container}>
                  <h3>Overview</h3>
                </div>
                <p>Details</p>
                <div className={classes.overview_details_table}>
                  <div className={classes.table_half}>
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>{" "}
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>
                  </div>

                  <div className={classes.table_half}>
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>{" "}
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>
                  </div>
                  <div className={classes.table_half}></div>
                </div>
              </div>
            </div>

            <div className={classes.divider} />

            <div className={classes.section}>
              <h2 className={classes.section_heading}>Description</h2>
              <p className={classes.para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                viverra nibh commodo, commodo libero eu, condimentum quam. Nam
                id pulvinar lorem. Curabitur pellentesque felis bibendum arcu
                vehicula hendrerit. Etiam efficitur mauris viverra, interdum
                lectus ac, convallis massa. Mauris congue ipsum non metus
                sollicitudin, at imperdiet dolor cursus. Sed tempor, nunc non
                facilisis aliquet, odio erat tempor lacus, nec commodo leo est
                vel purus. Etiam enim ligula, laoreet ut arcu ut, tristique
                facilisis mauris. Sed nulla justo, fermentum a justo et,
                ultrices auctor ex. Nullam malesuada justo ut nunc posuere
                consectetur.
              </p>
            </div>
            <div className={classes.divider} />

            <div className={classes.section}>
              <h2 className={classes.section_heading}>Property Features</h2>

              <div className={classes.features_container}>
                <h2>Main Features</h2>

                <div className={classes.vertical_divider} />

                <div className={classes.features}>
                  <div className={classes.feature_row}>
                    <img src={parking_icon.src} />
                    <p>Parking Spaces: 1</p>
                  </div>

                  <div className={classes.feature_row}>
                    <img src={flooring.src} />
                    <p>Flooring</p>
                  </div>

                  <div className={classes.feature_row}>
                    <img src={electricity.src} />
                    <p>Electricity Backup</p>
                  </div>

                  <div className={classes.feature_row}>
                    <img src={waste.src} />
                    <p>Waste Disposal</p>
                  </div>

                  <div className={classes.feature_row}>
                    <img src={elevators.src} />
                    <p>Elevators: 1</p>
                  </div>

                  <div className={classes.feature_row}>
                    <img src={services.src} />
                    <p>Service Elevators in Building</p>
                  </div>
                </div>
              </div>

              <div
                style={{ backgroundColor: "white" }}
                className={classes.features_container}
              >
                <h2>Rooms</h2>

                <div className={classes.vertical_divider} />

                <div className={classes.features}>
                  <div className={classes.feature_row}>
                    <img src={bed.src} />
                    <p>Bedrooms: 1</p>
                  </div>

                  <div className={classes.feature_row}>
                    <img src={bath.src} />
                    <p>Bathrooms: 4</p>
                  </div>

                  <div className={classes.feature_row}>
                    <img src={dining.src} />
                    <p>Dining Room</p>
                  </div>

                  <div className={classes.feature_row}>
                    <img src={kitchen.src} />
                    <p>Kitchen: 1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.divider} />

            <div className={classes.section}>
              <h2 className={classes.section_heading}>Property Documents</h2>

              <div className={classes.docs_container}>
                <img src={doc1.src} />
                <img src={doc2.src} />
                <img src={doc1.src} />
                <img src={doc2.src} />
              </div>

              <div style={{ width: "100%" }} className="cities_container">
                <p
                  style={{ color: "#0060fd" }}
                  className="listed_properties_heading"
                >
                  Location & Nearby
                </p>
                <div className="cities_btns_container">
                  <div className="city_btn">
                    <p>DHA Phase 8 Maps</p>
                  </div>
                  <div className="city_btn">
                    <p>Nearby</p>
                  </div>

                  <div style={{ marginLeft: "20px" }} className="btn">
                    <p>More Karachi Maps</p>
                  </div>
                </div>
              </div>

              <div className={classes.map_container} style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="350"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
          <div ref={stickyDivRef} className={classes.right_panel}>
            <div className={classes.contact_panel}>
              <div className={classes.panel_content_container}>
                <h2 className={classes.place_name}>New Horizons</h2>
                <p className={classes.address}>
                  3619 Kings Gate Dr, Memphis, TN 38116
                </p>
                <p className={classes.city}>Whitehaven</p>

                <div className={classes.panel_btns_container}>
                  <h2 className={classes.price}>PKR4.05 Crore</h2>

                  <div style={{ width: "90%" }} className="btn_secondary">
                    <img src={phone_blue.src} />
                    <p>Call</p>
                  </div>
                  <div
                    style={{ width: "90%", backgroundColor: "#25D366" }}
                    className="whatsapp_btn"
                  >
                    <img src={whatsapp_icon.src} />
                    <p>WhatsApp</p>
                  </div>
                  <div style={{ width: "90%" }} className="btn">
                    <img src={chat.src} />
                    <p>Zilaay Chat</p>
                  </div>
                  <div style={{ width: "90%" }} className="btn">
                    <img src={email_white.src} />
                    <p>Email</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.agency_panel}>
              <div className={classes.agency_content_container}>
                <div className={classes.img_container}>
                  <Image fill src={logo} />
                </div>
                <div className={classes.agency_info_panel}>
                  <h2 className={classes.agency_heading}>
                    Cantt Vista Real Estate
                  </h2>
                  <p
                    style={{ marginBottom: "4px" }}
                    className={classes.agency_subheading}
                  >
                    Karachi Agency
                  </p>

                  <h2
                    style={{ marginTop: "4px" }}
                    className={classes.agency_heading}
                  >
                    Raheel Ahmed Mir
                  </h2>
                  <p className={classes.agency_subheading}>Contact Person</p>
                  <div
                    style={{ border: "1px solid #0549c7" }}
                    className={classes.btn_filled}
                  >
                    <p>Agency Profile</p>
                  </div>
                </div>
              </div>
              <div className={classes.btns_container}>
                <div className={classes.btn_filled}>
                  <p>Call</p>
                </div>

                <div className={classes.btn_empty}>
                  <p>Whatsapp</p>
                </div>

                <div className={classes.btn_filled}>
                  <p>Email</p>
                </div>
              </div>
            </div>
            <div className={classes.useful_links_section}>
              <div className={classes.links_content_container}>
                <h2 className={classes.links_heading}>Useful Links</h2>
                <p>Property for sale in Karachi</p>
                <p>Property for sale in Karachi</p>
                <p>Property for sale in Karachi</p>
                <p>Property for sale in Karachi</p>
                <p>Property for sale in Karachi</p>
                <p>Property for sale in Karachi</p>
                <p>Property for sale in Karachi</p>
              </div>
            </div>
            <img src={ad.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailContent;
