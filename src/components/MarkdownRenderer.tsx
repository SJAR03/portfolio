import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = "",
}) => {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="modern-text text-3xl font-bold text-primary mb-6 mt-8">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="modern-text text-2xl font-semibold text-primary mb-4 mt-6">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="modern-text text-xl font-semibold text-primary mb-3 mt-5">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-foreground mb-4 leading-relaxed">{children}</p>
          ),
          code: ({ inline, children, className, ...props }: any) => {
            if (inline) {
              return (
                <code
                  className="code-text bg-background-secondary text-primary px-2 py-1 rounded text-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className="code-text block bg-background-secondary p-4 rounded-md overflow-x-auto text-sm"
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-background-secondary p-4 rounded-md overflow-x-auto my-4 border border-card-border">
              {children}
            </pre>
          ),
          ul: ({ children }) => (
            <ul className="text-foreground mb-4 pl-6">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="text-foreground mb-4 pl-6">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="mb-2 leading-relaxed">
              <span className="text-primary">•</span> {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary bg-background-secondary p-4 my-4 italic">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary hover:text-primary-glow underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-md my-4 max-w-full border border-card-border"
            />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-card-border rounded-md">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-card-border px-4 py-2 bg-background-secondary text-primary font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-card-border px-4 py-2 text-foreground">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
