import React, { useState } from "react";
import styles from "../signInForm/SignInForm.module.css";

const RegistrationForm = ({ onSignInClick, onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => setPasswordVisible(!passwordVisible);

  return (
    <div className={styles["form-container"]}>
      <h2 className={styles["heading"]}>Register</h2>
      <p className={styles["subheading"]}>Create your account and start learning</p>
      <p className={styles["register"]}>
        Already have an account?{" "}
        <span onClick={onSignInClick} style={{ color: "#2563eb", cursor: "pointer" }}>
          Sign In
        </span>
      </p>

      <form className={styles["form"]}>
        <label htmlFor="name" className={styles["label"]}>Full Name</label>
        <input type="text" id="name" placeholder="Full Name" required className={styles["input"]} />

        <label htmlFor="email" className={styles["label"]}>Email</label>
        <input type="email" id="email" placeholder="Email" required className={styles["input"]} />

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

        <button type="submit" className={styles["submit-button"]}>
          Register
        </button>
      </form>

      
    </div>
  );
};

export default RegistrationForm;
