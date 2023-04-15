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

function Navbar({ showNavbar, isTransparent }) {
  const { width } = useWindowSize();
  const router = useRouter();
  const [openPanel, setOpenPanel] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [panelType, setPanelType] = useState("left");
  const [panelSize, setPanelSize] = useState(60);
  const [noBackdrop, setNoBackdrop] = useState(false);

  let listener;

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
        <>
          <div
            onClick={() => {
              router.push("/buy");
            }}
            className={classes.left_panel_btns}
          >
            <div className={classes.btns_drop_down_wrapper}>
              <div className={classes.btns_drop_down}>
                <div className={classes.drop_down_left_panel}>
                  <div className={classes.drop_down_left_panel_content}>
                    <p>Residential</p>
                    <p>Commercial</p>
                    <p>Plots</p>
                  </div>
                </div>
                <div className={classes.drop_down_right_panel}>
                  <div className={classes.drop_down_right_panel_content}>
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
                  </div>
                </div>
              </div>
            </div>
            <p className={classes.left_panel_btn}>Buy</p>
          </div>

          <div className={classes.left_panel_btns}>
            <div className={classes.btns_drop_down_wrapper}>
              <div className={classes.btns_drop_down}>
                <div className={classes.drop_down_left_panel}>
                  <div className={classes.drop_down_left_panel_content}>
                    <p>Residential</p>
                    <p>Commercial</p>
                    <p>Plots</p>
                  </div>
                </div>
                <div className={classes.drop_down_right_panel}>
                  <div className={classes.drop_down_right_panel_content}>
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
                  </div>
                </div>
              </div>
            </div>
            <p className={classes.left_panel_btn}>Rent</p>

            <div className={classes.btns_drop_down_wrapper}>
              <div className={classes.btns_drop_down}>
                <div className={classes.drop_down_left_panel}>
                  <div className={classes.drop_down_left_panel_content}>
                    <p>Residential</p>
                    <p>Commercial</p>
                    <p>Plots</p>
                  </div>
                </div>
                <div className={classes.drop_down_right_panel}>
                  <div className={classes.drop_down_right_panel_content}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.left_panel_btns}>
            <div className={classes.btns_drop_down_wrapper}>
              <div className={classes.btns_drop_down}>
                <div className={classes.drop_down_left_panel}>
                  <div className={classes.drop_down_left_panel_content}>
                    <p>Residential</p>
                    <p>Commercial</p>
                    <p>Plots</p>
                  </div>
                </div>
                <div className={classes.drop_down_right_panel}>
                  <div className={classes.drop_down_right_panel_content}>
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
                  </div>
                </div>
              </div>
            </div>
            <p className={classes.left_panel_btn}>Invest</p>
          </div>

          {width > 1370 ? (
            <>
              <div className={classes.left_panel_btns}>
                <p>Shared Spaces</p>
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
      </div>

      <img
        onClick={() => {
          router.push("/");
        }}
        src={backgroundColor === "opaque" ? logo.src : logo_white.src}
      />

      <div className={classes.right_panel}>
        {/* <p>More</p> */}

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

        <div className={classes.add_property_btn}>
          <div className={classes.free_tag}>
            <p>Free</p>
          </div>
          <img src={home_icon.src} />
          <p>Add Property</p>
        </div>

        <div className={classes.icons_container}>
          <img
            className={classes.icon}
            src={backgroundColor === "opaque" ? bell_blue.src : bell_white.src}
          />

          <img
            className={classes.icon}
            src={
              backgroundColor === "opaque"
                ? setting_blue.src
                : setting_white.src
            }
          />
        </div>

        <div
          style={{
            backgroundColor: backgroundColor === "opaque" ? "#0060fd" : "white",
          }}
          className={classes.login_btn}
        >
          <img src={user_icon.src} />
          <p className={classes.login_label}>Login</p>

          <div className={classes.login_drop_down_wrapper}>
            <div className={classes.login_drop_down}>
              <div className={classes.login_single_tab}>
                <p className={classes.login_label_menu}>Login/Register</p>
              </div>
              <div className={classes.login_single_tab}>
                {" "}
                <p className={classes.drop_down_label}>My Activity</p>
              </div>
              <div className={classes.login_single_tab}>
                {" "}
                <p className={classes.drop_down_sub_label}>Recently Searched</p>
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
              <div className={classes.login_single_tab}>
                {" "}
                <p className={classes.drop_down_sub_label}>My Zilaay Chats</p>
              </div>
            </div>
          </div>
        </div>

        <p>اردو</p>
      </div>
    </div>
  );
}

export default Navbar;
