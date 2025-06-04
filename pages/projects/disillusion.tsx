import Disillusion from "Components/Projects/Disillusion";

export default function DisillusionPage() {
  return <Disillusion />;
}

export async function getServerSideProps() {
  return {
    props: {
      disableLayout: true,
    },
  };
}
