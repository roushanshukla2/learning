import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.webp";
import arrowLight from "../../assets/images/arrow.svg";
import arrowDark from "../../assets/images/arrow-dark.svg";
import token from "../../assets/images/token.png";

import styles from "./Navbar.module.css";
import DarkModeToggle from "../darkmode/DarkModeToggle";
import { ThemeContext } from "../themeContext/ThemeContext";

const Navbar = ({ onSignInClick }) => {
  const { isDark } = useContext(ThemeContext);
  const arrow = isDark ? arrowDark : arrowLight;
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => setSearchValue(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", searchValue);
  };

  return (
    <div className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles["logo"]} />
        </Link>

        <ul className={styles["nav-menu"]}>
          <li className={styles["nav-item"]}>
            Courses
            <img src={arrow} alt="Arrow" className={styles["arrow"]} />
            <div className={styles["dropdown"]}>
              <ul>
                <li>HTML</li>
                <li>Java</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </li>
          <li className={styles["nav-item"]}>
            Exercises
            <img src={arrow} alt="Arrow" className={styles["arrow"]} />
            <div className={styles["dropdown"]}>
              <ul>
                <li>C++</li>
                <li>CSS</li>
                <li>Java</li>
              </ul>
            </div>
          </li>
          <li className={styles["nav-item"]}>
            Tutorials
            <img src={arrow} alt="Arrow" className={styles["arrow"]} />
            <div className={styles["dropdown"]}>
              <ul>
                <li>AI & ML</li>
                <li>Node.js</li>
                <li>Python</li>
              </ul>
            </div>
          </li>
          <li className={styles["nav-item"]}>
            Jobs
            <img src={arrow} alt="Arrow" className={styles["arrow"]} />
            <div className={styles["dropdown"]}>
              <ul>
                <li>Frontend Developer @ BhoomiTech</li>
                <li>UI Engineer @ BhoomiTech</li>
                <li>Internships @ BhoomiTech</li>
              </ul>
            </div>
          </li>
        </ul>

        <div className={styles["navbar-actions"]}>
          <form onSubmit={handleSearchSubmit} className={styles["search-form"]}>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              className={`${styles["search-input"]} ${
                isDark ? styles["search-dark"] : styles["search-light"]
              }`}
            />
            <button
              type="submit"
              className={`${styles["search-button"]} ${
                isDark ? styles["search-button-dark"] : styles["search-button-light"]
              }`}
            >
              🔍
            </button>
          </form>

          <button
            className={`${styles["signin-button"]} ${
              isDark ? styles["signin-dark"] : styles["signin-light"]
            }`}
            onClick={onSignInClick}
          >
            Sign In
          </button>

          <DarkModeToggle />
          <img src={token} alt="Token" className={styles["token"]} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
