import Projects from "Components/Projects/Projects";
import { getProjects } from "services/firebase";

export default function ProjectsPage(
  props: Awaited<ReturnType<typeof getServerSideProps>>["props"]
) {
  return (
    <>
      <Projects {...props} />
    </>
  );
}

export async function getServerSideProps() {
  const projects = await getProjects();
  return { props: { projects } };
}
