import ImageComparison from "Components/General/ImageComparison/ImageComparison";
import ChooseBranch from "./ChooseBranch";
import FilesDisplay from "./FilesDisplay";
import PathDisplay from "./PathDisplay";
import styles from "./Files.module.scss";

type PropsType = {
  path: string[];
  currentFile?: string;

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
        <div className={styles.main}>
          <div className={styles.path}>
            <ChooseBranch />
            <PathDisplay pathPieces={props.path} />
            <ImageComparison
              imageBase64={props.texture32!}
              imageOriginalBase64={props.texture16!}
            />
          </div>

          <div className={styles.filesColumns}>
            <FilesDisplay
              files={props.files!}
              currentFile={props.currentFile}
            />
            <FilesDisplay
              files={props.filesOriginal!}
              currentFile={props.currentFile}
            />
          </div>
        </div>
      </div>
    </>
  );
}
