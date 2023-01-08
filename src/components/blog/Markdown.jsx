import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const Markdown = () => {
  const [markdown, setMarkdown] = useState("");
  return (
    <div className="markdown">
      <div className="textarea-conatiner">
        <textarea
          name="markdown"
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>
      <ReactMarkdown
        children={markdown}
        className="show-markdown"
        remarkPlugins={[remarkGfm]}
        components={{
          em: ({ node, ...props }) => (
            <i style={{ color: "green" }} {...props} />
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
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Markdown;
