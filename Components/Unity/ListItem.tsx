import Link from "next/link";
import styles from "./UnityList.module.scss"

type PropsType = {
  icon: string;
  title: string;
  link: string;
};

export default function ListItem({ icon, title, link }: PropsType) {
    return(
        <div className={styles.item}>
            <span className="material-icons">{icon}</span>
            <Link href={`/projects/unity/${link}`}>{title}</Link>
        </div>
    )
}
