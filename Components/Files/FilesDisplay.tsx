import { useRouter } from "next/router";
import styles from "./FilesDisplay.module.scss";

type PropsType = {
  files: { name: string; isFolder: boolean; isCanTransition: boolean }[];
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
      if (Array.isArray(queryPath)) {
        newPathPieces = [...queryPath, addedPath];
      } else {
        newPathPieces = [queryPath, addedPath];
      }
    }

    router.push({
      pathname: router.asPath.split("?")[0],
      query: { path: newPathPieces },
    });
  }

  return (
    <>
      <div className={styles.filesBlock}>
        {files.map((item) => (
          <div
            key={item.name}
            onClick={() => goToPath(item.name, item.isCanTransition)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
