import React, { useState } from "react";
import classes from "./trending-links.module.css";
import trending_link_arrow from "../../public/assets/component-assets/trending-links-assets/trending-link-arrow.svg";

function TrendingLinks() {
  const tabs = [
    {
      id: 1,
      title: "For Sale",
    },
    {
      id: 2,
      title: "Rent",
    },
    {
      id: 3,
      title: "Commercial",
    },
    {
      id: 4,
      title: "Shared Spaces",
    },
    {
      id: 5,
      title: "Investment Projects",
    },
    {
      id: 6,
      title: "Lands/Plots",
    },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0]?.id);

  const handleSelectTab = async (id) => {
    setSelectedTabId(id);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.tabs_container}>
          {tabs?.map((tab, index) => (
            <p
              onClick={() => {
                handleSelectTab(tab?.id);
              }}
              className={
                selectedTabId === tab?.id
                  ? classes.single_tab_selected
                  : classes.single_tab
              }
              key={index}
            >
              {tab?.title}
            </p>
          ))}
        </div>

        <div className={classes.links_container}>
          <div className={classes.col}>
            <h2>Popular Searches</h2>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>
          </div>

          <div className={classes.col}>
            <h2>Popular Areas</h2>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>
          </div>

          <div className={classes.col}>
            <h2>Trending Areas</h2>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>
          </div>

          <div className={classes.col}>
            <h2>Popular Searches</h2>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>

            <div className={classes.single_link}>
              <img src={trending_link_arrow.src} />
              <p>Plots for sale in Raiwind Road (3,799)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingLinks;
