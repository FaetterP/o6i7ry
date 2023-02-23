import Files from "Components/Files/Files";
import { GetServerSidePropsContext } from "next";
import { getFolderContent } from "services/firebase";

type fileInfo = {
  name: string;
  isFolder: boolean;
  isCanTransition: boolean;
};

type PropsType = {
  path: string[];

  files?: fileInfo[];
  filesOriginal?: fileInfo[];

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

  const project = [ctx.query.project].flat()[0] || "OLN";
  const resOriginal = await getFolderContent(project, "Magic-orig", path);
  const res = await getFolderContent(project, "Magic", path);

  const filenames = res.map((item) => item.name);
  const filenamesOriginal = resOriginal.map((item) => item.name);

  const allFiles = Array.from(new Set([...filenames, ...filenamesOriginal]));

  const files: fileInfo[] = [];
  const filesOriginal: fileInfo[] = [];

  allFiles.forEach((filename) => {
    if (filenames.includes(filename) && filenamesOriginal.includes(filename)) {
      files.push({ name: filename, isFolder: true, isCanTransition: true });
      filesOriginal.push({
        name: filename,
        isFolder: true,
        isCanTransition: true,
      });
    } else if (filenames.includes(filename)) {
      files.push({ name: filename, isFolder: true, isCanTransition: false });
      filesOriginal.push({ name: "-", isFolder: true, isCanTransition: false });
    } else if (filenamesOriginal.includes(filename)) {
      files.push({ name: "-", isFolder: true, isCanTransition: false });
      filesOriginal.push({
        name: filename,
        isFolder: true,
        isCanTransition: false,
      });
    }
  });

  return {
    props: { path: pathPieces, files, filesOriginal },
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
