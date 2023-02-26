import React from "react";
import classes from "./banner.module.css";
import banner_image from "../../../public/assets/landing-page-assets/banner-image.png";
import time_icon from "../../../public/assets/landing-page-assets/time_icon.svg";
import grey_pattern from "../../../public/assets/landing-page-assets/grey-pattern.png";
import feature_cards_bg from "../../../public/assets/landing-page-assets/feature_cards_bg.png";
import profile_placeholder from "../../../public/assets/landing-page-assets/profile_placeholder.svg";
import blue_pattern from "../../../public/assets/landing-page-assets/blue-pattern.png";

function Banner() {
  return (
    <div className={classes.container}>
      <div className={classes.top_panel}>
        <img src={blue_pattern.src} className={classes.pattern_bg} />

        <img src={banner_image.src} />
        <div className={classes.banner_content_container}>
          <h2>Maps Par Ao, Baichtay Jao!</h2>
          <p>Phasellus consectetur, ligula a lacinia mollis.</p>
          <div className={classes.discover_more_btn}>
            <p>Discover</p>
          </div>
        </div>
        <div className={classes.search_bar_container}></div>
      </div>
      <div className={classes.bottom_panel}>
        <img src={grey_pattern.src} className={classes.pattern_bg} />
        <div className={classes.recent_searches_container}>
          <p>Recent Searches</p>

          <div className={classes.recent_search_tag}>
            <img src={time_icon.src} />
            <p>Property Type, Purpose, Area(sqft), Location, Price</p>
          </div>

          <div className={classes.recent_search_tag}>
            <img src={time_icon.src} />
            <p>House on Sale 500sqyrd gulshan-e-iqbal 2-3cr</p>
          </div>

          <div className={classes.recent_search_tag}>
            <img src={time_icon.src} />
            <p>View all searches</p>
          </div>
        </div>
      </div>

      <div className={classes.features_container}>
        <div className={classes.card_body}>
          <img src={feature_cards_bg.src} />
          <div className={classes.overlay}>
            <p>Find Properties To Buy Near me!</p>
            <div className={classes.card_btn}>
              <p>Explore More</p>
            </div>
          </div>
        </div>
        <div className={classes.card_body}>
          <img src={feature_cards_bg.src} />
          <div className={classes.overlay}>
            <p>Find Properties To Buy Near me!</p>
            <div className={classes.card_btn}>
              <p>Explore More</p>
            </div>
          </div>
        </div>
        <div className={classes.card_body}>
          <img src={feature_cards_bg.src} />
          <div className={classes.overlay}>
            <p>Find Properties To Buy Near me!</p>
            <div className={classes.card_btn}>
              <p>Explore More</p>
            </div>
          </div>
        </div>

        <div className={classes.my_activity_container}>
          <div className={classes.activity_container_left}>
            <h2>My Activity</h2>
            <div className={classes.activity_tab}>
              <p>Recently Searched</p>
            </div>
            <div className={classes.activity_tab}>
              <p>Shortlisted</p>
            </div>
          </div>
          <div className={classes.activity_container_right}>
            <img src={profile_placeholder.src} />
          </div>
        </div>
      </div>
      <div className={classes.ad_container}>
        <div className={classes.ad_placehodler}>
          <h3>728 x 90 AD HERE</h3>
        </div>
      </div>
    </div>
  );
}

export default Banner;
