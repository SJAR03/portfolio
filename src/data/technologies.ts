// Technology icons data
export interface Technology {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "mobile" | "tools";
  iconUrl: string;
}

export const technologies: Technology[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    category: "frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Vite",
    category: "frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },

  // Backend
  {
    name: ".Net",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    name: "Java",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "Node.js",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "database",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "SQL Server",
    category: "database",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
  },
  {
    name: "MySQL",
    category: "database",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },

  // Cloud
  {
    name: "AWS",
    category: "cloud",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Docker",
    category: "cloud",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Digital Ocean",
    category: "cloud",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
  },

  // Mobile
  //   {
  //     name: "React Native",
  //     category: "mobile",
  //     iconUrl:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  //   },
  //   {
  //     name: "Flutter",
  //     category: "mobile",
  //     iconUrl:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  //   },

  // Tools
  {
    name: "Git",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Gitlab",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  },
  {
    name: "Github",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Linux",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "VS Code",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

export const getTechnologiesByCategory = (
  category: Technology["category"]
): Technology[] => {
  return technologies.filter((tech) => tech.category === category);
};

export const getTechnologyByName = (name: string): Technology | undefined => {
  return technologies.find((tech) => tech.name === name);
};
