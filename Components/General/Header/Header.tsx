import Home from "./Buttons/Home";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div>
        <ul className={styles.header}>
        <Home />
        <Home />
        <Home />
        </ul>
      </div>
    </>
  );
}
