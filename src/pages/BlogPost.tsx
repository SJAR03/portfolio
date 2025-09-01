import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getPostBySlug } from "@/data/markdownPosts";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background pixel-grid pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="modern-title mb-4">Post Not Found</h1>
          <p className="modern-subtitle mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="modern-button">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Sample markdown content - in a real app, this would be loaded from files
  const sampleContent = `# ${post.title}

Welcome to this comprehensive guide on ${post.title.toLowerCase()}. This post will cover everything you need to know.

## Introduction

This is a detailed exploration of modern web development practices and techniques. We'll dive deep into the concepts that matter most for building scalable applications.

### Key Points

- **Performance**: Optimizing for speed and efficiency
- **Scalability**: Building applications that grow with your needs
- **Maintainability**: Writing code that's easy to understand and modify

## Code Example

Here's a simple React component example:

\`\`\`tsx
import React, { useState } from 'react';

const ExampleComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default ExampleComponent;
\`\`\`

## Best Practices

When working with modern web technologies, consider these important practices:

1. **Type Safety**: Use TypeScript for better development experience
2. **Component Design**: Keep components small and focused
3. **State Management**: Choose the right state management solution
4. **Performance**: Optimize bundle size and runtime performance

> **Note**: Always test your applications thoroughly across different devices and browsers.

## Advanced Techniques

For more advanced implementations, you can explore:

- Custom hooks for reusable logic
- Context API for global state
- Lazy loading for better performance
- Error boundaries for graceful error handling

## Conclusion

Building modern web applications requires a solid understanding of current best practices and tools. By following these guidelines, you can create applications that are both performant and maintainable.

For more resources, check out the official documentation and community forums.
`;

  return (
    <div className="min-h-screen bg-background pixel-grid pt-20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 modern-text text-sm text-primary hover:text-primary-glow transition-colors mb-8 group font-medium"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Blog
        </Link>

        {/* Blog Post */}
        <article className="modern-card p-8">
          {/* Post Header */}
          <header className="mb-8 space-y-4">
            <h1 className="modern-title">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 code-text text-sm text-primary-purple-muted">
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-2">
                <Tag size={14} />
                <div className="flex gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-background-tertiary border border-card-border text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-invert max-w-none">
            <MarkdownRenderer content={sampleContent} />
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <div className="modern-text text-sm text-primary-purple-muted">
            More posts coming soon!
          </div>
          <Link to="/blog" className="modern-button-secondary">
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
