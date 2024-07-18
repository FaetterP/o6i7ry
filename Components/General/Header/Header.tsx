import HeaderNavButton from "./Button";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import SwitchLight from "./SwitchLight";
import Image from "next/image";
import hamburgerMenu from "../../../public/HamburgerMenu.svg";

export default function Header() {
  return (
    <header className="wrapper">
      <div className={styles.headerContainer}>
        <div className={styles.mobileContainer}>
          <Image
            src={hamburgerMenu}
            alt="hamburgerMenu"
            width={25}
            height={25}
          />
        </div>
        <section className={styles.logo}>
          <Logo />
        </section>
        <nav>
          <ul className={styles.navContainer}>
            <HeaderNavButton title="Home" link="/" />
            <HeaderNavButton title="Projects" link="/projects" />
            <HeaderNavButton title="About" link="/about" />
            <HeaderNavButton title="Contact" link="/contact" />
          </ul>
        </nav>
        <SwitchLight />
      </div>
    </header>
  );
}
