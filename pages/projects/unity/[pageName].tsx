import UnityTutorial from "Components/Unity/UnityTutorial";
import { GetServerSidePropsContext } from "next";
import { getUnityTutorial } from "services/firebase";

export default function UnityTutorialPage(
  props: Awaited<ReturnType<typeof getServerSideProps>>["props"]
) {
  return (
    <>
      <UnityTutorial {...props} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { pageName } = ctx.query;
  const page = await getUnityTutorial(pageName as string);

  return {
    props: page,
  };
}
