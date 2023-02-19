import HeaderNavButton from "./Button";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <div>
        <ul className={styles.header}>
          <HeaderNavButton title="Home" link="/" />
          <HeaderNavButton title="Projects" link="/projects" />
          <HeaderNavButton title="About" link="/about" />
          <HeaderNavButton title="Contact" link="/contact" />
        </ul>
      </div>
    </>
  );
}
