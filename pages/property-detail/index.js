import React, { useRef, useEffect } from "react";
import TrendingLinks from "../../components/trending-links";
import ListedProperties from "../../components/homepage/properties-for-sale";
import PropertyDetailContent from "../../components/property-detail/components/index";
import classes from "./property-detail.module.css";

function PropertyDetail() {
  const stickyDivRef = useRef(null);
  const otherDivRef = useRef(null);

  useEffect(() => {
    const stickyDiv = stickyDivRef.current;
    const otherDiv = otherDivRef.current;
    const otherDivTop = otherDiv.offsetTop - stickyDiv.offsetHeight;

    const handleScroll = () => {
      if (window.pageYOffset >= otherDivTop) {
        stickyDiv.style.position = "absolute";
        stickyDiv.style.top = `${otherDivTop}px`;
      } else {
        stickyDiv.style.position = "sticky";
        stickyDiv.style.top = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.container}>
      <PropertyDetailContent stickyDivRef={stickyDivRef} />
      <ListedProperties
        otherDivRef={otherDivRef}
        hideBtnContainer={true}
        textColor={"#0549c7"}
        color={"#fff8d0a3"}
        title={"Similar Properties"}
      />
      <ListedProperties
        hideBtnContainer={true}
        color={"#0061fdb8"}
        title={"Properties Recommended By Zilaay"}
      />
      <TrendingLinks />
    </div>
  );
}

export default PropertyDetail;
