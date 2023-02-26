import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../../public/assets/navbar-assets/zilaay-logo.svg";
import down_icon from "../../public/assets/navbar-assets/down-icon.svg";
import home_icon from "../../public/assets/navbar-assets/home.svg";
import search_icon from "../../public/assets/navbar-assets/search.svg";
import user_icon from "../../public/assets/navbar-assets/user.svg";

function Navbar() {
  const router = useRouter();
  //   const { width } = useWindowSize();
  const [openPanel, setOpenPanel] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [panelType, setPanelType] = useState("left");
  const [panelSize, setPanelSize] = useState(60);
  const [noBackdrop, setNoBackdrop] = useState(false);

  //   useEffect(() => {
  //     document.addEventListener("scroll", () => {
  //       if (document !== null) {
  //         let scrolled = document.scrollingElement.scrollTop;

  //         if (scrolled >= 10) {
  //           if (backgroundColor !== "opaque") {
  //             setBackgroundColor("opaque");
  //           }
  //         } else {
  //           if (backgroundColor !== "transparent") {
  //             setBackgroundColor("transparent");
  //           }
  //         }
  //       }
  //     });
  //     return () => {
  //       document.removeEventListener("scroll", listener);
  //     };
  //   }, [backgroundColor]);

  return (
    <div className={classes.navbar_body_opaque}>
      <div className={classes.left_panel}>
        <>
          <div className={classes.left_panel_btns}>
            <p>Buy</p>
          </div>

          <div className={classes.left_panel_btns}>
            <p>Rent</p>
          </div>

          <div className={classes.left_panel_btns}>
            <p>Shared Spaces</p>
          </div>

          <div className={classes.left_panel_btns}>
            <p>Invest</p>
          </div>

          <div className={classes.left_panel_btns}>
            <p>Wanted</p>
          </div>

          <div className={classes.left_panel_btns}>
            <p>Agent Finder</p>
          </div>
        </>
      </div>

      <img src={logo.src} />

      <div className={classes.right_panel}>
        <p>More</p>

        <p>Property ID</p>
        <div className={classes.add_property_btn}>
          <img src={home_icon.src} />
          <p>Add Free Property</p>
        </div>

        <div className={classes.login_btn}>
          <img src={user_icon.src} />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
