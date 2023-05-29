import React, { useState, useEffect } from "react";
import classes from "./auth-panel.module.css";
import apple from "../../../public/assets/icons/apple.svg";
import facebook from "../../../public/assets/icons/facebook.svg";
import google from "../../../public/assets/icons/google.svg";
import eye from "../../../public/assets/icons/eye.svg";

function AuthPanel() {
  const USER_ROLE = [
    {
      id: 1,
      title: "USER",
    },
    {
      id: 2,
      title: "AGENCY",
    },
    {
      id: 3,
      title: "BUILDER",
    },
  ];

  const [isLogin, setIsLogin] = useState(true);
  const [userRole, setUserRole] = useState(0);

  return (
    <div className={classes.panel_body}>
      <div className={classes.content_container}>
        {isLogin ? (
          <>
            <h2 className={classes.heading}>Welcome To Zilaay.com</h2>
            <p className={classes.sub_heading}>Sign in to your account</p>
            <div className={classes.form_container}>
              <div className={classes.single_input_container}>
                <p className={classes.label}>Your Email</p>
                <input
                  className={classes.input_field}
                  placeholder="nomanshahid@gmail.com"
                />
              </div>
              <div className={classes.single_input_container}>
                <p className={classes.label}>Password</p>
                <div className={classes.input_field_container}>
                  <img src={eye.src} />
                  <input
                    type={"password"}
                    className={classes.input_field}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="checkbox_with_label">
                  <input type={"checkbox"} className={classes.checkbox} />
                  <p className={classes.remember_me_text}>Remember Me</p>
                </div>
                <p className={classes.forgot_password}>Forgot Password?</p>
              </div>
              <div className="primary_btn">
                <p>LOGIN</p>
              </div>
              <div className={classes.continue_container}>
                <div className={classes.line_left} />
                <p className={classes.continue_with}>or continue with </p>
                <div className={classes.line_right} />
              </div>
              <div className={classes.social_media_btns}>
                <div className={classes.apple_btn}>
                  <img src={facebook.src} />
                  <p>Connect with Apple</p>
                </div>
                <div className={classes.facebook_btn}>
                  <img src={apple.src} />
                  <p>Connect with Facebook</p>
                </div>
                <div className={classes.google_btn}>
                  <img src={google.src} />
                  <p>Connect with Gmail</p>
                </div>
              </div>

              <p
                onClick={() => {
                  setIsLogin(false);
                }}
                className={classes.signup_link}
              >
                Don't have an account? <span>Sign Up</span>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className={classes.heading}>Welcome To Zilaay.com</h2>
            <p className={classes.sub_heading}>
              Sign up and create new account
            </p>
            <div className={classes.form_container}>
              <div className={classes.single_input_container}>
                <p className={classes.label}>Your Name</p>
                <input
                  className={classes.input_field}
                  placeholder="e.g Noman Shahid"
                />
              </div>
              <div className={classes.single_input_container}>
                <p className={classes.label}>Your Email</p>
                <div className={classes.input_field_container}>
                  <input
                    type={"email"}
                    className={classes.input_field}
                    placeholder="nomanshahid@gmail.com"
                  />
                </div>
              </div>

              <div className={classes.single_input_container}>
                <p className={classes.label}>Password</p>
                <div className={classes.input_field_container}>
                  <img src={eye.src} />
                  <input
                    type={"password"}
                    className={classes.input_field}
                    placeholder="Create Password"
                  />
                </div>
              </div>

              <div className={classes.single_input_container}>
                <p className={classes.label}>Your Mobile Number</p>
                <div className={classes.input_field_container}>
                  <img src={eye.src} />
                  <input
                    type={"email"}
                    className={classes.input_field}
                    placeholder="e.g (+923310983462)"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                onClick={() => {
                  setUserRole(1);
                }}
                className={
                  userRole === 1
                    ? classes.hollow_btn_active
                    : classes.hollow_btn_inactive
                }
              >
                <p>As an Agency</p>
              </div>

              <div
                onClick={() => {
                  setUserRole(2);
                }}
                className={
                  userRole === 2
                    ? classes.hollow_btn_active
                    : classes.hollow_btn_inactive
                }
              >
                <p>As a Builder</p>
              </div>
            </div>

            <div className={classes.form_container}>
              {userRole === 1 ? (
                <>
                  <div className={classes.single_input_container}>
                    <p className={classes.label}>City</p>
                    <input
                      className={classes.input_field}
                      placeholder="Select your city"
                    />
                  </div>
                  <div className={classes.single_input_container}>
                    <p className={classes.label}>Agency Name</p>
                    <div className={classes.input_field_container}>
                      <input
                        className={classes.input_field}
                        placeholder="Agency Name"
                      />
                    </div>
                  </div>

                  <div className={classes.single_input_container}>
                    <p className={classes.label}>Your Email</p>
                    <input
                      type={"email"}
                      className={classes.input_field}
                      placeholder="nomanshahid@gmail.com"
                    />
                  </div>

                  <div className={classes.single_input_container}>
                    <p className={classes.label}>Your Mobile Number</p>
                    <div className={classes.input_field_container}>
                      <input
                        className={classes.input_field}
                        placeholder="e.g (+923310983462)"
                      />
                    </div>
                  </div>

                  <div className={classes.single_input_container}>
                    <p className={classes.label}>WhatsApp</p>
                    <div className={classes.input_field_container}>
                      <input
                        className={classes.input_field}
                        placeholder="e.g (+923310983462)"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="primary_btn">
                <p>SUBMIT</p>
              </div>
              <p
                onClick={() => {
                  setIsLogin(true);
                }}
                className={classes.terms_of_use}
              >
                By submitting, I accept Zilaay.com's <span>terms of use</span>
              </p>
              <div className={classes.continue_container}>
                <div className={classes.line_left} />
                <p className={classes.continue_with}>or continue with </p>
                <div className={classes.line_right} />
              </div>
              <div className={classes.social_media_btns}>
                <div className={classes.apple_btn}>
                  <img src={facebook.src} />
                  <p>Connect with Apple</p>
                </div>
                <div className={classes.facebook_btn}>
                  <img src={apple.src} />
                  <p>Connect with Facebook</p>
                </div>
                <div className={classes.google_btn}>
                  <img src={google.src} />
                  <p>Connect with Gmail</p>
                </div>
              </div>

              <p
                onClick={() => {
                  setIsLogin(true);
                }}
                className={classes.signup_link}
              >
                Already have an account? <span>Sign In</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPanel;
