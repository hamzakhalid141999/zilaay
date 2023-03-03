import React from "react";
import ForumCard from "../../cards/forum-card";
import classes from "./forums-newsletters.module.css";
import register_panel_bg from "../../../public/assets/landing-page-assets/register-panel-bg.png";
import video_bg from "../../../public/assets/landing-page-assets/video-bg.png";
import pause from "../../../public/assets/landing-page-assets/pause.svg";
import newsletter_bg from "../../../public/assets/landing-page-assets/newsletter_bg.svg";

function ForumsAndNewsletters() {
  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.forums_container}>
          <div className="heading_container">
            <p className="landing_page_heading">Forums</p>
            <div className="btn">
              <p>View All</p>
            </div>
          </div>
          <div className={classes.cards_container}>
            <ForumCard />
            <ForumCard />
            <ForumCard />
            <ForumCard />
          </div>
        </div>

        <div className={classes.newsletter_section}>
          <div className={classes.register_panel}>
            <img src={register_panel_bg.src} />
            <div className={classes.content}>
              <h2 className={classes.heading}>Are you Property Owner?</h2>
              <p className={classes.sub_heading}>
                Do you want to sell or rent your property in all over Pakistan?
              </p>
              <div className={classes.btn}>
                <p>Register Here</p>
              </div>
              <p className={classes.sub_heading}>
                Already a member? Login Here
              </p>
            </div>
          </div>
          <div className={classes.zilaay_video_panel}>
            <img className={classes.video_bg} src={video_bg.src} />
            <div className={classes.video_content}>
              <img className={classes.pause_btn} src={pause.src} />
              <p>Zilaay Tutorial Video</p>
            </div>
          </div>
          <div className={classes.newsletter_panel}>
            <div className={classes.newsletter_content}>
              <p className={classes.newsletter_title}>Newsletter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumsAndNewsletters;
