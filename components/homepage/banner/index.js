import React, { useState } from "react";
import classes from "./banner.module.css";
import banner_image from "../../../public/assets/landing-page-assets/banner-image.png";
import time_icon from "../../../public/assets/landing-page-assets/time_icon.svg";
import grey_pattern from "../../../public/assets/landing-page-assets/grey-pattern.png";
import feature_cards_bg from "../../../public/assets/landing-page-assets/feature_cards_bg.png";
import profile_placeholder from "../../../public/assets/landing-page-assets/profile_placeholder.svg";
import blue_pattern from "../../../public/assets/landing-page-assets/blue-pattern.png";
import drop_down_icon from "../../../public/assets/icons/drop_down.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Next from "../../reactSlickButtons/next";
import Prev from "../../reactSlickButtons/prev";
import Navbar from "../../navbar";

import search_white from "../../../public/assets/icons/search_white.svg";
import near_pin_blue from "../../../public/assets/icons/near_pin_blue.svg";

function Banner({ refInstance }) {
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
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };

  const tabs = [
    {
      id: 1,
      title: "Buy",
    },
    {
      id: 2,
      title: "Rent",
    },
    {
      id: 3,
      title: "PG / Shared Living",
    },
    {
      id: 4,
      title: "Co-Working",
    },
    {
      id: 5,
      title: "Invest",
    },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0]?.id);

  const handleSelectTab = async (id) => {
    setSelectedTabId(id);
  };

  const cardOverlays = [
    "linear-gradient(41.96deg, #719462 0.92%, rgba(113, 148, 98, 0) 100%)",
    "linear-gradient(41.96deg, #AC68A5 0.92%, rgba(172, 104, 165, 0) 100%)",
    "linear-gradient(41.96deg, #4FA6A6 0.92%, rgba(79, 166, 166, 0) 100%)",
  ];

  return (
    <>
      <div ref={refInstance} className={classes.container}>
        <div className={classes.top_panel}>
          <img src={blue_pattern.src} className={classes.pattern_bg} />

          <img className={classes.banner_img} src={banner_image.src} />
          <div className={classes.banner_content_container}>
            <h2>Maps Par Ao, Baichtay Jao!</h2>
            <p>Pakistan's One-Stop Real Estate Marketplace</p>
            <div className={classes.discover_more_btn}>
              <p>Discover</p>
            </div>
          </div>
          <div className={classes.search_bar_wrapper}>
            <div className={classes.search_bar_container}>
              <div className={classes.btns_container}>
                <div className={classes.tabs_container}>
                  {tabs?.map((tab, index) => (
                    <p
                      onClick={() => {
                        handleSelectTab(tab?.id);
                      }}
                      className={
                        selectedTabId === tab?.id
                          ? classes.single_tab_selected
                          : classes.single_tab
                      }
                      key={index}
                    >
                      {tab?.title}
                    </p>
                  ))}
                </div>
              </div>

              <div className={classes.lower_panel}>
                <div className={classes.drop_down_container}>
                  <div
                    style={{ width: "75%" }}
                    className="select_input_container"
                  >
                    <select className={classes.hollow_input}>
                      <option> All Residential</option>
                    </select>
                    <img src={drop_down_icon.src} />
                  </div>
                </div>
                <div className={classes.search_input_container}>
                  <input
                    className={classes.hollow_input}
                    type="text"
                    placeholder="Search 3 BHK for sale, rent or invest in pakistan..."
                  />
                  <div className={classes.search_btns_container}>
                    <div className={classes.near_me_btn}>
                      <img src={near_pin_blue.src} />
                      <p>Near Me</p>
                    </div>
                    <div className={classes.search_btn}>
                      <img src={search_white.src} />
                      <p>Search</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.filter_panel_container}>
                <div className={classes.angled_div} />
                <div className={classes.filter_panel}>
                  <div className={classes.filter_btn_container}>
                    <div
                      style={{ width: "25%" }}
                      className="select_input_container"
                    >
                      <select className={classes.hollow_input}>
                        <option>More Options</option>
                      </select>
                      <img src={drop_down_icon.src} />
                    </div>

                    <div className={classes.right_panel}>
                      <p>Change Currency</p>
                      <p style={{ color: "black" }}>|</p>
                      <p>Change Area Unit</p>
                      <p style={{ color: "black" }}>|</p>
                      <p>Reset Search</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className={classes.cards_container}>
            <Slider arrows={true} {...settings}>
              <div className={classes.card_body}>
                <img src={feature_cards_bg.src} />
                <div
                  style={{ backgroundImage: cardOverlays[0] }}
                  className={classes.overlay}
                >
                  <p>Find Properties To Buy Near me!</p>
                  <div className={classes.card_btn}>
                    <p>Explore More</p>
                  </div>
                </div>
              </div>
              <div className={classes.card_body}>
                <img src={feature_cards_bg.src} />
                <div
                  style={{ backgroundImage: cardOverlays[1] }}
                  className={classes.overlay}
                >
                  <p>Find Properties To Buy Near me!</p>
                  <div className={classes.card_btn}>
                    <p>Explore More</p>
                  </div>
                </div>
              </div>
              <div className={classes.card_body}>
                <img src={feature_cards_bg.src} />
                <div
                  style={{ backgroundImage: cardOverlays[2] }}
                  className={classes.overlay}
                >
                  <p>Find Properties To Buy Near me!</p>
                  <div className={classes.card_btn}>
                    <p>Explore More</p>
                  </div>
                </div>
              </div>
              <div className={classes.card_body}>
                <img src={feature_cards_bg.src} />
                <div
                  style={{ backgroundImage: cardOverlays[0] }}
                  className={classes.overlay}
                >
                  <p>Find Properties To Buy Near me!</p>
                  <div className={classes.card_btn}>
                    <p>Explore More</p>
                  </div>
                </div>
              </div>
              <div className={classes.card_body}>
                <img src={feature_cards_bg.src} />
                <div
                  style={{ backgroundImage: cardOverlays[1] }}
                  className={classes.overlay}
                >
                  <p>Find Properties To Buy Near me!</p>
                  <div className={classes.card_btn}>
                    <p>Explore More</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className={classes.my_activity_container}>
            <div className={classes.activity_container_left}>
              <h2>My Activity</h2>
              <div className={classes.activity_tab}>
                <p>Recently Searched</p>
                <div className={classes.recent_number}>
                  <p>4</p>
                </div>
              </div>
              <div className={classes.activity_tab}>
                <p>Shortlisted</p>
                <div className={classes.shortlisted_number}>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className={classes.activity_container_right}>
              <img src={profile_placeholder.src} />
              <div className={classes.login_btn}>
                <p>Login/Register to save activity</p>
              </div>
              <p className={classes.activity_text}>
                & see your activities across browsers and devices
              </p>
            </div>
          </div>
        </div>
        <div className={classes.ad_container}>
          <div className={classes.ad_placehodler}>
            <h3>728 x 90 AD HERE</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
