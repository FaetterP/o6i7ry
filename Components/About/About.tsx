import styles from "./About.module.scss";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "hocs/ThemeProvider";
import lightAbout from "../../public/lightAbout.svg";
import darkAbout from "../../public/darkAbout.svg";

export default function About() {
  const { isLightMode } = useContext(ThemeContext);

  const aboutSrc = isLightMode ? lightAbout : darkAbout;

  return (
    <div className="wrapper">
      <div className={styles.aboutContainer}>
        <div className={styles.textContainer}>
          <h1>Hello!</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </h2>
        </div>
        <div className={styles.imageContainer}>
          <Image src={aboutSrc} alt="Logo" width={460} height={413} />
        </div>
      </div>
    </div>
  );
}
