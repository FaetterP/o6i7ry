import Tutorial from "Components/Tutorial/Tutorial";
import styles from "./UnityTutorial.module.scss";

type PropsType = {
  content: string;
  moreContent: string;
  links: { name: string; link: string }[];
};

export default function UnityTutorial(props: PropsType) {
  return (
    <div className="wrapper">
      <section className={styles.tutorial}>
        <Tutorial content={props.content} />
      </section>

      {props.moreContent ? (
        <section className={styles.tutorial}>
          <hr className={styles.moreLine}/>
          <Tutorial content={props.moreContent} />
        </section>
      ) : (
        <></>
      )}
      {props.links ? (
        <section className={styles.links}>
          <hr className={styles.linksLine} />
          <h2>Ссылки</h2>
          <ul>
            {props.links.map((item) => (
              <li key={item.link}>
                <span>
                  {item.name}
                  {": "}
                </span>
                <a href={item.link}>{item.link}</a>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}
