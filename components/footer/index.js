import React from "react";
import classes from "./footer.module.css";
import bg from "../../public/assets/component-assets/footer-assets/bg.png";
import Image from "next/image";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.picture_container}>
        <Image className={classes.bg} src={bg} />
      </div>
      <div className={classes.footer_body}>
        <div className={classes.footer_content}>
          <div className={classes.col}>
            <h2>Company</h2>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Jobs</p>
            <p>Help and Support</p>
            <p>Advertise on Zilaay</p>
            <p>Terms of Use</p>
          </div>

          <div className={classes.col}>
            <h2>Contact Us</h2>
            <p>Blogs</p>
            <p>News</p>
            <p>Forums</p>
            <p>Expo</p>
            <p>Real Estate Agents</p>
            <p>Add Agents</p>
          </div>

          <div className={classes.col}>
            <h2>Cities</h2>
            <p>Karachi</p>
            <p>Islamabad</p>
            <p>Lahore</p>
            <p>Quetta</p>
            <p>Sialkot</p>
            <p>Faislabad</p>
          </div>

          <div className={classes.col}>
            <h2>Get Connected</h2>
            <p>Karachi</p>
            <p>Islamabad</p>
            <p>Lahore</p>
            <p>Quetta</p>
            <p>Sialkot</p>
            <p>Faislabad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
