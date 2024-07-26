import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  // Adding the states
  const [isActive, setIsActive] = useState(false);

  // Add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  

  return (
   
    <nav className={`${styles.navbar}`}>
      {/* logo */}
     <div className={`${styles.logo}`}>
     Fahad
     </div>

      <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
        <li>
          <a href="#About" className={`${styles.navLink}`}>
            About
          </a>
        </li>
        <li>
          <a href="#Experience" className={`${styles.navLink}`}>
            Experience
          </a>
        </li>
        <li>
          <a href="" className={`${styles.navLink}`}>
            My Portfolio
          </a>
        </li>
        <li>
          <a href="#Contact" className={`${styles.navLink}`}>
            Contact
          </a>
        </li>
      </ul>

      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
        onClick={toggleActiveClass}
      >
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>
      <Link to="https://www.linkedin.com/in/fahad-moon/" className={`${styles.btn} ${isActive ? styles.active : ""}`}>
        Linkedin Profile
      </Link>
    </nav>
  );
}

export default Navbar;
