import Files from "Components/Files/Files";
import { GetServerSidePropsContext } from "next";
import { getFolderContent } from "services/firebase";

type PropsType = {
  path: string[];

  files?: { name: string; isFolder: boolean }[];
  filesOriginal?: { name: string; isFolder: boolean }[];

  texture16?: string;
  texture32?: string;

  langEN?: string;
  langRU?: string;
};

export default function FilesProject(props: PropsType) {
  return (
    <>
      <Files {...props} />
    </>
  );
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: PropsType }> {
  const pathPieces = getPathPieces(ctx.query.path);
  const path: string =
    pathPieces.length === 0 ? "" : pathPieces.reduce((a, b) => `${a}/${b}`);

  const project = ctx.query.project as "OLN";
  const res = await getFolderContent(project, "TechnoMagic", path);
  return {
    props: { path: pathPieces, files: res },
  };
}

function getPathPieces(queryPath: string | string[] | undefined): string[] {
  let pathPieces: string[] = [];
  if (queryPath) {
    if (Array.isArray(queryPath)) {
      pathPieces = [...queryPath];
    } else {
      pathPieces = [queryPath];
    }
  }
  return pathPieces;
}
