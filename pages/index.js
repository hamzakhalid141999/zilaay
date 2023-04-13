import Head from "next/head";
import React, { useState, useEffect } from "react";
import AllAgencies from "../components/homepage/all-agencies";
import Banner from "../components/homepage/banner";
import Blogs from "../components/homepage/blogs";
import EliteAgencies from "../components/homepage/elite-agencies";
import EliteDevelopers from "../components/homepage/elite-developers";
import FeaturedDevelopers from "../components/homepage/featured-developers";
import ForumsAndNewsletters from "../components/homepage/forums-newsletters";
import HotProjects from "../components/homepage/hot-projects";
import Map from "../components/homepage/map";
import ListedProperties from "../components/homepage/properties-for-sale";
import TrendingLinks from "../components/trending-links";
import styles from "../styles/Home.module.css";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/navbar";
import back_top from "../public/assets/icons/back_top.svg";
import chat_bot from "../public/assets/icons/chat_bot.svg";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const { ref: microBuyRef, inView: microBuyInView } = useInView({
    threshold: 0,
  });
  const { ref: bannerRef, inView: bannerInView } = useInView({
    threshold: 0,
  });
  const [showNavbar, setShowNavbar] = useState();

  useEffect(() => {
    if (microBuyInView === false && bannerInView === false) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [microBuyInView, bannerInView]);

  let listener;

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document !== null) {
        let scrolled = document.scrollingElement.scrollTop;

        console.log(scrolled);
        if (scrolled >= 800) {
          setShowScrollToTop(true);
        } else if (scrolled < 800) {
          setShowScrollToTop(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className={styles.container}>
      <img
        style={{
          right: showScrollToTop ? "2%" : "-5%",
          pointerEvents: showScrollToTop ? "all" : "none",
        }}
        onClick={() => {
          if (showScrollToTop) {
            handleClick();
          }
        }}
        src={back_top.src}
        className={styles.top_icon}
      />

      <div className={styles.chat_icon}>
        <div className={styles.contact_form_container}>
          <div
            className={
              showContactForm ? styles.contact_form : styles.contact_form_hidden
            }
          >
            <div className={styles.contact_form_content}>
              <h2>Contact Us</h2>
              <p className={styles.form_text}>
                Use the form below to contact us
              </p>
              <input placeholder="Your Name" className={styles.input_field} />
              <input placeholder="Your Email" className={styles.input_field} />
              <input placeholder="Your Phone" className={styles.input_field} />
              <input placeholder="Your Name" className={styles.input_field} />
              <textarea
                placeholder="Type your message"
                className={styles.input_field_textarea}
              />
              <div className={styles.btn_filled}>
                <p>Send</p>
              </div>
            </div>
          </div>
        </div>
        <img
          onClick={() => {
            handleOpenContactForm();
          }}
          src={chat_bot.src}
        />
      </div>

      <Head>
        <title>Zilaay | Pakistan's One-Stop Real Estate Marketplace</title>
      </Head>
      <Navbar showNavbar={showNavbar} isTransparent={true} />

      <Banner refInstance={bannerRef} />

      <Map refInstance={microBuyRef} />
      <div className={styles.ad_container}>
        <div className={styles.ad_placehodler}>
          <h1>928 x 250 AD HERE</h1>
          <h2>Premium Billboard Ad Goes Here</h2>
        </div>
      </div>
      <HotProjects />
      <EliteDevelopers />
      <FeaturedDevelopers />
      <div className={styles.ad_container}>
        <div className={styles.ad_placehodler}>
          <h1>928 x 250 AD HERE</h1>
          <h2>Premium Billboard Ad Goes Here</h2>
        </div>
      </div>
      <EliteAgencies />
      <AllAgencies />
      <ListedProperties title={"Properties For Sale"} color={"#aa4ff1"} />
      <ListedProperties
        title={"Properties For Rent"}
        color={"rgba(98, 157, 96, 1)"}
      />
      <ListedProperties
        title={"Properties For Sharing"}
        color={"rgba(100, 160, 231, 1"}
      />
      <Blogs />
      <ForumsAndNewsletters />
      <TrendingLinks />
    </div>
  );
}
