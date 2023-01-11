import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import app from "auth/auth.js";

console.log(app);

const Markdown = () => {
  const [markdown, setMarkdown] = useState("");

  const handleClick = async () => {
    try {
      await fetch(
        "https://my-project-46f18-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(markdown),
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

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
          h1: ({ node, ...props }) => (
            <h1
              style={{ marginBottom: "2rem", marginTop: "2rem" }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              style={{
                marginBottom: "1rem",
                marginTop: "1rem",
                letterSpacing: ".03rem",
                fontSize: "2rem",
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
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

export default Markdown;
