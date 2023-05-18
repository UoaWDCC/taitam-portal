import styles from "./Button.module.css";

export interface ButtonProps {
  text: string;
  type: string;
  href: string;
  width: string;
}

const Button = ({ text, type, href, width }: ButtonProps) => {
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
