import SyntaxHighlighter from "react-syntax-highlighter";
import styles from "./Tutorial.module.scss";
import shortid from "shortid";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

type ItemType =
  | { type: "br" }
  | { type: "hr" }
  | { type: "text"; text: string }
  | { type: "title"; text: string }
  | { type: "b"; text: string }
  | { type: "s"; text: string }
  | { type: "i"; text: string }
  | { type: "img"; src: string }
  | { type: "a"; link: string; name: string }
  | { type: "code"; code: string }
  | { type: "list"; items: ItemType[][] };

type PropsType = {
  title: string;
  content: ItemType[][];
};

export default function UnityTutorial({ content, title }: PropsType) {
  function getElement(element: ItemType) {
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

  function getElements(content: ItemType[][]) {
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
