import Head from "next/head";
import Image from "next/image";
import AllAgencies from "../components/homepage/all-agencies";
import Banner from "../components/homepage/banner";
import Blogs from "../components/homepage/blogs";
import EliteAgencies from "../components/homepage/elite-agencies";
import EliteDevelopers from "../components/homepage/elite-developers";
import FeaturedDevelopers from "../components/homepage/featured-developers";
import ForumsAndNewsletters from "../components/homepage/forums-newsletters";
import HotProjects from "../components/homepage/hot-projects";
import Map from "../components/homepage/map";
import ListedProperties from "../components/homepage/properties-for-sale";
import TrendingLinks from "../components/trending-links";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zilaay | Real Estate Portal</title>
      </Head>
      <Banner />
      <Map />
      <div className={styles.ad_container}>
        <div className={styles.ad_placehodler}>
          <h1>928 x 250 AD HERE</h1>
          <h2>Premium Billboard Ad Goes Here</h2>
        </div>
      </div>
      <HotProjects />
      <EliteDevelopers />
      <FeaturedDevelopers />
      <div className={styles.ad_container}>
        <div className={styles.ad_placehodler}>
          <h1>928 x 250 AD HERE</h1>
          <h2>Premium Billboard Ad Goes Here</h2>
        </div>
      </div>
      <EliteAgencies />
      <AllAgencies />
      <ListedProperties title={"Properties For Sale"} color={"#aa4ff1"} />
      <ListedProperties
        title={"Properties For Rent"}
        color={"rgba(98, 157, 96, 1)"}
      />
      <ListedProperties
        title={"Properties For Sharing"}
        color={"rgba(100, 160, 231, 1"}
      />
      <Blogs />
      <ForumsAndNewsletters />
      <TrendingLinks />
    </div>
  );
}
