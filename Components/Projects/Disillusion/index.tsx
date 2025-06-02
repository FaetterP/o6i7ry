import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Disillusion.module.scss";

export default function Disillusion() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.body}>
      <nav className={`${styles.navigation} ${styles.paperBlock}`}>
        <Link href="/" className={`${styles.navButton} ${styles.btnBase} ${styles.btnHoverEffect} ${styles.blockText}`}>
          Главная
        </Link>
        <Link href="/projects" className={`${styles.navButton} ${styles.btnBase} ${styles.btnHoverEffect} ${styles.blockText}`}>
          Назад
        </Link>
      </nav>

      <div className={styles.container}>
        <header className={`${styles.header} ${styles.paperBlock}`}>
          <p className={`${styles.subtitle} ${styles.blockText}`}>
            Русификатор для{" "}
            <span className={`${styles.title} ${isLoaded ? styles.glitch : ""}`}>
              DISILLUSION
            </span>
          </p>
        </header>

        <div className={`${styles.textBlock} ${styles.paperBlock}`}>
          <p className={styles.blockText}>
            Переведены все диалоги. <br />
            Достижения в Steam всё ещё можно получать.
          </p>
        </div>

        <div className={`${styles.screenshots} ${styles.paperBlock}`}>
          <div className={styles.screenshotGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://github.com/FaetterP/Disillusion-Rus/assets/56697273/82db48e7-65cb-4579-bcb9-e926dbbe6b72"
                alt="Скриншот игры"
                width={400}
                height={300}
                className={styles.screenshotImg}
                priority
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="https://github.com/FaetterP/Disillusion-Rus/assets/56697273/e528087c-412f-472b-9965-0d9b39db3ce6"
                alt="Скриншот игры"
                width={400}
                height={300}
                className={styles.screenshotImg}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.linksSection} ${styles.paperBlock}`}>
          <div className={styles.retroButtons}>
            <a
              href="https://drive.google.com/drive/folders/1yp3F299wmwY7pQe4DPUfdLFHhU33SHkD?usp=drive_link"
              className={`${styles.downloadBtn} ${styles.btnBase} ${styles.btnHoverEffect} ${styles.blockText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.btnText}>СКАЧАТЬ РУСИФИКАТОР</span>
            </a>
            <a
              href="https://boosty.to/faetterp"
              className={`${styles.downloadBtn} ${styles.btnBase} ${styles.btnHoverEffect} ${styles.blockText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.btnText}>ПОДДЕРЖАТЬ АВТОРА</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.credits}>Made by FaetterP</div>
    </div>
  );
}