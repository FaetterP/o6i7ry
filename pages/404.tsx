import styles from "./404.module.scss";
import Image from "next/image";
import errorImage from "../public/404.svg";

export default function Page404() {
  return (
    <>
      <div className="wrapper">
        <div className={styles.centerBlock}>
          <div className={styles.errorImage}>
            <Image
              src={errorImage}
              alt="404 page not found"
              width={223}
              height={184}
            />
          </div>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
      </div>
    </>
  );
}
