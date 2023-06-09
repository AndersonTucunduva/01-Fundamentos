import styles from "./Header.module.css";
import ignitelogo from "../assets/ignite_logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ignitelogo} alt="Logo ignite" />
    </header>
  );
}
