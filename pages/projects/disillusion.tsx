import Disillusion from "Components/Disillusion";

export default function LilysWellPage() {
  return <Disillusion />;
}

export async function getServerSideProps() {
  return {
    props: {
      disableLayout: true,
    },
  };
}
