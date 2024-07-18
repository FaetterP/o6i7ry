import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./About.module.scss";
import Image, { StaticImageData } from "next/image";
import lightImage from "../../public/lightImage.svg";
import darkImage from "../../public/darkImage.svg";
import aspidBlueImage from "../../public/aspidBlueImage.svg";
import { ASPIDBLUE_THEME_NAME, LIGHT_THEME_NAME } from "utils/constants";

export default function About() {
  const { resolvedTheme } = useTheme();
  const [imageSrc, setImageSrc] = useState<StaticImageData | string | null>(
    null
  );

  useEffect(() => {
    switch (resolvedTheme) {
      case ASPIDBLUE_THEME_NAME:
        setImageSrc(aspidBlueImage);
        break;
      case LIGHT_THEME_NAME:
        setImageSrc(lightImage);
        break;
      default:
        setImageSrc(darkImage);
        break;
    }
  }, [resolvedTheme]);

  return (
    <div className="wrapper">
      <div className={styles.parentContainer}>
        <div className={styles.textContainer}>
          <h1>Hello!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <figure className={styles.imageContainer}>
          {imageSrc ? <Image src={imageSrc} alt="Stone" fill /> : <></>}
        </figure>
      </div>
    </div>
  );
}
