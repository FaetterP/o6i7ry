import ImageComparison from "Components/General/ImageComparison/ImageComparison";
import FilesDisplay from "./FilesDisplay";
import PathDisplay from "./PathDisplay";

type PropsType = {
  path: string[];

  files?: { name: string; type: string; isCanTransition: boolean }[];
  filesOriginal?: {
    name: string;
    type: string;
    isCanTransition: boolean;
  }[];

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
          <ImageComparison
            imageBase64={props.texture32!}
            imageOriginalBase64={props.texture16!}
          />
          <FilesDisplay files={props.files!} />
          <FilesDisplay files={props.filesOriginal!} />
        </div>
      </div>
    </>
  );
}
