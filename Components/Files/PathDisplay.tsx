import { useRouter } from "next/router";
import styles from "./PathDisplay.module.scss";

type PropsType = {
  pathPieces: string[];
};

export default function PathDisplay({ pathPieces }: PropsType) {
  const router = useRouter();

  function goToPath(index: number) {
    router.push({
      pathname: router.asPath.split("?")[0],
      query: { path: pathPieces.slice(0, index + 1) },
    });
  }

  return (
    <ol className={styles.pathBlock}>
      <li onClick={() => goToPath(-1)}>{"/"}</li>
      {pathPieces.map((item, index) => (
        <li key={item} onClick={() => goToPath(index)}>
          {item}
        </li>
      ))}
    </ol>
  );
}
