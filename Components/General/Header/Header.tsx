import HeaderNavButton from "./Button";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import SwitchLight from "./SwitchLight";
import Image from "next/image";
import hamburgerMenu from "../../../public/HamburgerMenu.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="wrapper">
          <ul className={styles.headerContainer}>
            <ul className={styles.logo}>
              <Logo />
            </ul>
            <ul className={styles.navContainer}>
              <HeaderNavButton title="Home" link="/" />
              <HeaderNavButton title="Projects" link="/projects" />
              <HeaderNavButton title="About" link="/about" />
              <HeaderNavButton title="Contact" link="/contact" />
            </ul>
            <SwitchLight />
          </ul>
          <div className="parentContainer">
            <ul className={styles.mobileContainer}>
              <Image src={hamburgerMenu} alt="hamburgerMenu" width={25} height={25}></Image>
              <Logo />
              <SwitchLight />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
