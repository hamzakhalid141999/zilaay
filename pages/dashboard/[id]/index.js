import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classes from "./dashboard.module.css";
import bg_pattern from "../../../public/assets/dashboard/bg-pattern.png";
import account_settings from "../../../public/assets/dashboard/account-settings.svg";
import add_property from "../../../public/assets/dashboard/add-property.svg";
import my_activity from "../../../public/assets/dashboard/my-activity.svg";
import my_listing from "../../../public/assets/dashboard/my-listings.svg";
import my_orders from "../../../public/assets/dashboard/my-orders.svg";
import overview from "../../../public/assets/dashboard/overview.svg";
import zilaay_chats from "../../../public/assets/dashboard/zilaay-chats.svg";

import account_settings_blue from "../../../public/assets/dashboard/account_settings_blue.svg";
import add_property_blue from "../../../public/assets/dashboard/add_property_blue.svg";
import my_activity_blue from "../../../public/assets/dashboard/my_activity_blue.svg";
import my_listings_blue from "../../../public/assets/dashboard/my_listings_blue.svg";
import my_orders_blue from "../../../public/assets/dashboard/my_orders_blue.svg";
import overview_blue from "../../../public/assets/dashboard/overview_blue.svg";
import zilaay_chats_blue from "../../../public/assets/dashboard/zilaay_chats_blue.svg";
import Inbox from "../../../components/dashboard-components/inbox/inbox";
import delete_icon from "../../../public/assets/dashboard/delete.svg";
import zilaay_logo from "../../../public/assets/dashboard/zilaay_logo.svg";
import search_icon_white from "../../../public/assets/navbar-assets/search_white.svg";
import AddProperty from "../../../components/dashboard-components/add-property";
import Overview from "../../../components/dashboard-components/overview";
import Link from "next/link";

function Dashboard() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    if (router?.query?.id) {
      setCurrentPage(router?.query?.id);
    }
  }, [router?.query]);

  console.log("Current page: ", currentPage);

  const menu_list = [
    {
      id: 1,
      name: "Overview",
      src: overview.src,
      src_2: my_listings_blue.src,
      link: "overview",
    },
    {
      id: 2,
      name: "Add Property",
      src: add_property.src,
      src_2: add_property_blue.src,
      link: "add-property",
    },
    {
      id: 3,
      name: "My Listing",
      src: my_listing.src,
      src_2: overview_blue.src,
      link: "my-listing",
    },
    {
      id: 4,
      name: "My Activity",
      src: my_activity.src,
      src_2: my_activity_blue.src,
      link: "my-activity",
    },
    {
      id: 5,
      name: "My Orders",
      src: my_orders.src,
      src_2: my_orders_blue.src,
      link: "my-orders",
    },
    {
      id: 6,
      name: "Zilaay Chats",
      src: zilaay_chats.src,
      src_2: zilaay_chats_blue.src,
      link: "zilaay-chats",
    },
    {
      id: 7,
      name: "Account Settings",
      src: account_settings.src,
      src_2: account_settings_blue.src,
      link: "account-settings",
    },
  ];

  const [selectedMenuOption, setSelectedMenuOption] = useState(1);

  return (
    <div className={classes.dashboard_container}>
      <div className={classes.navbar}>
        <div className={classes.left_panel}>
          <img src={zilaay_logo.src} />
        </div>
        <div className={classes.right_panel}>
          <div className={classes.btn_with_icon}>
            <img src={add_property.src} />
            <p>Add Property</p>
          </div>

          <div className={classes.btn_with_icon}>
            <img src={my_listing.src} />
            <p>My Listings</p>
          </div>

          <div className={classes.input_with_icon}>
            <input
              placeholder="Search by ID"
              className={classes.property_id_search}
            />
            <img src={search_icon_white.src} />
          </div>
        </div>
      </div>

      <div className={classes.lower_half_container}>
        <div className={classes.menu_container}>
          <div className={classes.btns_container}>
            {menu_list?.map((menu, index) => (
              <Link
                href={`/dashboard/${menu?.link}`}
                style={{
                  borderBottom:
                    menu_list?.length - 1 === index && "1px solid transparent",
                }}
                key={index}
                onClick={() => {
                  setSelectedMenuOption(menu.id);
                  router.push(`/dashboard/${menu?.link}`);
                }}
                className={
                  selectedMenuOption === menu?.id
                    ? classes.single_btn_selected
                    : classes.single_btn
                }
              >
                <img
                  src={
                    selectedMenuOption === menu?.id ? menu?.src_2 : menu?.src
                  }
                />
                <p>{menu?.name}</p>
              </Link>
            ))}

            <p className={classes.contact}>
              Contact <span>Zilaay.com</span>
            </p>
          </div>
        </div>
        <div className={classes.component_container}>
          {currentPage === "overview" ? (
            <Overview />
          ) : currentPage === "add-property" ? (
            <AddProperty />
          ) : (
            currentPage === "zilaay-chats" && <Inbox />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
