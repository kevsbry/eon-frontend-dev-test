import React from "react";

import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.scss";
import { ReactComponent as CompanyLogo } from "../assets/company-logo.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <CompanyLogo className={styles["company-logo"]} />
      </Link>

      <button className={styles["sign-up-btn"]}>START FOR FREE</button>
    </div>
  );
};

export default Navbar;
