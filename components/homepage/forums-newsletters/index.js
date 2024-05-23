import React from "react";
import ForumCard from "../../cards/forum-card";
import classes from "./forums-newsletters.module.css";
import register_panel_bg from "../../../public/assets/landing-page-assets/register-panel-bg.png";
import video_bg from "../../../public/assets/landing-page-assets/video-bg.png";
import pause from "../../../public/assets/landing-page-assets/pause.svg";
import newsletter_bg from "../../../public/assets/landing-page-assets/newsletter_bg.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Next from "../../reactSlickButtons/next";
import Prev from "../../reactSlickButtons/prev";

function ForumsAndNewsletters() {
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
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.forums_container}>
          <div className="heading_container">
            <p className="landing_page_heading">Forums</p>
            <div className="btn">
              <p>View All</p>
            </div>
          </div>
          <div className={classes.cards_container}>
            <Slider arrows={true} {...settings}>
              <ForumCard />
              <ForumCard />
              <ForumCard />
              <ForumCard />
              <ForumCard />
              <ForumCard />
              <ForumCard />
              <ForumCard />
            </Slider>
          </div>
        </div>

        <div className={classes.newsletter_section}>
          <div className={classes.zilaay_video_panel}>
            <img className={classes.video_bg} src={video_bg.src} />
            <div className={classes.video_content}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/u31qwQUeGuM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className={classes.newsletter_panel}>
            <div className={classes.newsletter_content}>
              <p className={classes.newsletter_title}>Newsletter</p>
              <p className={classes.newsletter_description}>
                Subscribe to our newsleter and stay updated with Zilaay.com.
              </p>
              <input placeholder="Enter your email" />
              <div
                style={{ width: "88%", borderRadius: "100px" }}
                className="btn"
              >
                <p>Subscribe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumsAndNewsletters;
