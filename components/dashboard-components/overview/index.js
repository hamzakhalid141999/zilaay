import React, { useEffect, useRef } from "react";
import classes from "./overview.module.css";
import Chart from "chart.js/auto";
import Leads from "../../../public/assets/icons/leads";
import PropertyViewIcon from "../../../public/assets/icons/propertyViewIcon";
import ProfileViews from "../../../public/assets/icons/ProfileViews";
import ZilaayChat from "../../../public/assets/icons/ZilaayChat";
import WhatsappIcon from "../../../public/assets/icons/WhatsappIcon";
import EmailIcon from "../../../public/assets/icons/EmailIcon";
import MapSectionCard from "../../../components/cards/map-section-card/index";
import buy_section_bg from "../../../public/assets/overview/buy_section_bg.png";
import SmallTickIcon from "../../../public/assets/icons/SmallTickIcon";
import upgrade_section_bg from "../../../public/assets/overview/upgrade_section_bg.png";
import three_dot from "../../../public/assets/dashboard/three_dot.svg";

const LineGraph = () => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (myChart) {
      myChart.destroy();
    }
    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sample Data",
            data: [10, 50, 15, 25, 18, 30],
            borderColor: "blue",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, []);

  return <canvas style={{ maxHeight: "350px", width: '100%' }} ref={chartRef} />;
};

const PieChart = ({ width, height }) => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (myChart) {
      myChart.destroy();
    }
    myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Buy", "Rent", "Invest"],
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: ["#413D58", "#F3B61F", "#FE5D26"],
          },
        ],
      },
    });
  }, []);

  return (
    <canvas sty style={{ maxHeight: height, maxWidth: width }} ref={chartRef} />
  );
};

function Overview() {
  return (
    <div className={classes.container}>
      <div className={classes.overlay} />
      <div className={classes.content_container}>
        <div className={classes.top_analytics_container}>
          <div className={classes.total_listings_container}>
            <div className={classes.total_listings_left}>
              <p>Total Number of Listing 12</p>
            </div>
            <PieChart width="210px" height="210px" />
          </div>
          <div className={classes.analytic_tab_container}>
            <div
              style={{
                background: "linear-gradient(135deg, #F1AA3E 0%, #B27D2A 100%)",
              }}
              className={classes.analytic_tab}
            >
              <div className={classes.tab_content}>
                <div className={classes.tab_content_left}>
                  <h3>388</h3>
                  <p>Leads</p>
                </div>
                <div className={classes.tab_content_right}>
                  <Leads />
                </div>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #7662C9, #4C3A9A)",
              }}
              className={classes.analytic_tab}
            >
              <div className={classes.tab_content}>
                <div className={classes.tab_content_left}>
                  <h3>875k</h3>
                  <p>Property Views</p>
                </div>
                <div className={classes.tab_content_right}>
                  <PropertyViewIcon />
                </div>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #D96C54, #843928)",
              }}
              className={classes.analytic_tab}
            >
              <div className={classes.tab_content}>
                <div className={classes.tab_content_left}>
                  <h3>104k</h3>
                  <p>Profile Views</p>
                </div>
                <div className={classes.tab_content_right}>
                  <ProfileViews />
                </div>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #025BFF, #0040B6)",
              }}
              className={classes.analytic_tab}
            >
              <div className={classes.tab_content}>
                <div className={classes.tab_content_left}>
                  <h3>500</h3>
                  <p>ZilaayChat</p>
                </div>
                <div className={classes.tab_content_right}>
                  <ZilaayChat />
                </div>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #25D366, #0A8638)",
              }}
              className={classes.analytic_tab}
            >
              <div className={classes.tab_content}>
                <div className={classes.tab_content_left}>
                  <h3>300</h3>
                  <p>WhatsApp</p>
                </div>
                <div className={classes.tab_content_right}>
                  <WhatsappIcon />
                </div>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #F4B400, #BE941C)",
              }}
              className={classes.analytic_tab}
            >
              <div className={classes.tab_content}>
                <div className={classes.tab_content_left}>
                  <h3>25.5k</h3>
                  <p>Emails</p>
                </div>
                <div className={classes.tab_content_right}>
                  <EmailIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.divider} />

        <div className={classes.second_row_container}>
          <div className={classes.section_container}>
            <p>Analytics</p>
            <div className={classes.line_chart_content_container}>
              <LineGraph />
            </div>
          </div>
          <div className={classes.hot_ad_container}>
            <h3>Hot Ads</h3>
            <div className={classes.hot_property_container}>
              <MapSectionCard />
            </div>
          </div>
        </div>

        <div className={classes.divider} />

        <div className={classes.third_row_container}>
          <div className={classes.section_container}>
            <p>Quota and Credits</p>
            <div className={classes.quota_and_credits_container}>
              <div className={classes.quota_and_credits_content_container}>
                <div className={classes.quota_and_credits_tab_container}>
                  <p className={classes.active}>Listing Quota (0)</p>
                  <p className={classes.disabled}>Refresh Property (0)</p>
                  <p className={classes.disabled}>Hot Listing (0)</p>
                  <p className={classes.disabled}>Story Ad (0)</p>
                  <p className={classes.disabled}>. . .</p>
                </div>
                <div className={classes.tab_underline} />
              </div>
            </div>
          </div>
          <div className={classes.section_container}>
            <h3 style={{ opacity: 0 }}>no heading</h3>
            <div className={classes.buy_now_container}>
              <img src={buy_section_bg.src} />
              <div className={classes.buy_now_content_container}>
                <h2>Looking to Sell or Rent Your Property?</h2>
                <h3>Post now on Zilaay.com to reach millions of users!</h3>

                <div className={classes.buy_now_single_row}>
                  <SmallTickIcon />
                  <p>Get Better Price</p>
                </div>

                <div className={classes.buy_now_single_row}>
                  <SmallTickIcon />
                  <p>Connect With Real Buyers</p>
                </div>

              <div>
              <div className={classes.buy_now_single_row}>
                  <SmallTickIcon />
                  <p>Realtime Stats</p>
                </div>

                <div className={classes.black_btn}>
                  <h4>BUY NOW</h4>
                </div>
              </div>
            
              </div>
            </div>
          </div>
        </div>

        <div className={classes.divider} />

        <div className={classes.property_row_container}>
          <div className={classes.property_banner}>
            <div className={classes.property_banner_left}>
              <p>Properties for Sale</p>
            </div>
            <div className={classes.property_banner_right}></div>
          </div>
          <div className={classes.properties_contaienr}>
            <MapSectionCard />
            <MapSectionCard />
            <MapSectionCard />
            <MapSectionCard />
          </div>
        </div>

        <div className={classes.divider} />

        <div className={classes.property_row_container}>
          <div className={classes.property_banner}>
            <div className={classes.property_banner_left}>
              <p>Properties for Rent</p>
            </div>
            <div className={classes.property_banner_right}></div>
          </div>
          <div className={classes.properties_contaienr}>
            <MapSectionCard />
            <MapSectionCard />
            <MapSectionCard />
            <MapSectionCard />
          </div>
        </div>

        <div className={classes.divider} />

        <div className={classes.property_row_container}>
          <div className={classes.property_banner}>
            <div className={classes.property_banner_left}>
              <p>Shared Living</p>
            </div>
            <div className={classes.property_banner_right}></div>
          </div>
          <div className={classes.properties_contaienr}>
            <MapSectionCard />
            <MapSectionCard />
            <MapSectionCard />
            <MapSectionCard />
          </div>
        </div>

        <div className={classes.divider} />

        <div className={classes.fourth_row_container}>
          <div className={classes.section_container}>
            <p>Upgrade/Downgrade</p>
            <div className={classes.upgrade_container}>
              <img src={upgrade_section_bg.src} />
              <div className={classes.buy_now_content_container}>
                <div className={classes.headings_content}>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                  <h3>
                    Donec tortor sapien, aliquam eget egestas at, molestie ut
                    libero.
                  </h3>
                </div>

              <div>
              <div className={classes.black_btn}>
                  <h4>Upgrade My Account</h4>
                </div>
                <div className={classes.white_btn}>
                  <h4>Upgrade My Listings</h4>
                </div>
              </div>
                
              </div>
            </div>
          </div>

          <div className={classes.section_container}>
            <p>Inbox</p>
            <div className={classes.inbox_container}>
              <div className={classes.inbox_content_container}>
                <div className={classes.single_inbox_selected}>
                  <div className={classes.inbox_content}>
                    <img src={three_dot.src} className={classes.three_dot} />
                    <div className={classes.single_inbox_profile_picture}></div>
                    <div className={classes.single_inbox_profile_name_section}>
                      <div>
                        <h3 className={classes.single_inbox_name}>Mike</h3>
                        <p className={classes.single_inbox_name_title}>Agent</p>
                      </div>
                      <p className={classes.single_inbox_message}>
                        Type message here..
                      </p>
                    </div>
                  </div>
                </div>

                <div className={classes.single_inbox}>
                  <div className={classes.inbox_content}>
                    <img src={three_dot.src} className={classes.three_dot} />
                    <div className={classes.single_inbox_profile_picture}></div>
                    <div className={classes.single_inbox_profile_name_section}>
                      <div>
                        <h3 className={classes.single_inbox_name}>Mike</h3>
                        <p className={classes.single_inbox_name_title}>Agent</p>
                      </div>
                      <p className={classes.single_inbox_message}>
                        Type message here..
                      </p>
                    </div>
                  </div>
                </div>

                <div className={classes.single_inbox}>
                  <div className={classes.inbox_content}>
                    <img src={three_dot.src} className={classes.three_dot} />
                    <div className={classes.single_inbox_profile_picture}></div>
                    <div className={classes.single_inbox_profile_name_section}>
                      <div>
                        <h3 className={classes.single_inbox_name}>Mike</h3>
                        <p className={classes.single_inbox_name_title}>Agent</p>
                      </div>
                      <p className={classes.single_inbox_message}>
                        Type message here..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.divider} />

        <div className={classes.property_row_container}>
          <div className={classes.property_banner}>
            <div className={classes.property_banner_left}>
              <p>Wishlist / Saved Ads</p>
            </div>
            <div className={classes.property_banner_right}></div>
          </div>
          <div className={classes.properties_contaienr}>
            <MapSectionCard />
            <MapSectionCard />
            <MapSectionCard />
            <MapSectionCard />
          </div>
        </div>

        <div className={classes.divider} />

      </div>
    </div>
  );
}

export default Overview;
