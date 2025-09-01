import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import {
  importAllPosts,
  type BlogPost as PostType,
} from "@/data/markdownLoader";

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const posts: PostType[] = importAllPosts();

  return (
    <div className="min-h-screen bg-background pixel-grid pt-20">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="modern-title mb-4">{t("blog.title")}</h1>
          <p className="modern-subtitle">{t("blog.subtitle")}</p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="modern-card p-6 hover:bg-background-secondary transition-colors animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Post Header */}
                <div className="space-y-3">
                  <h2 className="modern-text text-lg font-semibold text-primary group-hover:text-primary-glow transition-colors">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-3 code-text text-xs text-primary-purple-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-background-tertiary border border-card-border text-xs rounded code-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-foreground text-sm leading-relaxed">
                  {post.summary}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 modern-text text-xs text-primary hover:text-primary-glow transition-colors group/link font-medium"
                >
                  {t("blog.readMore")}
                  <ArrowRight
                    size={12}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
