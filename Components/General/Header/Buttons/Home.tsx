import styles from "./../Header.module.scss";

export default function Home() {
  return (
    <>
      <li className={styles.navigationItemButton}>
        <span className={styles.navigationItemLabel}>Home</span>
      </li>
    </>
  );
}
