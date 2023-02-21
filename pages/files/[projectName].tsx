import { getFolderContent } from "services/firebase";

type PropsType = {
  path: string[];
  files: { name: string; isFolder: boolean }[];
};

export default function FilesProject(props: PropsType) {
  return (
    <>
      <div>Hello</div>
    </>
  );
}

export async function getServerSideProps(
  ctx: any
): Promise<{ props: PropsType }> {
  const path = ctx.query.path;
  const res = await getFolderContent(
    "OLN",
    "TechnoMagic",
    "arcane_engineering/textures/items"
  );
  return {
    props: { path: [], files: res },
  };
}
