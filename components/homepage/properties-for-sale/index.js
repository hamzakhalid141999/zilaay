import React from "react";
import classes from "./properties-for-sale.module.css";
import bg from "../../../public/assets/landing-page-assets/listed-property-bg.png";
import Image from "next/image";
import PropertyCard from "../../cards/property-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Next from "../../reactSlickButtons/next";
import Prev from "../../reactSlickButtons/prev";

function PropertiesForSale({ color, title }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1035,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 690,
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
    <div className="listed_properties_container">
      <div className="properties_and_filter_container">
        <div className="cities_container">
          <p style={{ color: color }} className="listed_properties_heading">
            {title}
          </p>
          <div className="cities_btns_container">
            <div className="city_btn">
              <p>Lahore</p>
            </div>
            <div className="city_btn">
              <p>Rawalpindi</p>
            </div>
            <div className="city_btn">
              <p>Islamabad</p>
            </div>
            <div className="city_btn">
              <p>Karachi</p>
            </div>
            <div style={{ marginLeft: "20px" }} className="btn">
              <p>Discover More</p>
            </div>
          </div>
        </div>

        <div className="properties_container">
          <Slider arrows={true} {...settings}>
            <PropertyCard />
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
      <div className="listed_properties_upper_banner">
        <div
          style={{ backgroundColor: color }}
          className="listed_property_overlay"
        />
        <Image src={bg} fill className={classes.bg} />
      </div>
    </div>
  );
}

export default PropertiesForSale;
