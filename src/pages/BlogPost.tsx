import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import {
  importAllPosts,
  type BlogPost as PostType,
} from "@/data/markdownLoader";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const posts: PostType[] = importAllPosts();
  const post = posts.find((p) => p.slug === slug);

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

  return (
    <div className="min-h-screen bg-background pixel-grid pt-20">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 py-12 max-w-6xl">
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
        <article>
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
            <MarkdownRenderer content={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
