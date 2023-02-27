import { useRouter } from "next/router";
import styles from "./FilesDisplay.module.scss";
import shortid from "shortid";

type PropsType = {
  files: { name: string; type: string; isCanTransition: boolean }[];
};

export default function FilesDisplay({ files }: PropsType) {
  const router = useRouter();

  function goToPath(addedPath: string, isCanTransition: boolean) {
    if (!isCanTransition) {
      return;
    }

    let newPathPieces: string[] = [addedPath];
    const queryPath = router.query.path;
    if (queryPath) {
      if (
        Array.isArray(queryPath) &&
        queryPath.at(-1)!.endsWith(".png")
      ) {
        queryPath.pop();
      }
      newPathPieces = [queryPath, addedPath].flat();
    }

    router.push({
      pathname: router.asPath.split("?")[0],
      query: { path: newPathPieces },
    });
  }

  function getKey(name: string): string {
    return name === "-" ? shortid() : name;
  }

  return (
    <>
      <div className={styles.filesBlock}>
        {files.map((item) => (
          <div
            className={styles[item.type]}
            key={getKey(item.name)}
            onClick={() => goToPath(item.name, item.isCanTransition)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
