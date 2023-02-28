import Image from "next/image";
import { useState } from "react";
import styles from "./ImageComparison.module.scss";

type PropsType = {
  imageOriginalBase64: string;
  imageBase64: string;
};

export default function ImageComparison({
  imageBase64,
  imageOriginalBase64,
}: PropsType) {
  const [isOriginal, setIsOriginal] = useState(false);

  function changeView() {
    setIsOriginal(!isOriginal);
  }

  if (!imageBase64 && !imageOriginalBase64) {
    return <></>;
  }

  return (
    <>
      <div className={styles.imageComparisonBlock}>
        <div className={styles.changeViewToOriginalButton} onClick={changeView}>
          {isOriginal ? "32" : "16"}
        </div>
        <Image
          src={`data:image/png;base64, ${
            isOriginal ? imageOriginalBase64 : imageBase64
          }`}
          alt="Image"
          width={340}
          height={340}
        />
      </div>
    </>
  );
}
