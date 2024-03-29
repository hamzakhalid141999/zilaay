import React from "react";
import DeveloperCard from "../../cards/developer-card";
import HotProjectCard from "../../cards/hot-project-card";
import classes from "./elite-developers.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Next from "../../reactSlickButtons/next";
import Prev from "../../reactSlickButtons/prev";

function EliteDevelopers() {
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
  };

  return (
    <div style={{ height: "60vh" }} className="landing_page_colored_container">
      <div
        style={{
          background:
            "linear-gradient(#bba249b8 -77.02%, rgba(187, 162, 73, 0) 94.6%)",
        }}
        className="colored_container"
      >
        <div className={classes.content_container}>
          <div className="heading_container">
            <p className="landing_page_heading">Elite Builders & Developers</p>
            <div className="btn">
              <p>DISCOVER MORE</p>
            </div>
          </div>

          <div className={classes.cards_container}>
            <Slider arrows={true} {...settings}>
              <DeveloperCard />
              <DeveloperCard />
              <DeveloperCard />
              <DeveloperCard />
              <DeveloperCard />
              <DeveloperCard />
              <DeveloperCard />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EliteDevelopers;
