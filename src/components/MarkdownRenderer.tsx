import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = "",
}) => {
  return (
    <div className={`prose max-w-none ${className}`}>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
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

          // Paragraphs
          p: ({ children }) => (
            <p className="text-foreground mb-4 leading-relaxed">{children}</p>
          ),

          // Inline code and code blocks
          code: ({ children, ...props }) => {
            return (
              <code className="code-text" {...props}>
                {children}
              </code>
            );
          },

          // The code block are rendered separately
          pre: ({ children, ...props }) => (
            <pre
              className="p-4 rounded-md overflow-x-auto my-4 border border-card-border bg-background-tertiary"
              {...props}
            >
              {children}
            </pre>
          ),

          // Lists
          ul: ({ children }) => (
            <ul className="text-foreground mb-4 pl-6 list-disc prose-invert">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="text-foreground mb-4 pl-6 list-decimal prose-invert">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="mb-2 leading-relaxed">{children}</li>
          ),

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary bg-background-secondary p-4 my-4 italic rounded">
              {children}
            </blockquote>
          ),

          // Links
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

          // Images
          img: ({ src, alt }) => (
            <div className="flex flex-col items-center my-6">
              <img
                src={src || ""}
                alt={alt || ""}
                className="rounded-md max-w-full border border-card-border"
              />
              {alt && (
                <p className="mt-2 text-sm text-center text-primary-purple-muted italic">
                  {alt}
                </p>
              )}
            </div>
          ),

          // Tables
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-card-border rounded-md">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-card-border px-4 py-2 bg-background-tertiary text-primary font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-card-border px-4 py-2 text-foreground">
              {children}
            </td>
          ),
        }}
      />
    </div>
  );
};

export default MarkdownRenderer;
