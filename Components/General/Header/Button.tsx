import Link from "next/link";
import styles from "./Button.module.scss";

type PropsType = {
  title: string;
  link: string;
};

export default function HeaderNavButton({ title, link }: PropsType) {
  return (
    <li className={styles.navigationItemButton}>
      <Link href={link} className={styles.navigationItemLabel}>
        {title}
      </Link>
    </li>
  );
}
