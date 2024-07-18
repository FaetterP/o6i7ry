import Image from "next/image";
import styles from "./ProjectBlock.module.scss";

type PropsType = {
  src: string;
  title: string;
  type: string;
};

export default function ProjectPreview(props: PropsType) {
  return (
    <figure className={styles.cardHolder}>
      <div className={styles.imageContainer}>
        <img src={props.src} alt={props.title} width={180} height={180} />
      </div>
      <figcaption className={styles.textContainer}>
        <h2 title={props.title}>{props.title}</h2>
        <span>
          {"// "}
          {props.type}
        </span>
      </figcaption>
    </figure>
  );
}
