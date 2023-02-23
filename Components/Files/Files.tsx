import FilesDisplay from "./FilesDisplay";
import PathDisplay from "./PathDisplay";

type PropsType = {
  path: string[];

  files?: { name: string; isFolder: boolean }[];
  filesOriginal?: { name: string; isFolder: boolean }[];

  texture16?: string;
  texture32?: string;

  langEN?: string;
  langRU?: string;
};

export default function Files(props: PropsType) {
  return (
    <>
      <div>
        <PathDisplay pathPieces={props.path} />
        <div style={{ display: "flex" }}>
          <FilesDisplay files={props.files!} />
          <FilesDisplay files={props.files!} />
        </div>
      </div>
    </>
  );
}
