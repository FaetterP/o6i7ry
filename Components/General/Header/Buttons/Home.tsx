import styles from "./../Header.module.css";

export default function Home() {
  return (
    <>
      <li className={styles.navigationItemButton}>
        <span className={styles.navigationItemLabel}>Home</span>
      </li>
    </>
  );
}
