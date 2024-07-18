import { useRouter } from "next/router";
import styles from "./FilesDisplay.module.scss";
import shortid from "shortid";
import axios from "axios";
import { useState } from "react";

type PropsType = {
  columnName: string;
  currentFile?: string;
  files: { name: string; type: string; isCanTransition: boolean }[];

  updateImage?: (texture16: string, texture32: string) => void;
};

export default function FilesDisplay(props: PropsType) {
  const router = useRouter();
  const [currentFile, setCurrentFile] = useState(props.currentFile || "");

  async function updateImage(addedPath: string, isCanTransition: boolean) {
    let newPathPieces: string[] = [addedPath];
    const queryPath = router.query.path;
    if (queryPath) {
      if (Array.isArray(queryPath) && queryPath.at(-1)!.endsWith(".png")) {
        queryPath.pop();
      }
      newPathPieces = [queryPath, addedPath].flat();
    }

    router.push(
      {
        pathname: router.asPath.split("?")[0],
        query: { path: newPathPieces },
      },
      undefined,
      props.updateImage ? { shallow: true } : {}
    );

    setCurrentFile(addedPath);
    if (props.updateImage) {
      const { data } = await axios.get<{
        status: "ok";
        data: [string, string];
      }>("/api/firebase/OLN/getImage", {
        params: { branch: router.query.branch, path: newPathPieces },
      });

      props.updateImage(data.data[0], data.data[1]);
    }
  }

  function getKey(name: string): string {
    return name === "-" ? shortid() : name;
  }

  return (
    <section className={styles.filesBlock}>
      <h2>{props.columnName}</h2>
      <ul>
        {props.files.map((item) => (
          <li
            className={`${styles[item.type]} ${
              currentFile.endsWith(".png") && currentFile === item.name
                ? styles.selected
                : ""
            }`}
            key={getKey(item.name)}
            onClick={() => updateImage(item.name, item.isCanTransition)}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
