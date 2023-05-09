import SyntaxHighlighter from "react-syntax-highlighter";
import styles from "./Tutorial.module.scss";
import shortid from "shortid";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { TutorialItemType } from "types/general";

type PropsType = {
  content: TutorialItemType[][];
};

export default function Tutorial({ content }: PropsType) {
  function getElement(element: TutorialItemType) {
    switch (element.type) {
      case "b":
        return <b>{element.text}</b>;
      case "s":
        return <s>{element.text}</s>;
      case "i":
        return <i>{element.text}</i>;
      case "title":
        return <h1 className={styles.title}>{element.text}</h1>;
      case "br":
        return <br />;
      case "hr":
        return <hr />;
      case "a":
        return <a href={element.link}>{element.name}</a>;
      case "text":
        return `${element.text}`;
      case "img":
        return <img src={element.src} />;
      case "code":
        return (
          <SyntaxHighlighter language="csharp" style={vs2015}>
            {element.code}
          </SyntaxHighlighter>
        );
      case "list":
        return (
          <ul>
            {element.items.map((item) => (
              <li key={shortid()}>{getElements([item])}</li>
            ))}
          </ul>
        );
    }
  }

  function getElements(content: TutorialItemType[][]) {
    return (
      <>
        {content.map((item) => (
          <div key={shortid()}>
            {item.map((element) => getElement(element))}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <div className={styles.tutorialBlock}>{getElements(content)}</div>
    </>
  );
}
