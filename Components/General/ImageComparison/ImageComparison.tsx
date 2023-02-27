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

  return (
    <>
      <div className={styles.imageComparisonBlock}>
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
