import ProjectBlock from "./ProjectBlock";
import styles from "./Projects.module.scss";

export default function Component() {
  return (
    <>
      <div className={styles.projects}>
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
        <ProjectBlock title="title" type="type" src="/nuggetDiamond.png" />
      </div>
    </>
  );
}
