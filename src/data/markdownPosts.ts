export interface BlogPostMeta {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
  readTime: string;
}

export const blogPostsMeta: BlogPostMeta[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    date: "2024-01-15",
    summary:
      "Learn how to structure large-scale React applications using TypeScript, advanced patterns, and best practices for maintainable code.",
    tags: ["React", "TypeScript", "Frontend"],
    slug: "scalable-react-typescript",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Modern CSS Grid Layouts: Beyond the Basics",
    date: "2024-01-10",
    summary:
      "Explore advanced CSS Grid techniques and create responsive layouts that adapt beautifully to any screen size.",
    tags: ["CSS", "Frontend", "Design"],
    slug: "modern-css-grid-layouts",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Optimizing React Performance with Hooks",
    date: "2024-01-05",
    summary:
      "Dive deep into React Hooks optimization techniques, memoization strategies, and performance monitoring.",
    tags: ["React", "Performance", "Hooks"],
    slug: "react-performance-hooks",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "The Future of Web Development in 2024",
    date: "2024-01-01",
    summary:
      "Discover the latest trends, technologies, and frameworks that are shaping the future of web development.",
    tags: ["Trends", "Web Development", "Technology"],
    slug: "future-web-development-2024",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Building REST APIs with Node.js and Express",
    date: "2023-12-28",
    summary:
      "Complete guide to creating robust and scalable REST APIs using Node.js, Express, and modern backend practices.",
    tags: ["Node.js", "Backend", "API"],
    slug: "rest-apis-nodejs-express",
    readTime: "12 min read",
  },
  {
    id: "6",
    title: "Advanced Git Workflows for Teams",
    date: "2023-12-20",
    summary:
      "Master Git branching strategies, collaborative workflows, and best practices for team development.",
    tags: ["Git", "Workflow", "Team"],
    slug: "advanced-git-workflows",
    readTime: "9 min read",
  },
];

export const getPostBySlug = (slug: string): BlogPostMeta | undefined => {
  return blogPostsMeta.find((post) => post.slug === slug);
};

export const getRecentPosts = (limit: number = 3): BlogPostMeta[] => {
  return blogPostsMeta
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
