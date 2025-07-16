import React from "react";
import styles from "../signInForm/SignInForm.module.css";

const ForgotPasswordForm = ({ onSignInClick, onClose }) => {
  return (
    <div className={styles["form-container"]}>
      <h2 className={styles["heading"]}>Forgot Password</h2>
      <p className={styles["subheading"]}>Enter your email to reset your password</p>
      <p className={styles["register"]}>
        Remember your password?{" "}
        <span onClick={onSignInClick} style={{ color: "#2563eb", cursor: "pointer" }}>
          Sign In
        </span>
      </p>

      <form className={styles["form"]}>
        <label htmlFor="email" className={styles["label"]}>Email</label>
        <input type="email" id="email" placeholder="Email" required className={styles["input"]} />

        <button type="submit" className={styles["submit-button"]}>
          Reset Password
        </button>
      </form>

    
    </div>
  );
};

export default ForgotPasswordForm;
