import React from "react";
import BlogCard from "../../cards/blog-card";
import classes from "./blogs.module.css";

function Blogs() {
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
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
