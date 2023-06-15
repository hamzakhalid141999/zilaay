import React, {useEffect, useState} from "react";
import classes from "./login.module.css";
import lower_image from "../../public/assets/login-assets/lower_image.png";
import clouds from "../../public/assets/login-assets/clouds.png";
import Image from "next/image";
import AuthPanel from "../../components/login/auth-panel/index";

function Login() {

  return (
    <div className={classes.login_container}>
      <img src={clouds.src} className={classes.clouds} />
      <AuthPanel />
      <div className={classes.text_container}>
        <h2>
          Discover the Best Properties in <span>Pakistan</span> with{" "}
          <span>Zilaay.com {}</span>
        </h2>
      </div>
      <div className={classes.lower_img_wrapper}>
        <img src={lower_image.src} className={classes.lower_img} />
      </div>
    </div>
  );
}

export default Login;