import React from "react";
import MapSectionCard from "../../cards/map-section-card";
import PropertyCard from "../../cards/property-card";
import classes from "./map.module.css";
import drop_down_icon from "../../../public/assets/icons/drop_down.svg";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Map() {
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
      <div className={classes.main_container}>
        <div className={classes.map_container}>
          <div className={classes.filter_bar_container}>
            <div className={classes.filter_bar}>
              <input
                placeholder="Address, neighborhood, or ZIP"
                style={{ width: "130%" }}
                className={classes.input_field}
              />

              <div style={{ width: "60%" }} className="select_input_container">
                <select className={classes.input_field}>
                  <option>Buy</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div style={{ width: "120%" }} className="select_input_container">
                <select className={classes.input_field}>
                  <option>Property Type</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div style={{ width: "100%" }} className="select_input_container">
                <select className={classes.input_field}>
                  <option>Area (Sqt)</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div style={{ width: "100%" }} className="select_input_container">
                <select className={classes.input_field}>
                  <option>Price</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div style={{ width: "100%" }} className="select_input_container">
                <select className={classes.input_field}>
                  <option>Beds</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div style={{ width: "100%" }} className="select_input_container">
                <select className={classes.input_field}>
                  <option>Baths</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div style={{ width: "100%" }} className="select_input_container">
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
                <select className={classes.sort_by_input}>
                  <option>Sort By</option>
                </select>
              </div>

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
            </div>
          </div>
        </div>
      </div>

      <div className={classes.recently_viewed_container}>
        <div className={classes.recently_viewed_content}>
          <div className="heading_container">
            <h2 className="landing_page_heading">Recently Viewed</h2>
            <div className="btn">
              <p>DISCOVER MORE</p>
            </div>
          </div>
          <div className={classes.recently_viewed_container}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
