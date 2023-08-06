import Image from "next/image";
import styles from "./ProjectBlock.module.scss";

type PropsType = {
  src: string;
  title: string;
  type: string;
};

export default function ProjectPreview(props: PropsType) {
  return (
    <>
      <div className={styles.cardHolder}>
        <div className={styles.imageContainer}>
          <Image src={props.src} alt={props.title} width={180} height={180} />
        </div>
        <div className={styles.textContainer}>
          <h2 title={props.title}>{props.title}</h2>
          <h1>
            {"// "}
            {props.type}
          </h1>
        </div>
      </div>
    </>
  );
}
