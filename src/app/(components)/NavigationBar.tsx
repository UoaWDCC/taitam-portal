"use client";
import React, { useState, useEffect } from "react";
import styles from "./NavigationBar.module.css";
import { usePathname } from "next/navigation";
import { SignOut, onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";

function NavigationBar() {

  const [showLinks, setShowLinks] = useState(false);
  const pathname = usePathname();
  // Init user state
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  function handleChange() {
    user && SignOut();
    console.log("You have logged out");
  }

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
          <a className={styles.buttonContainer} href="/login">
            <button className={styles.logIn} onClick={handleChange}>
              <div className={styles.userIconContainer}>
                <img src="Icon.png" alt="" />
              </div>
              {user ? "Logout" : "Login"}
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
