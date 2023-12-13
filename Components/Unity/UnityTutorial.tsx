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
      <div className={styles.tutorial}>
        <Tutorial content={props.content} />
      </div>

      {props.moreContent ? (
        <div className={styles.tutorial}>
          <Tutorial content={props.moreContent} />
        </div>
      ) : (
        <></>
      )}
      {props.links ? (
        <div className={styles.links}>
          <hr className={styles.linksLine} />
          <h1>Ссылки</h1>
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
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
