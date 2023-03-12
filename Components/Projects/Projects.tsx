import Link from "next/link";
import { Project } from "types/general";
import ProjectBlock from "./ProjectBlock";
import styles from "./Projects.module.scss";

type PropsType = {
  projects: Project[];
};

export default function Projects(props: PropsType) {
  return (
    <>
      <div className={styles.projects}>
        {props.projects.map((item) => (
          <Link key={item.name} href={`/projects/${item.urlName}`}>
            <ProjectBlock title={item.name} type={item.type} src={item.icon} />
          </Link>
        ))}
      </div>
    </>
  );
}
