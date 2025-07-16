import React, { useState } from "react";
import SignInForm from "./signInForm/SignInForm.jsx";
import RegistrationForm from "./registrationForm/RegistrationForm.jsx";
import ForgotPasswordForm from "./forgotPassword/ForgotPasswordForm.jsx";

const SignInContainer = ({ onClose }) => {
  const [activeForm, setActiveForm] = useState("signin"); // "signin" | "register" | "forgot"

  const renderForm = () => {
    switch (activeForm) {
      case "signin":
        return (
          <SignInForm
            onRegisterClick={() => setActiveForm("register")}
            onForgotPasswordClick={() => setActiveForm("forgot")}
            onClose={onClose}
          />
        );
      case "register":
        return (
          <RegistrationForm
            onSignInClick={() => setActiveForm("signin")}
            onClose={onClose}
          />
        );
      case "forgot":
        return (
          <ForgotPasswordForm
            onSignInClick={() => setActiveForm("signin")}
            onClose={onClose}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderForm()}</>;
};

export default SignInContainer;
