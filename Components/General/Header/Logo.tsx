import Image, { StaticImageData } from "next/image";
import lightLogo from "../../../public/lightLogo.svg";
import darkLogo from "../../../public/darkLogo.svg";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [logoSrc, setImageSrc] = useState<StaticImageData | string | null>(
    null
  );

  useEffect(() => {
    switch (resolvedTheme) {
      case "light-mode":
        setImageSrc(darkLogo);
        break;
      default:
        setImageSrc(lightLogo);
        break;
    }
  }, [resolvedTheme]);

  return (
    <Link href="/">
      {logoSrc && (
        <Image src={logoSrc} alt="Logo" width={112} height={34} />
      )}
    </Link>
  );
}
