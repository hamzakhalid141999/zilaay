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
          {/* Blogs, News, Forum, Real Estate Agents, Add property  */}
          <div className={classes.col}>
            <h2>Company</h2>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Advertise with Zilaay.com</p>
            <p>Jobs at Zilaay.com</p>
          </div>

          <div className={classes.col}>
            <h2>Connect</h2>
            <p>Blogs</p>
            <p>News</p>
            <p>Forums</p>
            <p>Real Estate Agents</p>
            <p>Add property</p>
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
