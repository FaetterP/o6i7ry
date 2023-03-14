import SyntaxHighlighter from "react-syntax-highlighter";
import styles from "./Tutorial.module.scss";
import shortid from "shortid";

type ItemType =
  | { type: "br" }
  | { type: "b"; text: string }
  | { type: "text"; text: string }
  | { type: "img"; src: string }
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
      case "br":
        return <br />;
      case "text":
        return `${element.text}`;
      case "img":
        return <img src={element.src} />;
      case "code":
        return (
          <SyntaxHighlighter language="csharp">
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
          <div key={shortid()}>{item.map((element) => getElement(element))}</div>
        ))}
      </>
    );
  }

  return (
    <>
      <h1>{title}</h1>
      <div className={styles.tutorialBlock}>{getElements(content)}</div>
    </>
  );
}
