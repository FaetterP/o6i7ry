import Projects from "Components/Projects/Projects";
import { getProjects } from "services/firebase";
import { Project } from "types/general";

type PropsType = {
  projects: Project[];
};

export default function ProjectsPage(props: PropsType) {
  return (
    <>
      <Projects {...props} />
    </>
  );
}

export async function getServerSideProps(): Promise<{ props: PropsType }> {
  const projects = await getProjects();
  return { props: { projects } };
}
