"use client";
import React, { useState } from "react";
import styles from "./NavigationBar.module.css";
import { usePathname } from "next/navigation";

function NavigationBar() {

  const [showLinks, setShowLinks] = useState(false);
  const pathname = usePathname();

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <main>
      <nav className={styles.navigationBar}>
        <div className={styles.logoContainer}>
          <a className={styles.taitamHome} href="/">
            TAITAMARIKI <br />
            POTENTIA
          </a>
        </div>

        <ul className={`${styles.linksContainer} ${showLinks ? styles.showLinks : ""}`}>
          <li>
            <a
              className={pathname === "/about" ? styles.active : styles.navLinks}
              href="/about"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className={pathname === "/events" ? styles.active : styles.navLinks}
              href="/events"
            >
              EVENTS
            </a>
          </li>
          <li>
            <a
              className={pathname === "/articles" ? styles.active : styles.navLinks}
              href="/articles"
            >
              ARTICLES
            </a>
          </li>
          <li>
            <a
              className={pathname === "/contact" ? styles.active : styles.navLinks}
              href="/contact"
            >
              CONTACT
            </a>
          </li>
          <a className={styles.buttonContainer} href="/logIn">
            <button className={styles.logIn}>
              <div className={styles.userIconContainer}>
                <img src="Icon.png" alt="" />
              </div>
              Login
            </button>
          </a>
        </ul>

        <div
          className={`${styles.mobileButton} ${showLinks ? styles.showLinks : ""}`}
          onClick={handleToggleLinks}
        >
          <span className={styles.burgerIcon}></span>
        </div>
      </nav>
    </main>
  );
}

export default NavigationBar;
