import SyntaxHighlighter from "react-syntax-highlighter";
import styles from "./Tutorial.module.scss";

type PropsType = {
  title: string;
  content: (
    | { type: "br" }
    | { type: "b"; text: string }
    | { type: "text"; text: string }
    | { type: "img"; src: string }
    | { type: "code"; code: string }
  )[][];
};

export default function UnityTutorialPage({ content, title }: PropsType) {
  function getElement(element: any) {
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
    }
  }

  return (
    <>
      <h1>{title}</h1>
      <div className={styles.tutorialBlock}>
        {content.map((item) => (
          <div>
            {item.map((element) => (
              getElement(element)
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
