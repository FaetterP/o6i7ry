import About from "./Buttons/About";
import Contact from "./Buttons/Contact";
import Home from "./Buttons/Home";
import Projects from "./Buttons/Projects";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div>
        <ul className={styles.header}>
          <Home />
          <Projects />
          <About />
          <Contact />
        </ul>
      </div>
    </>
  );
}
