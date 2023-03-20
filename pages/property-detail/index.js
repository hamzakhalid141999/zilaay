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
        color={"#0061fdb8"}
        title={"Properties Near DHA Phase 7"}
      />
      <TrendingLinks />
    </div>
  );
}

export default PropertyDetail;
