import React from "react";
import MapSectionCard from "../../cards/map-section-card";
import PropertyCard from "../../cards/property-card";
import classes from "./map.module.css";

function Map() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main_container}>
        <div className={classes.map_container}>
          <div className={classes.filter_bar_container}>
            <div className={classes.filter_bar}>
              <input
                placeholder="Address, neighborhood, or ZIP"
                style={{ width: "19%" }}
                className={classes.input_field}
              />

              <input placeholder="Buy" className={classes.input_field} />

              <input
                placeholder="Property Type"
                className={classes.input_field}
              />

              <input placeholder="Area (Sqt)" className={classes.input_field} />

              <input placeholder="Price" className={classes.input_field} />

              <input placeholder="Beds" className={classes.input_field} />

              <input placeholder="Bath" className={classes.input_field} />

              <input
                placeholder="More Options"
                className={classes.input_field}
              />
            </div>

            <div className="btn">
              <p>SAVE SEARCH</p>
            </div>
          </div>

          <div className={classes.map_property_section}>
            <div className={classes.map_section}>
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
            <div className={classes.properties_section_container}>
              <div className={classes.property_title_bar}>
                <h2>Karachi, Defence DHA Houses for Sale</h2>
              </div>

              <div className={classes.properties_section}>
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.recently_viewed_container}>
        <div className={classes.recently_viewed_content}>
          <div className="heading_container">
            <h2 className="landing_page_heading">Recently Viewed</h2>
            <div className="btn">
              <p>DISCOVER MORE</p>
            </div>
          </div>
          <div className={classes.recently_viewed_container}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
