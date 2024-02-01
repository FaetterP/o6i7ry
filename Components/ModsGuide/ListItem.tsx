import Link from "next/link";
import styles from "./ModsList.module.scss";

type PropsType = {
  icon: string;
  title: string;
  link: string;
};

export default function ListItem({ icon, title, link }: PropsType) {
  return (
    <div className={styles.item}>
      <span className="material-icons">{icon}</span>
      <Link href={`/projects/mods-guide/${link}`}>{title}</Link>
    </div>
  );
}
