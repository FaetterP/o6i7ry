import { useState, useEffect } from "react";
import styles from "./LilysWell.module.scss";

export default function LilysWell() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalImageSrc, setModalImageSrc] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (src: string): void => {
    setModalImageSrc(src);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setModalImageSrc("");
  };

  useEffect(() => {
    if (!mounted) return;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [modalOpen, mounted]);

  if (!mounted) {
    return <div className={styles.loading}>Loading Lily's Well Page...</div>;
  }

  const screenshots = [
    {
      src: "https://github.com/FaetterP/Lily-s-Well-Rus/assets/56697273/6c1c0620-dbb2-4eb1-81dc-d5d61fa66d61",
      alt: "Main menu",
    },
    {
      src: "https://github.com/FaetterP/Lily-s-Well-Rus/assets/56697273/31fb77f8-107b-4da2-a7f6-34c1842af6f9",
      alt: "Items menu",
    },
    {
      src: "https://github.com/FaetterP/Lily-s-Well-Rus/assets/56697273/23c10e49-60fd-416f-888c-5992cc5dd6cc",
      alt: "Touch items",
    },
  ];

  const downloadLinks = [
    {
      href: "https://github.com/FaetterP/Lily-s-Well-Rus/archive/refs/heads/main.zip",
      text: "СКАЧАТЬ РУСИФИКАТОР",
      className: styles.downloadButton,
    },
    {
      href: "https://steamcommunity.com/sharedfiles/filedetails/?id=3179462223",
      text: "STEAM GUIDE",
      className: styles.steamButton,
    },
    {
      href: "https://github.com/FaetterP/Lily-s-Well-Rus",
      text: "GITHUB",
      className: styles.githubButton,
    },
    {
      href: "https://boosty.to/faetterp",
      text: "ПОДДЕРЖАТЬ АВТОРА",
      className: styles.supportButton,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOverlay} />
        <div className={styles.scanlines} />
      </div>

      <nav className={styles.navigation}>
        <a href="/" className={styles.navLink}>
          Главная
        </a>
        <a href="/projects" className={styles.navLink}>
          Назад
        </a>
      </nav>

      <main className={styles.mainContainer}>
        <div className={styles.contentBox}>
          <div className={styles.borderGradient} />

          <div className={styles.cornerDecoration} data-position="top-left" />
          <div className={styles.cornerDecoration} data-position="top-right" />
          <div
            className={styles.cornerDecoration}
            data-position="bottom-left"
          />
          <div
            className={styles.cornerDecoration}
            data-position="bottom-right"
          />

          <header className={styles.titleSection}>
            <h1 className={styles.title}>
              Русификатор для{" "}
              <span className={styles.titleHighlight}>Lily's Well</span> v2.0.1
            </h1>
            <div className={styles.description}>
              Полный перевод текста и текстур.
              <br />
              Достижения в Steam всё ещё можно получать.
            </div>
          </header>

          <section className={styles.screenshotsSection}>
            <div className={styles.screenshotsGrid}>
              {screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className={styles.screenshot}
                  onClick={() => openModal(screenshot.src)}
                />
              ))}
            </div>
          </section>

          <section className={styles.downloadSection}>
            <div className={styles.buttonGroup}>
              {downloadLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${link.className}`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </section>

          <footer className={styles.footerInfo}>
            Нашли ошибку? Напишите на GitHub Issues или faettterp@gmail.com
          </footer>
        </div>
      </main>

      <div className={styles.credits}>Made by FaetterP</div>

      {modalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalCloseButton} onClick={closeModal}>
              ×
            </button>
            <img
              src={modalImageSrc}
              alt="Увеличенный скриншот"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};
