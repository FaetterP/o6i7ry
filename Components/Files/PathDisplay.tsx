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
    <>
      <div className={styles.pathBlock}>
        <h1 onClick={() => goToPath(-1)}>{"/"}</h1>
        {pathPieces.map((item, index) => (
          <h1 onClick={() => goToPath(index)}>{item}</h1>
        ))}
      </div>
    </>
  );
}
