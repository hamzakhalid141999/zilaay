import React from "react";
import DeveloperCard from "../../cards/developer-card";
import HotProjectCard from "../../cards/hot-project-card";
import classes from "./elite-developers.module.css";

function EliteDevelopers() {
  return (
    <div style={{ height: "60vh" }} className="landing_page_colored_container">
      <div
        style={{
          background:
            "linear-gradient(#bba249b8 -77.02%, rgba(187, 162, 73, 0) 94.6%)",
        }}
        className="colored_container"
      >
        <div className={classes.content_container}>
          <div className="heading_container">
            <p className="landing_page_heading">Elite Builders & Developers</p>
            <div className="btn">
              <p>DISCOVER MORE</p>
            </div>
          </div>

          <div className={classes.cards_container}>
            <DeveloperCard />
            <DeveloperCard />
            <DeveloperCard />
            <DeveloperCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EliteDevelopers;
