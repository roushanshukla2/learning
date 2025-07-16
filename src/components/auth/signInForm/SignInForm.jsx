import React, { useState } from "react";
import styles from "./SignInForm.module.css";
import linkedin from "../../../assets/images/linkedin.svg";
import google from "../../../assets/images/google.svg";
import facebook from "../../../assets/images/facebook.svg";
import github from "../../../assets/images/github.svg";

const SignInForm = ({ onRegisterClick, onForgotPasswordClick, onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => setPasswordVisible(!passwordVisible);

  return (
    <div className={styles["form-container"]}>
      <h2 className={styles["heading"]}>Sign in</h2>
      <p className={styles["subheading"]}>Get access to more learning features</p>
      <p className={styles["register"]}>
        Don't have an account? <span onClick={onRegisterClick} style={{ color: "#2563eb", cursor: "pointer" }}>Register</span>
      </p>

      <div className={styles["social-row"]}>
        <img src={google} alt="Google" className={styles["icon"]} />
        <img src={facebook} alt="Facebook" className={styles["icon"]} />
        <img src={github} alt="GitHub" className={styles["icon"]} />
        <img src={linkedin} alt="LinkedIn" className={styles["icon"]} />
      </div>

      <p className={styles["divider-text"]}>or</p>

      <form className={styles["form"]}>
        <label htmlFor="email" className={styles["label"]}>Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          className={styles["input"]}
        />

        <label htmlFor="password" className={styles["label"]}>Password</label>
        <div className={styles["password-wrapper"]}>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="Password"
            required
            className={styles["input"]}
          />
          <span className={styles["toggle-icon"]} onClick={togglePassword}>
            👁️
          </span>
        </div>

        <span onClick={onForgotPasswordClick} className={styles["forgot-link"]} style={{ cursor: "pointer" }}>
          Forgot your password?
        </span>

        <button type="submit" className={styles["submit-button"]}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
