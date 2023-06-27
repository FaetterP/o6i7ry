import HeaderNavButton from "./Button";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import SwitchLight from "./SwitchLight";

export default function Header() {
  return (
    <>
      <header className="wrapper">
        <ul className={styles.headerContainer}>
          <Logo />
          <ul className={styles.navContainer}>
            <HeaderNavButton title="Home" link="/" />
            <HeaderNavButton title="Projects" link="/projects" />
            <HeaderNavButton title="About" link="/about" />
            <HeaderNavButton title="Contact" link="/contact" />
          </ul>
          <ul className={styles.switchLightContainer}>
            <SwitchLight />
          </ul>
        </ul>
      </header>
    </>
  );
}
