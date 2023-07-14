"use client";
import React from "react";
import styles from "./NavigationBar.module.css";
import { usePathname } from "next/navigation";

function NavigationBar() {
  const pathname = usePathname();
  return (
    <main>
      <nav className={styles.navigationBar}>
        <div className={styles["logoContainer"]}>
          <a className={styles.taitamHome} href="/">
            TAITAMARIKI <br></br>
            POTENTIA
          </a>
        </div>

        <ul className={styles["linksContainer"]}>
          <li>
            <a
              className={
                pathname === "/about" ? styles.active : styles.navLinks
              }
              href="/about"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className={
                pathname === "/events" ? styles.active : styles.navLinks
              }
              href="/events"
            >
              EVENTS
            </a>
          </li>
          <li>
            <a
              className={
                pathname === "/articles" ? styles.active : styles.navLinks
              }
              href="/articles"
            >
              ARTICLES
            </a>
          </li>
          <li>
            <a
              className={
                pathname === "/contact" ? styles.active : styles.navLinks
              }
              href="/contact"
            >
              CONTACT
            </a>
          </li>
          <a className={styles.buttonContainer} href="#">
            <button className={styles.logIn}>
              <div className={styles.userIconContainer}>
                <img src="Icon.png" alt="" />
              </div>
              Login
            </button>
          </a>
        </ul>
      </nav>
    </main>
  );
}
export default NavigationBar;
