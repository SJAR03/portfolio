// Technology icons data
export interface Technology {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "mobile" | "tools";
  iconUrl: string;
  mastery: "Really good at it" | "I can get better";
}

export const technologies: Technology[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    mastery: "I can get better",
  },
  {
    name: "TypeScript",
    category: "frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    mastery: "I can get better",
  },
  {
    name: "JavaScript",
    category: "frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    mastery: "I can get better",
  },
  {
    name: "Vite",
    category: "frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    mastery: "I can get better",
  },

  // Backend
  {
    name: "C#",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "Visual Basic",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg",
    mastery: "I can get better",
  },
  {
    name: ".Net",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "Java",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "Spring Boot",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "PHP",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    mastery: "I can get better",
  },
  {
    name: "Node.js",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    mastery: "I can get better",
  },
  {
    name: "Python",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    mastery: "I can get better",
  },
  {
    name: "WordPress",
    category: "backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    mastery: "I can get better",
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "database",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    mastery: "I can get better",
  },
  {
    name: "SQL Server",
    category: "database",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "MySQL",
    category: "database",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    mastery: "Really good at it",
  },

  // Cloud
  {
    name: "AWS",
    category: "cloud",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    mastery: "I can get better",
  },
  {
    name: "Docker",
    category: "cloud",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    mastery: "I can get better",
  },
  {
    name: "Digital Ocean",
    category: "cloud",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
    mastery: "Really good at it",
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
    mastery: "Really good at it",
  },
  {
    name: "Gitlab",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "Github",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "Proxmox",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/proxmox/proxmox-original-wordmark.svg",
    mastery: "I can get better",
  },
  {
    name: "Linux",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "Windows",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "Visual Studio",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg",
    mastery: "Really good at it",
  },
  {
    name: "VS Code",
    category: "tools",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    mastery: "Really good at it",
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
