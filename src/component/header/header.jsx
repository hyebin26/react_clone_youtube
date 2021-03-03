import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  const clickSearchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <header className={styles.container}>
      <Link to="/">
        <div className={styles.imgContainer}>
          <img src="./images/logo.png" alt="logo" />
          <h3 className={styles.title}>Youtube</h3>
        </div>
      </Link>
      <form className={styles.searchContainer}>
        <input type="text" placeholder="Search..." />
        <div className={styles.searchBox}>
          <button onClick={clickSearchBtn}>
            <img src="./images/search.png" alt="search" />
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
