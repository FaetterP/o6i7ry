import DisillusionST from "Components/Projects/DisillusionST";

export default function DisillusionSTPage() {
  return <DisillusionST />;
}

export async function getServerSideProps() {
  return {
    props: {
      disableLayout: true,
    },
  };
}
