import React from "react";
import HotProjectCard from "../../cards/hot-project-card";
import classes from "./hot-projects.module.css";

function HotProjects() {
  return (
    <div className="landing_page_colored_container">
      <div
        style={{
          background:
            "linear-gradient(#025bff9f -77.02%,rgba(2, 91, 255, 0) 94.6%)",
        }}
        className="colored_container"
      >
        <div className={classes.content_container}>
          <div className="heading_container">
            <p className="landing_page_heading">Hot Projects To Invest</p>
            <div className="btn">
              <p>DISCOVER MORE</p>
            </div>
          </div>

          <div className={classes.cards_container}>
            <HotProjectCard />
            <HotProjectCard />
            <HotProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotProjects;
