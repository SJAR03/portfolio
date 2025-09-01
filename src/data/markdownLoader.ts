import frontMatter from "front-matter";

export interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readTime: string;
  slug: string;
  content: string;
}

// Load all .md files from /data/posts
export const importAllPosts = (): BlogPost[] => {
  const files = import.meta.glob("/src/data/posts/*.md", {
    eager: true,
    as: "raw",
  });

  const posts: BlogPost[] = Object.entries(files).map(([path, rawContent]) => {
    const fm = frontMatter(rawContent as string);

    const data = fm.attributes as any;

    return {
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      summary: data.summary || "",
      readTime: data.readTime || "",
      slug: data.slug || path.split("/").pop()?.replace(".md", "")!,
      content: fm.body,
    };
  });

  // Order posts by date
  posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return posts;
};
