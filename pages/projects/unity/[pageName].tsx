import UnityTutorial from "Components/Tutorial/Tutorial";
import { GetServerSidePropsContext } from "next";
import { getUnityTutorial } from "services/firebase";

export default function UnityTutorialPage(props: any) {
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
