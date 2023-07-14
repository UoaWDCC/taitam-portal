import styles from "./Button.module.css";

export interface ButtonProps {
  text: string;
  type: string;
  href: string;
  width: string;
  target?: string;
}

const Button = ({ text, type, href, width, target}: ButtonProps) => {
  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[type]} ${styles[width]}`}
      style={{ textAlign: "center", fontWeight: "normal", width: "100%" }}
      target={target}
    >
      {text}
    </a>
  );
};

export default Button;
