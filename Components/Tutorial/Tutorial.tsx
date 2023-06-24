import SyntaxHighlighter from "react-syntax-highlighter";
import styles from "./Tutorial.module.scss";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from 'rehype-raw'

type PropsType = {
  content: string;
};

export default function Tutorial(props: PropsType) {
  return (
    <>
      <ReactMarkdown
        className={styles.tutorialBlock}
        children={props.content}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={vs2015}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
  );
}
