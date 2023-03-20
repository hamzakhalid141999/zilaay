import React from "react";
import HotProjectCard from "../../cards/hot-project-card";
import classes from "./hot-projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Next from "../../reactSlickButtons/next";
import Prev from "../../reactSlickButtons/prev";

function HotProjects() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // centerMode: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1177,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="landing_page_colored_container">
      <div
        style={{
          background:
            "linear-gradient(#025bff9f -77.02%,rgba(2, 91, 255, 0) 94.6%)",
        }}
        className="colored_container_with_shimmer"
      >
        <div className={classes.shimmer} />
        <div className={classes.content_container}>
          <div className="heading_container_filled">
            <p
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                color: "#0060fd",
              }}
              className="landing_page_heading"
            >
              Hot Projects To Invest
            </p>
            <div
              style={{
                marginRight: "10px",
              }}
              className="btn"
            >
              <p>DISCOVER MORE</p>
            </div>
          </div>

          <div className={classes.cards_container}>
            <Slider arrows={true} {...settings}>
              <HotProjectCard />
              <HotProjectCard />
              <HotProjectCard />
              <HotProjectCard />
              <HotProjectCard />
              <HotProjectCard />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotProjects;
