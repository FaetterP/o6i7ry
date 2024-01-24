import Files from "Components/Files/Files";
import { GetServerSidePropsContext } from "next";

import { getFileContent, getFolderContent } from "services/firebase";
import { getPathPieces } from "utils/httpUtils";

type fileInfo = {
  name: string;
  type: string;
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
  let imageName = "";
  if (pathPieces.length > 0 && pathPieces.at(-1)!.endsWith(".png")) {
    imageName = pathPieces.pop()!;
  }
  const path: string =
    pathPieces.length === 0 ? "" : pathPieces.reduce((a, b) => `${a}/${b}`);

  const project = [ctx.query.project].flat()[0] || "OLN";
  const branch = [ctx.query.branch].flat()[0] || "Magic";

  const folderContent = await getFolderContent(project, `${branch}/${path}`);
  const folderContentOriginal = await getFolderContent(
    project,
    `${branch}-orig/${path}`
  );

  let [texture16, texture32]: string[] | undefined[] = [undefined, undefined];
  if (imageName) {
    try {
      texture16 = await getFileContent("OLN", branch + `/${path}/${imageName}`);
    } catch {}
    try {
      texture32 = await getFileContent(
        "OLN",
        branch + "-orig" + `/${path}/${imageName}`
      );
    } catch {}
  }

  const [files, filesOriginal] = solveFiles(
    folderContent,
    folderContentOriginal
  );

  return {
    props: JSON.parse(
      JSON.stringify({
        currentFile: imageName,
        path: pathPieces,
        files,
        filesOriginal,
        texture16,
        texture32,
      })
    ),
  };
}

function solveFiles(
  content: { name: string; isFolder: boolean }[],
  contentOriginal: { name: string; isFolder: boolean }[]
) {
  const filenames = content.map((item) => item.name);
  const filenamesOriginal = contentOriginal.map((item) => item.name);

  const allFiles = Array.from(new Set([...filenames, ...filenamesOriginal]));
  allFiles.sort();

  const files: fileInfo[] = [];
  const filesOriginal: fileInfo[] = [];

  allFiles.forEach((filename) => {
    const contentItem = content.find((item) => item.name === filename);
    const contentItemOriginal = contentOriginal.find(
      (item) => item.name === filename
    );

    let isCanTransition = false;
    if (contentItem && contentItemOriginal) {
      isCanTransition = true;
    }

    if (contentItem) {
      files.push({
        ...contentItem,
        type: getType(contentItem),
        isCanTransition,
      });
    } else {
      files.push({ name: "-", type: "notExists", isCanTransition });
    }

    if (contentItemOriginal) {
      filesOriginal.push({
        ...contentItemOriginal,
        type: getType(contentItemOriginal),
        isCanTransition,
      });
    } else {
      filesOriginal.push({ name: "-", type: "notExists", isCanTransition });
    }
  });

  return [files, filesOriginal];
}

function getType({
  name,
  isFolder,
}: {
  name: string;
  isFolder: boolean;
}): string {
  if (isFolder) {
    return "folder";
  }
  if (name.endsWith(".png")) {
    return "image";
  }
  if (name.endsWith(".txt")) {
    return "text";
  }
  if (name === "-") {
    return "notExists";
  }

  return "undefinedType";
}

// async function getContent(
//   project: string,
//   branch: string,
//   path: string
// ): Promise<string[]> {
//   const originalContent = await getFileContent(project, branch, path);
//   const content = await getFileContent(project, `${branch}-orig`, path);

//   return [originalContent, content];
// }
