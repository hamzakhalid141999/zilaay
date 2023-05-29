import React from "react";
import classes from "./buy.module.css";
import MapSectionCard from "../../components/cards/map-section-card";
import PropertyCard from "../../components/cards/property-card";
import drop_down_icon from "../../public/assets/icons/drop_down.svg";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../../components/footer/index";
import near_me_pin from "../../public/assets/icons/near_me_pin.svg";
import search_icon from "../../public/assets/icons/search_icon.svg";
import grey_drop_down from "../../public/assets/icons/grey_drop_down.svg";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Buy() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
  };

  return (
    <div className={classes.wrapper}>
      <ReactTooltip
        style={{ zIndex: "1000" }}
        anchorId="near-me"
        place="top"
        content="search near me"
      />
      <div className={classes.main_container}>
        <div className={classes.map_container}>
          <div className={classes.filter_bar_container}>
            <div className={classes.filter_bar}>
              <div
                style={{ minWidth: "260px" }}
                className="select_input_container_2_icons"
              >
                <input
                  placeholder="Address, Neighborhood or ZIP"
                  className={classes.input_field}
                />
                <img
                  id="near-me"
                  className="input_icon_1"
                  src={near_me_pin.src}
                />
                <img className="input_icon_2" src={search_icon.src} />
              </div>

              <div
                style={{ minWidth: "75px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Buy</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "140px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Property Type</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "120px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Area (Sqt)</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "90px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Price</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "80px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Beds</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "90px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Baths</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "145px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>More Options</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>
            </div>

            <div className="btn">
              <p>SAVE SEARCH</p>
            </div>
          </div>

          <div className={classes.map_property_section}>
            <div className={classes.map_section}>
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
            <div className={classes.properties_section_container}>
              <div className={classes.property_title_bar}>
                <h2>Karachi, Defence DHA Houses for Sale</h2>
                <div className="select_input_container">
                  <select className={classes.sort_by_input}>
                    <option>Popular</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Lowest Price</option>
                    <option>Highest Price</option>
                  </select>
                  <img
                    style={{ opacity: 0.5, width: "14px" }}
                    src={grey_drop_down.src}
                  />
                </div>
              </div>

              <div className={classes.scroller}>
                <div className={classes.properties_section}>
                  <MapSectionCard />
                  <MapSectionCard />
                  <MapSectionCard />
                  <MapSectionCard />
                  <MapSectionCard />
                  <MapSectionCard />
                  <MapSectionCard />
                  <MapSectionCard />
                  <MapSectionCard />
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
