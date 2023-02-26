import Head from "next/head";
import Image from "next/image";
import Banner from "../components/homepage/banner";
import EliteDevelopers from "../components/homepage/elite-developers";
import FeaturedDevelopers from "../components/homepage/featured-developers";
import HotProjects from "../components/homepage/hot-projects";
import Map from "../components/homepage/map";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zilow</title>
      </Head>
      <Banner />
      <Map />
      <HotProjects />
      <EliteDevelopers />
      <FeaturedDevelopers />
    </div>
  );
}
