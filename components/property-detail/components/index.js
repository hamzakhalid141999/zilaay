import React from "react";
import classes from "./property-detail.module.css";
import PropertyImages from "./property-images";
import star_filled from "../../../public/assets/property-detail-assets/star_filled.svg";
import star_empty from "../../../public/assets/property-detail-assets/star_empty.svg";
import hot_tag from "../../../public/assets/tags/hot-ribbon.svg";

function PropertyDetailContent() {
  return (
    <div className={classes.container}>
      <PropertyImages />
      <div className={classes.content_container}>
        <div className={classes.stats_panel}>
          <div className={classes.btns_container}>
            <div className="btn_rounded">
              <p>Overview</p>
            </div>

            <div className="btn_rounded_white">
              <p style={{ color: "black" }}>Location & Nearby</p>
            </div>
          </div>

          <div className={classes.btns_container_right}>
            <p className={classes.stat}>
              24 <span>Photos</span>
            </p>
            <p className={classes.stat}>
              2 <span>Virtual Tours</span>
            </p>{" "}
            <p className={classes.stat}>
              4 <span>Videos</span>
            </p>
          </div>
        </div>
        <div className={classes.details_container}>
          <div className={classes.left_panel}>
            <div className={classes.section}>
              <div className={classes.initial_info_container}>
                <h3>New Horizons</h3>
                <p>3619 Kings Gate Dr, Memphis, TN 38116</p>
                <p>Whitehaven</p>

                <div className={classes.single_row_details}>
                  <div className={classes.stars_container}>
                    <img src={star_filled.src} />
                    <img src={star_filled.src} />
                    <img src={star_filled.src} />
                    <img src={star_filled.src} />
                    <img src={star_empty.src} />
                  </div>
                  <p className={classes.rating}>
                    3.9 <span>(28 Reviews)</span>
                  </p>
                  <div className={classes.single_row}>
                    <img src={hot_tag.src} />
                    <p>Verified Listing</p>
                  </div>
                </div>
              </div>

              <div className={classes.overview_details_container}>
                <div className={classes.heading_container}>
                  <h3>Overview</h3>
                </div>
                <p>Details</p>
                <div className={classes.overview_details_table}>
                  <div className={classes.table_half}>
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>{" "}
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>
                  </div>

                  <div className={classes.table_half}>
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>{" "}
                    <div className={classes.single_tab}>
                      <p>Type</p>
                      <p>Adasd</p>
                    </div>
                  </div>
                  <div className={classes.table_half}></div>
                </div>
              </div>
            </div>
            <div className={classes.divider} />

            <div className={classes.section}>
              <h2 className={classes.section_heading}>Description</h2>
              <p className={classes.para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                viverra nibh commodo, commodo libero eu, condimentum quam. Nam
                id pulvinar lorem. Curabitur pellentesque felis bibendum arcu
                vehicula hendrerit. Etiam efficitur mauris viverra, interdum
                lectus ac, convallis massa. Mauris congue ipsum non metus
                sollicitudin, at imperdiet dolor cursus. Sed tempor, nunc non
                facilisis aliquet, odio erat tempor lacus, nec commodo leo est
                vel purus. Etiam enim ligula, laoreet ut arcu ut, tristique
                facilisis mauris. Sed nulla justo, fermentum a justo et,
                ultrices auctor ex. Nullam malesuada justo ut nunc posuere
                consectetur.
              </p>
            </div>
            <div className={classes.divider} />
          </div>
          <div className={classes.right_panel}></div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailContent;
