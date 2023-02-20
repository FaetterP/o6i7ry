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
      <div className={styles.projectPreview}>
        <div style={{ display: "flex" }}>
          <h2>{props.title}</h2> {"//"}
          {props.type}
        </div>
        <Image src={props.src} alt={props.title} width={180} height={180} />
      </div>
    </>
  );
}
