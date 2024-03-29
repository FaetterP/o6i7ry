import EditPage from "Components/EditPage/EditPage";
import { GetServerSidePropsContext } from "next";
import { getUnityTutorial } from "services/firebase";
import config from "config";

export default function EditUnityTutorialPage(
  props: Awaited<ReturnType<typeof getServerSideProps>>["props"]
) {
  return (
    <EditPage
      {...props}
      page={props.pageName as string}
      host={props.host}
      endpoint="/api/firebase/saveUnity"
    />
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { pageName } = ctx.query;
  const page = await getUnityTutorial(pageName as string);
  const host = config.get<string>("server.host");

  return {
    props: { ...page, pageName, host },
  };
}
