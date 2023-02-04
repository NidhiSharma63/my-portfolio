import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const MarkdownLib = ({ markdown, className }) => {
  return (
    <ReactMarkdown
      children={markdown}
      className={className}
      remarkPlugins={[remarkGfm]}
      components={{
        em: ({ node, ...props }) => <i style={{ color: "green" }} {...props} />,
        h1: ({ node, ...props }) => (
          <h1
            style={{
              marginBottom: "2rem",
              marginTop: "2rem",
              textAlign: "center",
              color: "var(--primary-cl)",
            }}
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            style={{
              marginBottom: "1.5rem",
              marginTop: "1.5rem",
              textAlign: "center",
              color: "var(--primary-cl)",
            }}
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            style={{
              marginBottom: "1rem",
              marginTop: "1rem",
              textAlign: "center",
              color: "var(--primary-cl)",
            }}
            {...props}
          />
        ),

        p: ({ node, ...props }) => (
          <p
            style={{
              marginBottom: "1rem",
              marginTop: "1rem",
              letterSpacing: ".03rem",
              fontSize: "3rem",
              fontFamily: "var(--ff-secondary)",
              color: "var(--text-cl)",
            }}
            {...props}
          />
        ),

        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              background="red"
              PreTag="div"
              style={dark}
              {...props}
              className="custom"
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default MarkdownLib;
