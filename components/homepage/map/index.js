import React from "react";
import MapSectionCard from "../../cards/map-section-card";
import PropertyCard from "../../cards/property-card";
import classes from "./map.module.css";
import drop_down_icon from "../../../public/assets/icons/drop_down.svg";
import Link from "next/link";

import near_me_pin from "../../../public/assets/icons/near_me_pin.svg";
import search_icon from "../../../public/assets/icons/search_icon.svg";

import grey_drop_down from "../../../public/assets/icons/grey_drop_down.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Next from "../../reactSlickButtons/next";
import Prev from "../../reactSlickButtons/prev";

import erase from "../../../public/assets/icons/erase.svg";
import draw from "../../../public/assets/icons/draw.svg";

import pin_red from "../../../public/assets/icons/pin_red.svg";
import pin_blue from "../../../public/assets/icons/pin_blue.svg";

import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";

function Map({ refInstance }) {
  const mapApiKey = process.env.NEXT_PUBLIC_MAP_API;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapApiKey ? mapApiKey : "",
  });

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 30.3753,
    lng: 69.3451,
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1266,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 945,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
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
        <div ref={refInstance} className={classes.map_container}>
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
              <div className={classes.map_btn_container}>
                <div className={classes.btn}>
                  <img src={erase.src} />
                  <p>Erase</p>
                </div>

                <div className={classes.btn}>
                  <img src={draw.src} />
                  <p>Draw</p>
                </div>
              </div>
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={5}
                >
                  <MarkerF
                    icon={pin_red.src}
                    position={{ lat: 30.3753, lng: 69.3451 }}
                  />
                  <MarkerF
                    icon={pin_blue.src}
                    position={{ lat: 31.3753, lng: 71.5451 }}
                  />
                </GoogleMap>
              ) : (
                <></>
              )}
            </div>
            <div className={classes.properties_section_container}>
              <div className={classes.property_title_bar}>
                <h2>Karachi, Defence DHA Houses for Sale</h2>
                <div className="select_input_container">
                  <select className={classes.sort_by_input}>
                    <option>Sort By</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Popular</option>
                    <option>Lowest Price</option>
                    <option>Highest Price</option>
                  </select>
                  <img
                    style={{ opacity: 0.5, width: "14px" }}
                    src={grey_drop_down.src}
                  />
                </div>
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
          <div className={classes.recently_viewed_card_container}>
            <Slider arrows={true} {...settings}>
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
