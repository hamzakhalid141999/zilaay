import React from "react";
import classes from "./properties-for-sale.module.css";
import bg from "../../../public/assets/landing-page-assets/listed-property-bg.png";
import Image from "next/image";
import PropertyCard from "../../cards/property-card";

function PropertiesForSale({ color, title }) {
  return (
    <div className="listed_properties_container">
      <div className="properties_and_filter_container">
        <div className="cities_container">
          <p style={{ color: color }} className="listed_properties_heading">
            {title}
          </p>
          <div className="cities_btns_container">
            <div className="btn">
              <p>Discover More</p>
            </div>
          </div>
        </div>

        <div className="properties_container">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
      <div className="listed_properties_upper_banner">
        <div
          style={{ backgroundColor: color }}
          className="listed_property_overlay"
        />
        <Image src={bg} fill className={classes.bg} />
      </div>
    </div>
  );
}

export default PropertiesForSale;
