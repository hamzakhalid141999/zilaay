import React, { useState, useEffect } from "react";
import classes from "./auth-panel.module.css";
import apple from "../../../public/assets/icons/apple.svg";
import facebook from "../../../public/assets/icons/facebook.svg";
import google from "../../../public/assets/icons/google.svg";
import eye from "../../../public/assets/icons/eye.svg";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  signInByEmail,
  signUpAsAgency,
  signUpAsBuilder,
  signUpAsEndUser,
} from "../../../api/auth/auth";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Button, message } from "antd";
import { useAuth } from "../../../contextApi";
import { useRouter } from "next/router";

function AuthPanel() {
  const {signUp} = useAuth();
  const [passRule1, setPassRule1] = useState(false);
  const [passRule2, setPassRule2] = useState(false);
  const [passRule3, setPassRule3] = useState(false);
  const [passRule4, setPassRule4] = useState(false);
  const [password, setPassword] = useState();
  const router = useRouter();

  useEffect(() => {}, [password]);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 18,
        color: "white",
      }}
      spin
    />
  );

  message.config({
    bottom: 50,
  });
  const [messageApi, contextHolder] = message.useMessage();

  const loadingToast = (msg) => {
    messageApi.open({
      type: "loading",
      content: msg,
      duration: 0,
    });
    setTimeout(messageApi.destroy, 2500);
  };

  const success = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };

  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };

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

  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userRole, setUserRole] = useState(0);

  const loginInitialValues = {
    email: "",
    password: "",
  };

  const signupInitialValues = {
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const signupValidationSchema = Yup.object().shape({
    username: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    mobileNumber: Yup.string().test(
      "isRequired",
      "Mobile number is required",
      function (value) {
        if (userRole === 1 && userRole !== 2) {
          return Yup.string().required().isValidSync(value);
        }

        return true;
      }
    ),

    agencyCity: Yup.string().test(
      "isRequired",
      "Agency City is required",
      function (value) {
        if (userRole === 1 && userRole !== 2) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
    agencyName: Yup.string().test(
      "isRequired",
      "Agency City is required",
      function (value) {
        if (userRole === 1 && userRole !== 2) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
    agencyEmail: Yup.string().test(
      "isRequired",
      "Agency City is required",
      function (value) {
        if (userRole === 1 && userRole !== 2) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
    agencyMobileNumber: Yup.string().test(
      "isRequired",
      "Agency City is required",
      function (value) {
        if (userRole === 1 && userRole !== 2) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
    agencyWhatsappNumber: Yup.string().test(
      "isRequired",
      "Agency City is required",
      function (value) {
        if (userRole === 1 && userRole !== 2) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),

    builderName: Yup.string().test(
      "isRequired",
      "Builder Name is required",
      function (value) {
        if (userRole === 2 && userRole !== 1) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
    builderCity: Yup.string().test(
      "isRequired",
      "Builder City is required",
      function (value) {
        if (userRole === 2 && userRole !== 1) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
    builderAddress: Yup.string().test(
      "isRequired",
      "Builder Address is required",
      function (value) {
        if (userRole === 2 && userRole !== 1) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
    builderEmail: Yup.string().test(
      "isRequired",
      "Builder Email is required",
      function (value) {
        if (userRole === 2 && userRole !== 1) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
    builderMobile: Yup.string().test(
      "isRequired",
      "Builder Mobile is required",
      function (value) {
        if (userRole === 2 && userRole !== 1) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
    builderWhatsappNumber: Yup.string().test(
      "isRequired",
      "Builder Whatsapp Number is required",
      function (value) {
        if (userRole === 2 && userRole !== 1) {
          return Yup.string().required().isValidSync(value);
        }
        return true;
      }
    ),
  });

  const handleLoginSubmit = async (values) => {
    try {
      loadingToast("Signing In");
      setLoading(true);
      const resp = await signInByEmail(values?.email, values?.password);
      console.log(resp);
      signUp(resp);
      setLoading(false);
      success("Signed In");
      await delay(1500);
      router.push("/")
    } catch (e) {
      console.log(e);
      setLoading(false);
      if (e.response.data.message) {
        error(e.response.data.message);
      } else {
        error("Error Signing In");
      }
    }
  };

  const handleSignupSubmit = async (values) => {
    try {
      setLoading(true);
      if (userRole === 1) {
        const resp = await signUpAsAgency(
          values?.username,
          values?.email,
          values?.password,
          values?.mobileNumber,
          values?.agencyName,
          values?.agencyCity,
          values?.agencyEmail,
          values?.agencyMobileNumber,
          values?.agencyWhatsappNumber
        );
        setLoading(false);
      } else if (userRole === 2) {
        const resp = await signUpAsBuilder(
          values?.username,
          values?.email,
          values?.password,
          values?.mobileNumber,
          values?.builderName,
          values?.builderAddress,
          values?.builderEmail,
          values?.builderMobile,
          values?.builderWhatsappNumber,
          values?.builderCity
        );
        setLoading(false);
      } else {
        const resp = await signUpAsEndUser(
          values?.username,
          values?.email,
          values?.password
        );
        setLoading(false);
      }
      success("Signed Up");
    } catch (e) {
      console.log(e);
      setLoading(false);
      if (e.response.data.message) {
        error(e.response.data.message);
      } else {
        error("Error Signing Up");
      }
    }
  };

  return (
    <div className={classes.panel_body}>
      {contextHolder}
      <div className={classes.content_container}>
        {isLogin ? (
          <>
            <h2 className={classes.heading}>Welcome To Zilaay.com</h2>
            <p className={classes.sub_heading}>Sign in to your account</p>
            <Formik
              initialValues={loginInitialValues}
              validationSchema={loginValidationSchema}
              onSubmit={handleLoginSubmit}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <div className={classes.form_container}>
                    <div className={classes.single_input_container}>
                      <p className={classes.label}>Your Email</p>
                      <Field
                        id="email"
                        name="email"
                        className={classes.input_field}
                        placeholder="nomanshahid@gmail.com"
                      />
                    </div>
                    <div className={classes.single_input_container}>
                      <p className={classes.label}>Password</p>
                      <div className={classes.input_field_container}>
                        <img src={eye.src} />
                        <Field
                          id="password"
                          name="password"
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
                      <p className={classes.forgot_password}>
                        Forgot Password?
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        console.log(errors);
                      }}
                      disabled={loading}
                      onSubmit={handleLoginSubmit}
                      className="primary_btn"
                    >
                      <p>LOGIN</p>
                      {loading && <Spin indicator={antIcon} />}
                    </button>
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
                </form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <h2 className={classes.heading}>Welcome To Zilaay.com</h2>
            <p className={classes.sub_heading}>
              Sign up and create new account
            </p>
            <Formik
              initialValues={signupInitialValues}
              validationSchema={signupValidationSchema}
              onSubmit={handleSignupSubmit}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <div className={classes.form_container}>
                    <div className={classes.single_input_container}>
                      <p className={classes.label}>Your Name</p>
                      <Field
                        id="username"
                        name="username"
                        className={
                          errors?.username
                            ? classes.input_field_error
                            : classes.input_field
                        }
                        placeholder="e.g Noman Shahid"
                      />
                      {errors?.username && (
                        <p className={classes.error}>{errors?.username}</p>
                      )}
                    </div>
                    <div className={classes.single_input_container}>
                      <p className={classes.label}>Your Email</p>
                      <div className={classes.input_field_container}>
                        <Field
                          id="email"
                          name="email"
                          type={"email"}
                          className={
                            errors?.email
                              ? classes.input_field_error
                              : classes.input_field
                          }
                          placeholder="nomanshahid@gmail.com"
                        />
                        {errors?.email && (
                          <p className={classes.error}>{errors?.email}</p>
                        )}
                      </div>
                    </div>

                    <div className={classes.single_input_container}>
                      <p className={classes.label}>Password</p>
                      <div className={classes.input_field_container}>
                        <img src={eye.src} />
                        <Field
                          id="password"
                          name="password"
                          type={"password"}
                          className={
                            errors?.password
                              ? classes.input_field_error
                              : classes.input_field
                          }
                          placeholder="Create Password"
                          style={{ marginBottom: "10px" }}
                        />
                        {errors?.password && (
                          <p className={classes.error}>{errors?.password}</p>
                        )}
                        <p className={classes.password_rule}>
                          At least 8 characters
                        </p>
                        <p className={classes.password_rule}>
                          Mix of letters and numbers
                        </p>
                        <p className={classes.password_rule}>
                          At least 1 special characters
                        </p>
                        <p className={classes.password_rule}>
                          At least 1 uppercase and 1 lowercase letter
                        </p>
                      </div>
                    </div>

                    <div className={classes.single_input_container}>
                      <p className={classes.label}>Your Mobile Number</p>
                      <div className={classes.input_field_container}>
                        <img src={eye.src} />
                        <Field
                          id="mobileNumber"
                          name="mobileNumber"
                          className={
                            errors?.mobileNumber
                              ? classes.input_field_error
                              : classes.input_field
                          }
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
                          <Field
                            id="agencyCity"
                            name="agencyCity"
                            className={
                              errors?.agencyCity
                                ? classes.input_field_error
                                : classes.input_field
                            }
                            placeholder="Select your city"
                          />
                        </div>
                        <div className={classes.single_input_container}>
                          <p className={classes.label}>Agency Name</p>
                          <div className={classes.input_field_container}>
                            <Field
                              id="agencyName"
                              name="agencyName"
                              className={
                                errors?.agencyName
                                  ? classes.input_field_error
                                  : classes.input_field
                              }
                              placeholder="Agency Name"
                            />
                            {errors?.agencyName && (
                              <p className={classes.error}>
                                {errors?.agencyName}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className={classes.single_input_container}>
                          <p className={classes.label}>Your Email</p>
                          <Field
                            id="agencyEmail"
                            name="agencyEmail"
                            type={"agencyEmail"}
                            className={
                              errors?.agencyEmail
                                ? classes.input_field_error
                                : classes.input_field
                            }
                            placeholder="nomanshahid@gmail.com"
                          />
                          {errors?.agencyEmail && (
                            <p className={classes.error}>
                              {errors?.agencyEmail}
                            </p>
                          )}
                        </div>
                        <div className={classes.single_input_container}>
                          <p className={classes.label}>Your Mobile Number</p>
                          <div className={classes.input_field_container}>
                            <Field
                              id="agencyMobileNumber"
                              name="agencyMobileNumber"
                              className={
                                errors?.agencyMobileNumber
                                  ? classes.input_field_error
                                  : classes.input_field
                              }
                              placeholder="e.g (+923310983462)"
                            />
                            {errors?.agencyMobileNumber && (
                              <p className={classes.error}>
                                {errors?.agencyMobileNumber}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className={classes.single_input_container}>
                          <p className={classes.label}>WhatsApp</p>
                          <div className={classes.input_field_container}>
                            <Field
                              id="agencyWhatsappNumber"
                              name="agencyWhatsappNumber"
                              className={
                                errors?.agencyWhatsappNumber
                                  ? classes.input_field_error
                                  : classes.input_field
                              }
                              placeholder="e.g (+923310983462)"
                            />
                            {errors?.agencyWhatsappNumber && (
                              <p className={classes.error}>
                                {errors?.agencyWhatsappNumber}
                              </p>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      userRole === 2 && (
                        <>
                          <div className={classes.single_input_container}>
                            <p className={classes.label}>
                              Builder & Developer Name
                            </p>
                            <div className={classes.input_field_container}>
                              <Field
                                id="builderName"
                                name="builderName"
                                className={classes.input_field}
                                placeholder="Agency Name"
                              />
                            </div>
                          </div>
                          <div className={classes.single_input_container}>
                            <p className={classes.label}>City</p>
                            <Field
                              id="builderCity"
                              name="builderCity"
                              className={classes.input_field}
                              placeholder="Select your city"
                            />
                          </div>

                          <div className={classes.single_input_container}>
                            <p className={classes.label}>Address</p>
                            <div className={classes.input_field_container}>
                              <Field
                                id="builderAddress"
                                name="builderAddress"
                                className={classes.input_field}
                                placeholder="Address"
                              />
                            </div>
                          </div>

                          <div className={classes.single_input_container}>
                            <p className={classes.label}>Email</p>
                            <Field
                              id="builderEmail"
                              name="builderEmail"
                              type={"email"}
                              className={classes.input_field}
                              placeholder="nomanshahid@gmail.com"
                            />
                          </div>

                          <div className={classes.single_input_container}>
                            <p className={classes.label}>Mobile Number</p>
                            <div className={classes.input_field_container}>
                              <Field
                                id="builderMobile"
                                name="builderMobile"
                                className={classes.input_field}
                                placeholder="e.g (+923310983462)"
                              />
                            </div>
                          </div>

                          <div className={classes.single_input_container}>
                            <p className={classes.label}>WhatsApp Number</p>
                            <div className={classes.input_field_container}>
                              <Field
                                id="builderWhatsappNumber"
                                name="builderWhatsappNumber"
                                className={classes.input_field}
                                placeholder="e.g (+923310983462)"
                              />
                            </div>
                          </div>
                        </>
                      )
                    )}
                    <button
                      onSubmit={handleSignupSubmit}
                      onClick={() => {
                        console.log(errors);
                      }}
                      className="primary_btn"
                      disabled={loading}
                    >
                      <p>SUBMIT</p>
                      {loading && <Spin indicator={antIcon} />}
                    </button>
                    <p
                      onClick={() => {
                        setIsLogin(true);
                      }}
                      className={classes.terms_of_use}
                    >
                      By submitting, I accept Zilaay.com's{" "}
                      <span>terms of use</span>
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
                </form>
              )}
            </Formik>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPanel;
