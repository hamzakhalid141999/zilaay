import React from "react";
import BlogCard from "../../cards/blog-card";
import classes from "./blogs.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Next from "../../reactSlickButtons/next";
import Prev from "../../reactSlickButtons/prev";

function Blogs() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };

  return (
    <div className={classes.container}>
      <div className={classes.blogs_content_container}>
        <div className="heading_container">
          <p className="landing_page_heading">Blogs</p>
          <div className="btn">
            <p>View all Blogs</p>
          </div>
        </div>
        <div className={classes.blogs_container}>
          <Slider arrows={true} {...settings}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
