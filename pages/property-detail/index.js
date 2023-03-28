import React from "react";
import TrendingLinks from "../../components/trending-links";
import ListedProperties from "../../components/homepage/properties-for-sale";
import PropertyDetailContent from "../../components/property-detail/components/index";
import classes from "./property-detail.module.css";

function PropertyDetail() {
  return (
    <div className={classes.container}>
      <PropertyDetailContent />
      <ListedProperties
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
