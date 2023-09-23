import styles from "../css/Header.module.css";
import AppLogo from "../images/Logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={AppLogo} alt="logo" />
    </header>
  );
}
