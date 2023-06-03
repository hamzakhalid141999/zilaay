import React, { useState, useEffect, useRef } from "react";
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

import { Slider as PriceSlider, InputNumber } from "antd";

function Banner({ setIsDropdown, refInstance }) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [selectedDropDownOption, setSelectedDropDownOption] = useState();
  const [disabled, setdisabled] = useState(false);
  const [minPrice, setMinPrice] = useState(0.0);
  const [maxPrice, setMaxPrice] = useState(0.0);
  const [dropDownOption, setDropDownOption] = useState("residential");

  const [minArea, setMinArea] = useState(0.0);
  const [maxArea, setMaxArea] = useState(0.0);

  const residential_checkboxes = [
    "House",
    "Flat",
    "Lower Portion",
    "Upper Portion",
    "Farmhouse",
    "Pent House",
    "Basement",
    "Hostle",
    "Guest House",
    "Hotel Suites",
    "Beach Huts",
  ];

  const commercial_checkboxes = [
    "Office",
    "Shop",
    "Warehouse",
    "Factory",
    "Building",
    "Others",
  ];

  const plots_checkboxes = [
    "Residential Plots",
    "Commercial Plots",
    "Agricultral Plots",
    "Factory",
    "Building",
    "Others",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
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

  const [isDropDownEnabled, setIsDropDownEnabled] = useState(false);
  const inputRef = useRef(null);
  const div1Ref = useRef(null);

  const handleSelectTab = async (id) => {
    setSelectedTabId(id);
  };

  const cardOverlays = [
    "linear-gradient(41.96deg, #719462 0.92%, rgba(113, 148, 98, 0) 100%)",
    "linear-gradient(41.96deg, #AC68A5 0.92%, rgba(172, 104, 165, 0) 100%)",
    "linear-gradient(41.96deg, #4FA6A6 0.92%, rgba(79, 166, 166, 0) 100%)",
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        div1Ref.current &&
        !div1Ref.current.contains(event.target)
      ) {
        setIsDropDownEnabled(false);
        setIsDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, div1Ref]);

  const handleFocus = () => {
    setIsInputFocused(true);
    setIsDropdownEnabled(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
    setIsDropdownEnabled(false);
  };

  useEffect(() => {
    if (isDropDownEnabled) {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        htmlElement.style.overflow = "hidden";
      }
    } else {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        htmlElement.style.overflow = "auto";
      }
    }
  }, [isDropDownEnabled]);

  function onChange(value) {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    setdisabled(false);
  }

  function onAreaChange(value) {
    setMinArea(value[0]);
    setMaxArea(value[1]);
    setdisabled(false);
  }

  function lowerLimitArea(value) {
    setdisabled(false);
    setMinArea(value);
  }

  function upperLimitArea(value) {
    setdisabled(false);
    setMaxArea(value);
  }

  function lowerLimit(value) {
    setdisabled(false);
    setMinPrice(value);
  }

  function upperLimit(value) {
    setdisabled(false);
    setMaxPrice(value);
  }

  const [minFormattedPrice, setFormattedMinPrice] = useState();
  const [maxFormattedPrice, setFormattedMaxPrice] = useState();

  useEffect(() => {
    if (maxPrice >= 100000) {
      const formattedPrice = numDifferentiation(maxPrice);
      setFormattedMaxPrice(formattedPrice);
    } else {
      setFormattedMaxPrice();
    }

    function numDifferentiation(value) {
      var val = Math.abs(value);
      if (val >= 1000000000) {
        val = (val / 1000000000).toFixed(2) + " Arabs";
      } else if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + " Crores";
      } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + " Lacs";
      }
      return val;
    }
  }, [maxPrice]);

  useEffect(() => {
    if (minPrice >= 100000) {
      const formattedPrice = numDifferentiation(minPrice);
      setFormattedMinPrice(formattedPrice);
    } else {
      setFormattedMinPrice();
    }

    function numDifferentiation(value) {
      var val = Math.abs(value);
      if (val >= 1000000000) {
        val = (val / 1000000000).toFixed(2) + " Arabs";
      } else if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + " Crores";
      } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + " Lacs";
      }
      return val;
    }
  }, [minPrice]);

  console.log(maxFormattedPrice);

  const formatter = (value) => {
    if (value >= 100000) {
      const formattedPrice = numDifferentiation(value);
      return formattedPrice;
    } else {
      return;
    }

    function numDifferentiation(value) {
      var val = Math.abs(value);
      if (val >= 1000000000) {
        val = (val / 1000000000).toFixed(2) + " Arabs";
      } else if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + " Crores";
      } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + " Lacs";
      }
      return val;
    }
  };

  const formatterArea = (value) => {
    console.log(value);
    return `${value} sqft`;
  };

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
                    onClick={() => {
                      setIsDropDownEnabled(true);
                      setIsDropdown(true);
                      setSelectedDropDownOption(undefined);
                      console.log("asdasdasd");
                    }}
                    style={{ width: "75%", cursor: "pointer" }}
                    className="select_input_container"
                  >
                    <div className={classes.hollow_input}>
                      <p> All Residential</p>
                    </div>
                    <img src={drop_down_icon.src} />
                  </div>
                </div>
                <div className={classes.search_input_container}>
                  <input
                    onFocus={() => {
                      setIsDropDownEnabled(true);
                      setIsDropdown(true);
                      setSelectedDropDownOption(undefined);
                    }}
                    ref={inputRef}
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
              <div
                ref={div1Ref}
                className={
                  isDropDownEnabled
                    ? classes.search_panel_dropdown
                    : classes.search_panel_dropdown_hidden
                }
              >
                <div
                  className={classes.search_panel_dropdown_content_container}
                >
                  <div className={classes.drop_down_inner_content_container}>
                    {selectedDropDownOption !== undefined &&
                    selectedDropDownOption === "price" ? (
                      <div className={classes.options_content_container_div}>
                        <p className={classes.submenu_heading}>
                          Select Price Range
                        </p>
                        <p className={classes.price_range_label}>
                          0 - 100+ Crore
                        </p>

                        <div className={classes.slider_container}>
                          <div className={classes.input_field_container}>
                            <InputNumber
                              type="number"
                              className={classes.price_range}
                              min={0}
                              max={5000000000}
                              step={10000}
                              value={disabled ? null : minPrice}
                              onChange={lowerLimit}
                            />
                            <p className={classes.formatter_price}>
                              {minFormattedPrice
                                ? `PKR ${minFormattedPrice}`
                                : `PKR 0`}
                            </p>
                          </div>

                          <PriceSlider
                            className="slider-main-div"
                            min={0}
                            max={5000000000}
                            step={1000000}
                            onChange={onChange}
                            range={true}
                            defaultValue={[minPrice, maxPrice]}
                            value={[minPrice, maxPrice]}
                            tooltip={{
                              formatter,
                            }}
                          />

                          <div className={classes.input_field_container}>
                            <InputNumber
                              type="number"
                              className={classes.price_range}
                              min={0}
                              max={5000000000}
                              step={1000000}
                              value={disabled ? null : maxPrice}
                              onChange={upperLimit}
                            />
                            <p className={classes.formatter_price}>
                              {maxFormattedPrice
                                ? `PKR ${maxFormattedPrice}`
                                : `PKR 0`}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : selectedDropDownOption === "area" ? (
                      <div className={classes.options_content_container_div}>
                        <p className={classes.submenu_heading}>
                          Select Property Area
                        </p>
                        <p className={classes.price_range_label}>
                          0 - 11250 sqft
                        </p>

                        <div className={classes.slider_container}>
                          <div className={classes.input_field_container}>
                            <InputNumber
                              type="number"
                              className={classes.price_range}
                              min={0}
                              max={11250}
                              step={1}
                              value={disabled ? null : minArea}
                              onChange={lowerLimitArea}
                            />
                            <p className={classes.formatter_price}>
                              {minArea ? `${minArea} sqft` : `0 sqft`}
                            </p>
                          </div>

                          <PriceSlider
                            className="slider-main-div"
                            min={0}
                            max={11250}
                            step={1}
                            onChange={onAreaChange}
                            range={true}
                            defaultValue={[minArea, maxArea]}
                            value={[minArea, maxArea]}
                            tooltip={{
                              formatter: formatterArea,
                            }}
                          />

                          <div className={classes.input_field_container}>
                            <InputNumber
                              type="number"
                              className={classes.price_range}
                              min={0}
                              max={11250}
                              step={1}
                              value={disabled ? null : maxArea}
                              onChange={upperLimitArea}
                            />
                            <p className={classes.formatter_price}>
                              {maxArea ? `${maxArea} sqft` : `0 sqft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={classes.types_left_panel}>
                          <div className={classes.drop_down_left_panel}>
                            <div
                              className={classes.drop_down_left_panel_content}
                            >
                              <p
                                className={
                                  dropDownOption === "residential"
                                    ? classes.drop_down_option_selected
                                    : classes.drop_down_option
                                }
                                onClick={() => {
                                  setDropDownOption("residential");
                                }}
                              >
                                Residential
                              </p>
                              <p
                                className={
                                  dropDownOption === "commercial"
                                    ? classes.drop_down_option_selected
                                    : classes.drop_down_option
                                }
                                onClick={() => {
                                  setDropDownOption("commercial");
                                }}
                              >
                                Commercial
                              </p>
                              <p
                                className={
                                  dropDownOption === "plots"
                                    ? classes.drop_down_option_selected
                                    : classes.drop_down_option
                                }
                                onClick={() => {
                                  setDropDownOption("plots");
                                }}
                              >
                                Plots
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={classes.checkboxes_right_panel}>
                          <div className={classes.checkbox_container}>
                            {dropDownOption === "residential"
                              ? residential_checkboxes?.map(
                                  (single_checkbox, index) => (
                                    <div
                                      key={index}
                                      className={
                                        classes.single_checkbox_container
                                      }
                                    >
                                      <input type={"checkbox"} />
                                      <p>{single_checkbox}</p>
                                    </div>
                                  )
                                )
                              : dropDownOption === "commercial"
                              ? commercial_checkboxes?.map(
                                  (single_checkbox, index) => (
                                    <div
                                      key={index}
                                      className={
                                        classes.single_checkbox_container
                                      }
                                    >
                                      <input type={"checkbox"} />
                                      <p>{single_checkbox}</p>
                                    </div>
                                  )
                                )
                              : plots_checkboxes?.map((single_checkbox, index) => (
                                  <div
                                    key={index}
                                    className={
                                      classes.single_checkbox_container
                                    }
                                  >
                                    <input type={"checkbox"} />
                                    <p>{single_checkbox}</p>
                                  </div>
                                ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className={classes.choices_panel}>
                    <div className={classes.drop_down_btns}>
                      <div
                        onClick={() => {
                          setSelectedDropDownOption("price");
                        }}
                        className={
                          selectedDropDownOption === "price"
                            ? classes.drop_down_btn_selected
                            : classes.drop_down_btn
                        }
                      >
                        <p>Price</p>
                      </div>
                      <div
                        onClick={() => {
                          setSelectedDropDownOption("area");
                        }}
                        className={
                          selectedDropDownOption === "area"
                            ? classes.drop_down_btn_selected
                            : classes.drop_down_btn
                        }
                      >
                        <p>Area</p>
                      </div>
                      <div
                        onClick={() => {
                          setSelectedDropDownOption("beds");
                        }}
                        className={
                          selectedDropDownOption === "beds"
                            ? classes.drop_down_btn_selected
                            : classes.drop_down_btn
                        }
                      >
                        <p>Beds</p>
                      </div>
                      <div
                        onClick={() => {
                          setSelectedDropDownOption("baths");
                        }}
                        className={
                          selectedDropDownOption === "baths"
                            ? classes.drop_down_btn_selected
                            : classes.drop_down_btn
                        }
                      >
                        <p>Baths</p>
                      </div>
                      <div
                        onClick={() => {
                          setSelectedDropDownOption("more_options");
                        }}
                        className={
                          selectedDropDownOption === "more_options"
                            ? classes.drop_down_btn_selected
                            : classes.drop_down_btn
                        }
                      >
                        <p>More Options</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.filter_panel_container}>
                <div
                  style={{ opacity: isDropDownEnabled && "0" }}
                  className={classes.angled_div}
                />
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
