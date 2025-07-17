import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (e) => setSearchValue(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", searchValue);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavClick = (e, path) => {
    const isMobile = window.innerWidth <= 1100;
    if (isMobile && menuOpen) {
      e.stopPropagation();
      navigate(path);
      setMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Courses", dropdown: ["HTML", "Java", "JavaScript"] },
    { name: "Exercises", dropdown: ["C++", "CSS", "Java"] },
    { name: "Tutorials", dropdown: ["AI & ML", "Node.js", "Python"] },
    { name: "Jobs", dropdown: ["Frontend Developer", "UI Engineer", "Internships"] },
    { name: "Interview", dropdown: ["Questions", "Tips", "Resources"] },

  ];

  return (
    <div className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles["logo"]} />
        </Link>

        <div
          className={`${styles["hamburger"]} ${menuOpen ? styles["active"] : ""} ${
            isDark ? styles["hamburger-dark"] : styles["hamburger-light"]
          }`}
          onClick={toggleMenu}
        >
          <span className={styles["bar"]}></span>
          <span className={styles["bar"]}></span>
          <span className={styles["bar"]}></span>
        </div>

        <ul className={`${styles["nav-menu"]} ${menuOpen ? styles["nav-menu-open"] : ""}`}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={styles["nav-item"]}
              onClick={(e) => handleNavClick(e, `/${item.name.toLowerCase()}`)}
            >
              {item.name}
              <img src={arrow} alt="Arrow" className={styles["arrow"]} />
              <div className={styles["dropdown"]}>
                <ul>
                  {item.dropdown.map((sub, idx) => (
                    <li key={idx}>{sub}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}

          {/* Mobile Bottom Actions only inside hamburger */}
          {menuOpen && (
            <div className={styles["mobile-actions"]}>
              <button
                className={`${styles["signin-button"]} ${
                  isDark ? styles["signin-dark"] : styles["signin-light"]
                }`}
                onClick={() => {
                  onSignInClick();
                  setMenuOpen(false);
                }}
              >
                Sign In
              </button>
              <DarkModeToggle />
            </div>
          )}
        </ul>

        {/* Desktop Navbar Actions */}
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
