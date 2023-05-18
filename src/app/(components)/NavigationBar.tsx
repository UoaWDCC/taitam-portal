import React from "react";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
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
          {/* the first one is shown as the active link, not sure if I can change whether they're active or not
            before routing the links in  */}
          <li>
            <a className={styles.active} href="/about">
              ABOUT
            </a>
          </li>
          <li>
            <a className={styles.navLinks} href="/events">
              EVENTS
            </a>
          </li>
          <li>
            <a className={styles.navLinks} href="/articles">
              ARTICLES
            </a>
          </li>
          <li>
            <a className={styles.navLinks} href="/contact">
              CONTACT
            </a>
          </li>
          <a className={styles.buttonContainer} href="#">
            <button className={styles.logIn}>
              <div className={styles.userIconContainer}>
                <img src="Icon.png" alt="" className="image" />
              </div>
              Login
            </button>
          </a>
        </ul>
        {/* <script src="script.js"></script> */}
      </nav>
    </main>
  );
}
export default NavigationBar;
