import ModsTutorial from "Components/ModsGuide/ModsTutorial";
import { GetServerSidePropsContext } from "next";
import { getModsGuide } from "services/firebase";

export default function ModsGuidePage(
  props: Awaited<ReturnType<typeof getServerSideProps>>["props"]
) {
  return (
    <>
      <ModsTutorial {...props} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { pageName } = ctx.query;
  const page = await getModsGuide(pageName as string);
  
  return {
    props: page,
  };
}
