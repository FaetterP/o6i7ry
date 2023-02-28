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
        <div style={{ display: "flex" }}>
          <div style={{height:"100px", position:"sticky", top:"0"}}>
            <PathDisplay pathPieces={props.path} />
            <ImageComparison
              imageBase64={props.texture32!}
              imageOriginalBase64={props.texture16!}
            />
          </div>
          <FilesDisplay files={props.files!} />
          <FilesDisplay files={props.filesOriginal!} />
        </div>
      </div>
    </>
  );
}
