import React from "react";
import styles from "./NavigationBar.module.css";
import { Poppins } from "next/font/google";
// import {Icon} from '../components/svg'
// import imageToAdd from "./../assets/images/logo.png";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
});

const NavigationBar: React.FC<{}> = () => {
  return (
    <main className={poppins.className}>
      <nav className={styles.navigationBar}>
        <div className={styles["logoContainer"]}>
          <a className={styles.taitamHome} href="#">
            TAITAMARIKI <br></br>
            POTENTIA
          </a>
        </div>

        <ul className={styles["linksContainer"]}>
          {/* the first one is shown as the active link, not sure if I can change whether they're active or not
            before routing the links in  */}
          <li>
            <a className={styles.active} href="#">
              ABOUT
            </a>
          </li>
          <li>
            <a className={styles.navLinks} href="#">
              EVENTS
            </a>
          </li>
          <li>
            <a className={styles.navLinks} href="#">
              ARTICLES
            </a>
          </li>
          <li>
            <a className={styles.navLinks} href="#">
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
};
export default NavigationBar;
