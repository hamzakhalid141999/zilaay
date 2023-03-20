import React from "react";
import HotProjectCard from "../../cards/hot-project-card";
import classes from "./all-agencies.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Next from "../../reactSlickButtons/next";
import Prev from "../../reactSlickButtons/prev";
import FeaturedDeveloper from "../../cards/featured-developer-card";

function AllAgencies() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1113,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 923,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 743,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 559,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 378,
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
    <div
      style={{
        height: "85vh",
      }}
      className="landing_page_colored_container"
    >
      <div
        style={{
          background:
            "linear-gradient(#025bff9f -77.02%,rgba(2, 91, 255, 0) 94.6%)",
        }}
        className="colored_container"
      >
        <div className={classes.content_container}>
          <div className="heading_container">
            <p className="landing_page_heading">All Agencies</p>
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
              <div className={classes.cards_col}>
                <FeaturedDeveloper />
                <FeaturedDeveloper />
                <FeaturedDeveloper />
              </div>
              <div className={classes.cards_col}>
                <FeaturedDeveloper />
                <FeaturedDeveloper />
                <FeaturedDeveloper />
              </div>
              <div className={classes.cards_col}>
                <FeaturedDeveloper />
                <FeaturedDeveloper />
                <FeaturedDeveloper />
              </div>
              <div className={classes.cards_col}>
                <FeaturedDeveloper />
                <FeaturedDeveloper />
                <FeaturedDeveloper />
              </div>
              <div className={classes.cards_col}>
                <FeaturedDeveloper />
                <FeaturedDeveloper />
                <FeaturedDeveloper />
              </div>
              <div className={classes.cards_col}>
                <FeaturedDeveloper />
                <FeaturedDeveloper />
                <FeaturedDeveloper />
              </div>
              <div className={classes.cards_col}>
                <FeaturedDeveloper />
                <FeaturedDeveloper />
                <FeaturedDeveloper />
              </div>
              <div className={classes.cards_col}>
                <FeaturedDeveloper />
                <FeaturedDeveloper />
                <FeaturedDeveloper />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllAgencies;
