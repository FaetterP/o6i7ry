import Link from "next/link";
import styles from "./UnityList.module.scss";

type PropsType = {
  icon: string;
  title: string;
  link: string;
};

export default function ListItem({ icon, title, link }: PropsType) {
  return (
    <article className={styles.item}>
      <Link href={`/projects/unity/${link}`}>
        <span className="material-icons">{icon}</span>
        <h3>{title}</h3>
      </Link>
    </article>
  );
}
