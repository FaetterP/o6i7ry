import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./About.module.scss";
import Image, { StaticImageData } from "next/image";
import lightImage from "../../public/lightImage.svg";
import darkImage from "../../public/darkImage.svg";
import aspidBlueImage from "../../public/aspidBlueImage.svg";

export default function About() {
  const { resolvedTheme } = useTheme();
  const [imageSrc, setImageSrc] = useState<StaticImageData | string | null>(
    null
  );

  useEffect(() => {
    switch (resolvedTheme) {
      case "aspidBlue-mode":
        setImageSrc(aspidBlueImage);
        break;
      case "light-mode":
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
        {imageSrc && (
          <Image src={imageSrc} alt="Stone" width={455} height={452} />
        )}
      </div>
    </div>
  );
}
