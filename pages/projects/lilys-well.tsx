import LilysWell from "Components/Projects/LilysWell";

export default function LilysWellPage() {
  return <LilysWell />;
}

export async function getServerSideProps() {
  return {
    props: {
      disableLayout: true,
    },
  };
}
