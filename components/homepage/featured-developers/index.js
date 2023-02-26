import React from "react";
import DeveloperCard from "../../cards/developer-card";
import FeaturedDeveloper from "../../cards/featured-developer-card";
import classes from "./featured-developers.module.css";

function FeaturedDevelopers() {
  return (
    <div style={{ height: "40vh" }} className="landing_page_colored_container">
      <div
        style={{
          background:
            "linear-gradient(#fc816590 -77.02%,rgba(252, 129, 101, 0) 94.6%)",
        }}
        className="colored_container"
      >
        <div className={classes.content_container}>
          <div className="heading_container">
            <p className="landing_page_heading">
              Featured Builders & Developers
            </p>
            <div className="btn">
              <p>DISCOVER MORE</p>
            </div>
          </div>

          <div className={classes.cards_container}>
            <FeaturedDeveloper />
            <FeaturedDeveloper />
            <FeaturedDeveloper />
            <FeaturedDeveloper />
            <FeaturedDeveloper />
            <FeaturedDeveloper />
            <FeaturedDeveloper />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedDevelopers;
