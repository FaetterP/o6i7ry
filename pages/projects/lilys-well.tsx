import LilysWell from "Components/LilysWell";

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
