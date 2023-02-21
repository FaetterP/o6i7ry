import { getFolderContent } from "services/firebase";

export default function MainPage() {
  return <div>Hello</div>;
}

export function getServerSideProps() {
  getFolderContent("OLN", "TechnoMagic", "arcane_engineering/textures/items");
  return {
    props: {},
  };
}
