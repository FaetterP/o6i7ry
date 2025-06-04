import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./DisillusionST.module.scss";

export default function DisillusionST() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navButtons}>
        <Link href="/" className={styles.button}>
          Главная
        </Link>
        <Link href="/projects" className={styles.button}>
          Назад
        </Link>
      </div>

      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.titleMain}>DISILLUSION ST</h1>
          <div className={styles.decorativeLine}></div>
          <p className={styles.subtitle}>Перевод диалогов и текстур</p>
        </header>

        <div className={styles.contentSection}>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <Image
                src="https://github.com/FaetterP/Disillusion-ST-Rus/assets/56697273/ed518220-a240-4c11-ac1c-2b785b11ebbf"
                alt="Скриншот 1"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="https://github.com/user-attachments/assets/b16e5d1a-3112-48dc-ae49-41e6187b04bb"
                alt="Скриншот 2"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.downloadSection}>
          <Link href="https://github.com/FaetterP/Disillusion-ST-Rus/archive/refs/heads/main.zip" className={styles.button}>
            Скачать перевод
          </Link>
          <Link
            href="https://github.com/FaetterP/Disillusion-ST-Rus/"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            href="https://boosty.to/faetterp"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Поддержать на Boosty
          </Link>
        </div>
      </div>

      <div className={styles.credits}>Made by FaetterP & SNAFADRON</div>
    </div>
  );
}
