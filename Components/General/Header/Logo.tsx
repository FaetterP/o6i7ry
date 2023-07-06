import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "hocs/ThemeProvider";
import lightLogo from "../../../public/lightLogo.svg";
import darkLogo from "../../../public/darkLogo.svg";

export default function Logo() {
  const { isLightMode } = useContext(ThemeContext);

  const logoSrc = isLightMode ? darkLogo : lightLogo;

  return <Image src={logoSrc} alt="Logo" width={112.5} height={34.5} />;
}
