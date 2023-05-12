import { ButtonInterface } from "../types";
import styles from "./Button.module.css";

const Button = ({ text, type, href, width }: ButtonInterface) => {
  return (
    <a
      href="#"
      className={`${styles.btn} ${styles[type]} ${styles[width]}`}
      style={{ textAlign: "center", fontWeight: "normal", width: "100%" }}
    >
      Learn More
    </a>
  );
};

export default Button;
