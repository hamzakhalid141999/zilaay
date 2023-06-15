import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../../public/assets/navbar-assets/zilaay-logo.svg";
import down_icon from "../../public/assets/navbar-assets/down-icon.svg";
import home_icon from "../../public/assets/navbar-assets/home.svg";
import search_icon from "../../public/assets/navbar-assets/search.svg";
import search_icon_white from "../../public/assets/navbar-assets/search_white.svg";
import user_icon from "../../public/assets/navbar-assets/user.svg";
import logo_white from "../../public/assets/navbar-assets/logo_white.svg";
import setting_white from "../../public/assets/navbar-assets/setting.svg";
import bell_white from "../../public/assets/navbar-assets/bell.svg";
import setting_blue from "../../public/assets/navbar-assets/setting_blue.svg";
import bell_blue from "../../public/assets/navbar-assets/bell_blue.svg";
import { useWindowSize } from "../../utils";
import search_white from "../../public/assets/icons/search_white.svg";
import near_pin_blue from "../../public/assets/icons/near_pin_blue.svg";

function Navbar({ showNavbar, isTransparent }) {
  const { width } = useWindowSize();
  const router = useRouter();
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [buySelectedOption, setBuySelectionOption] = useState("residential");
  const [rentSelectedOption, setRentSelectionOption] = useState("residential");
  const [sharedSpacesOption, setSharedSpacesOption] = useState("co-living");

  const [investSelectedOption, setInvestSelectionOption] =
    useState("residential");

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    if (router.pathname) {
      const page = router.pathname.split("/");
      setCurrentPage(page[1]);
    }
  }, [router.pathname]);

  let listener;

  console.log(showNavbar);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document !== null) {
        let scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 10) {
          if (backgroundColor !== "opaque") {
            setBackgroundColor("opaque");
          }
        }
        if (scrolled < 10) {
          if (backgroundColor !== "transparent") {
            setBackgroundColor("transparent");
          }
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [backgroundColor]);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div
      style={{
        opacity: showNavbar || backgroundColor === "transparent" ? "1" : "0",
        backgroundColor:
          isTransparent && backgroundColor === "transparent" && "transparent",
      }}
      className={
        isNavbarVisisbleFromTop
          ? classes.navbar_body_opaque
          : backgroundColor === "opaque"
          ? classes.navbar_body_opaque
          : classes.navbar_body
      }
    >
      <div className={classes.left_panel}>
        {!showNavbar ? (
          <>
            <div className={classes.left_panel_btns}>
              <div className={classes.btns_drop_down_wrapper}>
                <div className={classes.btns_drop_down}>
                  <div className={classes.drop_down_left_panel}>
                    <div className={classes.drop_down_left_panel_content}>
                      <p
                        onClick={() => {
                          setBuySelectionOption("residential");
                        }}
                        className={
                          buySelectedOption === "residential"
                            ? classes.option_selected
                            : classes.option
                        }
                      >
                        Residential
                      </p>
                      <p
                        onClick={() => {
                          setBuySelectionOption("commercial");
                        }}
                        className={
                          buySelectedOption === "commercial"
                            ? classes.option_selected
                            : classes.option
                        }
                      >
                        Commercial
                      </p>
                      <p
                        onClick={() => {
                          setBuySelectionOption("plot");
                        }}
                        className={
                          buySelectedOption === "plot"
                            ? classes.option_selected
                            : classes.option
                        }
                      >
                        Plots
                      </p>
                    </div>
                  </div>
                  <div className={classes.drop_down_right_panel}>
                    <div className={classes.drop_down_right_panel_content}>
                      {buySelectedOption === "residential" ? (
                        <>
                          <div className={classes.right_panel_col}>
                            <p>House</p>
                            <p>Flat</p>
                            <p>Lower Portion</p>
                            <p>Upper Portion</p>
                            <p>Pent House</p>
                            <p>Basement</p>
                          </div>

                          <div className={classes.right_panel_col}>
                            <p>Farmhouse</p>
                            <p>Hostel</p>
                            <p>Guest House</p>
                            <p>Hotel Suit</p>
                            <p>Beach Hut</p>
                          </div>
                        </>
                      ) : buySelectedOption === "commercial" ? (
                        <>
                          <div className={classes.right_panel_col}>
                            <p>Office</p>
                            <p>Shop</p>
                            <p>Warehouse</p>
                            <p>Factory</p>
                            <p>Building</p>
                            <p>Others</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={classes.right_panel_col}>
                            <p>Residential Plots</p>
                            <p>Commercial Plots</p>
                            <p>Agricultral Plots</p>
                            <p>Factory</p>
                            <p>Building</p>
                            <p>Others</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p
                onClick={() => {
                  router.push("/buy");
                }}
                className={classes.left_panel_btn}
              >
                Buy
              </p>
            </div>

            <div className={classes.left_panel_btns}>
              <div className={classes.btns_drop_down_wrapper}>
                <div className={classes.btns_drop_down}>
                  <div className={classes.drop_down_left_panel}>
                    <div className={classes.drop_down_left_panel_content}>
                      <p
                        onClick={() => {
                          setRentSelectionOption("residential");
                        }}
                        className={
                          rentSelectedOption === "residential"
                            ? classes.option_selected
                            : classes.option
                        }
                      >
                        Residential
                      </p>
                      <p
                        onClick={() => {
                          setRentSelectionOption("commercial");
                        }}
                        className={
                          rentSelectedOption === "commercial"
                            ? classes.option_selected
                            : classes.option
                        }
                      >
                        Commercial
                      </p>
                      <p
                        onClick={() => {
                          setRentSelectionOption("plot");
                        }}
                        className={
                          rentSelectedOption === "plot"
                            ? classes.option_selected
                            : classes.option
                        }
                      >
                        Plots
                      </p>
                    </div>
                  </div>
                  <div className={classes.drop_down_right_panel}>
                    <div className={classes.drop_down_right_panel_content}>
                      {rentSelectedOption === "residential" ? (
                        <>
                          <div className={classes.right_panel_col}>
                            <p>House</p>
                            <p>Flat</p>
                            <p>Lower Portion</p>
                            <p>Upper Portion</p>
                            <p>Pent House</p>
                            <p>Basement</p>
                          </div>

                          <div className={classes.right_panel_col}>
                            <p>Farmhouse</p>
                            <p>Hostel</p>
                            <p>Guest House</p>
                            <p>Hotel Suit</p>
                            <p>Beach Hut</p>
                          </div>
                        </>
                      ) : rentSelectedOption === "commercial" ? (
                        <>
                          <div className={classes.right_panel_col}>
                            <p>Office</p>
                            <p>Shop</p>
                            <p>Warehouse</p>
                            <p>Factory</p>
                            <p>Building</p>
                            <p>Others</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={classes.right_panel_col}>
                            <p>Residential Plots</p>
                            <p>Commercial Plots</p>
                            <p>Agricultral Plots</p>
                            <p>Factory</p>
                            <p>Building</p>
                            <p>Others</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p className={classes.left_panel_btn}>Rent</p>
            </div>

            <div className={classes.left_panel_btns}>
              <div className={classes.btns_drop_down_wrapper}>
                <div className={classes.btns_drop_down}>
                  <div className={classes.drop_down_left_panel}>
                    <div className={classes.drop_down_left_panel_content}>
                      <p
                        onClick={() => {
                          setSharedSpacesOption("co-living");
                        }}
                        className={
                          sharedSpacesOption === "co-living"
                            ? classes.option_selected
                            : classes.option
                        }
                      >
                        Shared PG/Co-living
                      </p>
                      <p
                        onClick={() => {
                          setSharedSpacesOption("co-working");
                        }}
                        className={
                          sharedSpacesOption === "co-working"
                            ? classes.option_selected
                            : classes.option
                        }
                      >
                        Co-Working
                      </p>
                    </div>
                  </div>
                  <div className={classes.drop_down_right_panel}>
                    <div
                      style={{ gridTemplateColumns: '1fr' }}
                      className={classes.drop_down_right_panel_content}
                    >
                      {sharedSpacesOption === "co-living" ? (
                        <>
                          <div className={classes.right_panel_col}>
                            <p>Co-Working Spaces in Karachi</p>
                            <p>Co-Working Spaces in Lahore</p>
                            <p>Co-Working Spaces in Islamabad</p>
                            <p>Co-Working Spaces in Rawalpindi</p>
                            <p>Co-Working Spaces in Peshawar</p>
                            <p>Co-Working Spaces in Multan</p>
                          </div>
                        </>
                      ) : (
                        sharedSpacesOption === "co-working" && (
                          <>
                            <div className={classes.right_panel_col}>
                              <p>Share a House</p>
                              <p>Share a Flat</p>
                              <p>Share a Hostle</p>
                            </div>
                          </>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p>Shared Spaces</p>
            </div>

            {width > 1370 ? (
              <>
                <div className={classes.left_panel_btns}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "15px",
                      paddingRight: "30px",
                      borderRadius: "10px",
                    }}
                    className={classes.btns_drop_down_wrapper}
                  >
                    <div className={classes.drop_down_left_panel_content}>
                      <p className={classes.option}>Islamabad</p>
                      <p className={classes.option}>Lahore</p>
                      <p className={classes.option}>Karachi</p>
                      <p className={classes.option}>Rawalpindi</p>
                      <p className={classes.option}>Faislabad</p>
                      <p className={classes.option}>Multan</p>
                    </div>
                  </div>
                  <p className={classes.left_panel_btn}>Invest</p>
                </div>

                <div className={classes.left_panel_btns}>
                  <p>Wanted</p>
                </div>

                <div className={classes.left_panel_btns}>
                  <p>Agent Finder</p>
                </div>
              </>
            ) : (
              <div className={classes.left_panel_btns}>
                {/* <div className={classes.drop_down_arrow} /> */}
                <div className={classes.drop_down}>
                  <div className={classes.single_tab}>
                    <p>Shared Spaces</p>
                  </div>
                  <div className={classes.single_tab}>
                    {" "}
                    <p>Wanted</p>
                  </div>
                  <div className={classes.single_tab}>
                    {" "}
                    <p>Agent Finder</p>
                  </div>
                </div>
                <p>More</p>
              </div>
            )}
          </>
        ) : (
          <img
            onClick={() => {
              router.push("/");
            }}
            style={{ marginLeft: "40px" }}
            src={logo_white.src}
          />
        )}
      </div>

      {!showNavbar ? (
        <img
          onClick={() => {
            router.push("/");
          }}
          src={logo_white.src}
        />
      ) : (
        <div className={classes.navbaar_search_bar}>
          <div
            className={
              isInputFocused
                ? classes.search_panel
                : classes.search_panel_hidden
            }
          >
            <div className={classes.search_panel_container}>
              <div className={classes.checkbox_container}>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>House</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Pent House</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Guest House</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Flat</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Basement</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Hotel Suit</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Lower Portion</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Farmhouse</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Beach Hut</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Upper Portion</p>
                </div>
                <div className={classes.single_checkbox_container}>
                  <input type={"checkbox"} />
                  <p>Hostle</p>
                </div>
              </div>

              <p className={classes.filters_btn}>
                Filters <span> Clear all filters</span>
              </p>

              <div className={classes.search_panel_divider}></div>

              <div className={classes.drop_down_btns}>
                <select className={classes.drop_down_btn}>
                  <option>Price</option>
                </select>
                <select className={classes.drop_down_btn}>
                  <option>Area</option>
                </select>
                <select className={classes.drop_down_btn}>
                  <option>Beds</option>
                </select>
                <select className={classes.drop_down_btn}>
                  <option>Baths</option>
                </select>
                <select className={classes.drop_down_btn}>
                  <option>More Options</option>
                </select>
              </div>
            </div>
          </div>

          <div className={classes.search_btn_1}>
            <p>Buy</p>
            <div className={classes.search_menu_wrapper}>
              <div className={classes.login_drop_down}>
                <div className={classes.login_single_tab}>
                  <p className={classes.login_label_menu}>Buy</p>
                </div>
                <div className={classes.login_single_tab}>
                  {" "}
                  <p className={classes.drop_down_label}>Rebt</p>
                </div>
                <div className={classes.login_single_tab}>
                  {" "}
                  <p className={classes.drop_down_sub_label}>Co-Living</p>
                </div>
                <div className={classes.login_single_tab}>
                  {" "}
                  <p className={classes.drop_down_sub_label}>Co-Working</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.search_btn_1}>
            <p>All Residential</p>
            <div className={classes.search_menu_wrapper}>
              <div className={classes.login_drop_down}>
                <div className={classes.login_single_tab}>
                  <p className={classes.login_label_menu}>All Residential</p>
                </div>
                <div className={classes.login_single_tab}>
                  <p className={classes.drop_down_label}>Commercial</p>
                </div>
                <div className={classes.login_single_tab}>
                  <p className={classes.drop_down_sub_label}>Plots</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.search_input_container}>
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={classes.hollow_input}
              type="text"
              placeholder="Enter Locality / Project / Society / Landmark"
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
      )}

      <div className={classes.right_panel}>
        {!showNavbar && currentPage !== "login" && (
          <div className={classes.input_with_icon}>
            <input
              placeholder="Property ID"
              className={classes.property_id_search}
            />
            <img
              src={
                backgroundColor === "opaque"
                  ? search_icon.src
                  : search_icon_white.src
              }
            />
          </div>
        )}

        {currentPage !== "login" && (
          <div className={classes.add_property_btn}>
            <div className={classes.free_tag}>
              <p>Free</p>
            </div>
            <img src={home_icon.src} />
            <p>Add Property</p>
          </div>
        )}

        {!showNavbar && (
          <div className={classes.icons_container}>
            {currentPage !== "login" && (
              <img className={classes.icon} src={bell_white.src} />
            )}

            <img className={classes.icon} src={setting_white.src} />
          </div>
        )}

        {currentPage !== "login" && (
          <div
            style={{
              backgroundColor: "white",
            }}
            className={classes.login_btn}
          >
            <img src={user_icon.src} />
            <p className={classes.login_label}>Login</p>

            <div className={classes.login_drop_down_wrapper}>
              <div className={classes.login_drop_down}>
                <div
                  onClick={() => {
                    router.push("/login");
                  }}
                  className={classes.login_single_tab}
                >
                  <p className={classes.login_label_menu}>Login/Register</p>
                </div>
                <div className={classes.login_single_tab}>
                  {" "}
                  <p className={classes.drop_down_label}>My Zilaay Chats</p>
                </div>
                <div className={classes.login_single_tab}>
                  {" "}
                  <p className={classes.drop_down_label}>My Activity</p>
                </div>
                <div className={classes.login_single_tab}>
                  {" "}
                  <p className={classes.drop_down_sub_label}>
                    Recently Searched
                  </p>
                </div>
                <div className={classes.login_single_tab}>
                  {" "}
                  <p className={classes.drop_down_sub_label}>Recently Viewed</p>
                </div>
                <div className={classes.login_single_tab}>
                  {" "}
                  <p className={classes.drop_down_sub_label}>Shortlisted</p>
                </div>
                <div className={classes.login_single_tab}>
                  {" "}
                  <p className={classes.drop_down_sub_label}>Contacted</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!showNavbar ? (
          <p style={{ fontSize: "24px", marginBottom: "12px" }}>اردو</p>
        ) : (
          <p>More</p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
