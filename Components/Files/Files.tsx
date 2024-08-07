import ImageComparison from "Components/General/ImageComparison/ImageComparison";
import FilesDisplay from "./FilesDisplay";
import PathDisplay from "./PathDisplay";
import styles from "./Files.module.scss";
import { useEffect, useState } from "react";

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

  langEN?: string[];
  langRU?: string[];
};

export default function Files(props: PropsType) {
  const [texture16, setTexture16] = useState(props.texture16);
  const [texture32, setTexture32] = useState(props.texture32);

  useEffect(() => {
    setTexture16(props.texture16);
    setTexture32(props.texture32);
  }, [props.texture16, props.texture32]);

  function updateImage(texture16: string, texture32: string) {
    setTexture16(texture16);
    setTexture32(texture32);
  }

  return (
    <div className={styles.main}>
      <section className={styles.path}>
        <PathDisplay pathPieces={props.path} />
        <ImageComparison
          imageBase64={texture32!}
          imageOriginalBase64={texture16!}
        />
      </section>

      <section className={styles.filesColumns}>
      <FilesDisplay
          columnName="16px"
          updateImage={
            props.currentFile && props.currentFile.endsWith(".png")
              ? updateImage
              : undefined
          }
          files={props.filesOriginal!}
          currentFile={props.currentFile}
        />
        <FilesDisplay
          columnName="32px"
          updateImage={
            props.currentFile && props.currentFile.endsWith(".png")
              ? updateImage
              : undefined
          }
          files={props.files!}
          currentFile={props.currentFile}
        />
      </section>
    </div>
  );
}
