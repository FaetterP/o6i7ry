import styles from "./../Header.module.scss";

export default function About() {
  return (
    <>
      <li className={styles.navigationItemButton}>
        <span className={styles.navigationItemLabel}>About</span>
      </li>
    </>
  );
}
