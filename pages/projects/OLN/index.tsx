import OLN from "Components/OLN/OLN";
import { GetServerSidePropsContext } from "next";
import { getOLN } from "services/firebase";

export default function OLNPage(
  props: Awaited<ReturnType<typeof getServerSideProps>>["props"]
) {
  return (
    <>
      <OLN categories={props.categories} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const data = await getOLN();
  return {
    props: data,
  };
}
