import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Calendar,
  MapPin,
  Award,
  Code,
  Server,
  Cloud,
  //Smartphone,
  Terminal,
  Monitor,
  CodeXml,
} from "lucide-react";
import { technologies, getTechnologiesByCategory } from "@/data/technologies";

const About: React.FC = () => {
  const { t } = useLanguage();

  const experiences = t("about.experience.items") as Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    technologies: string[];
  }>;

  const education = t("about.education.items") as Array<{
    degree: string;
    school: string;
    period: string;
    location: string;
  }>;

  // Map skill categories to their technologies
  const skillCategoriesConfig = [
    {
      key: "frontend",
      title: t("about.skills.frontend"),
      icon: <Monitor size={20} />,
      color: "accent-blue",
    },
    {
      key: "backend",
      title: t("about.skills.backend"),
      icon: <CodeXml size={20} />,
      color: "primary-purple",
    },
    {
      key: "database",
      title: t("about.skills.database"),
      icon: <Server size={20} />,
      color: "primary-purple",
    },
    {
      key: "cloud",
      title: t("about.skills.cloud"),
      icon: <Cloud size={20} />,
      color: "accent-cyan",
    },
    // {
    //   key: "mobile",
    //   title: "Mobile",
    //   icon: <Smartphone size={20} />,
    //   color: "accent-pink",
    // },
    {
      key: "tools",
      title: t("about.skills.tools"),
      icon: <Terminal size={20} />,
      color: "accent-orange",
    },
  ];

  const getTechnologyIcon = (techName: string) => {
    const tech = technologies.find((t) => t.name === techName);
    return (
      tech?.iconUrl ||
      `https://ui-avatars.com/api/?name=${techName}&background=6366f1&color=fff&size=24`
    );
  };

  return (
    <div className="min-h-screen bg-background pixel-grid pt-20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="modern-title mb-4">{t("about.title")}</h1>
          <p className="modern-subtitle max-w-2xl mx-auto">
            {t("about.intro")}
          </p>
        </div>

        <div className="space-y-16">
          {/* Experience Timeline - Ascending (Recent First) */}
          <section>
            <h2 className="modern-text text-xl mb-8 text-primary flex items-center gap-2 font-semibold">
              <Award size={20} />
              {t("about.experience.title")}
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="modern-card p-6 hover:bg-background-secondary transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="space-y-2">
                      <h3 className="modern-text text-lg text-primary font-semibold">
                        {exp.title}
                      </h3>
                      <p className="modern-text text-sm text-accent-blue font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 modern-text text-xs text-primary-purple-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="text-sm text-foreground space-y-1 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-background-tertiary px-3 py-1 rounded-md border border-card-border"
                      >
                        <img
                          src={getTechnologyIcon(tech)}
                          alt={tech}
                          className="w-4 h-4"
                        />
                        <span className="code-text text-xs text-foreground">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="modern-text text-xl mb-8 text-primary flex items-center gap-2 font-semibold">
              <Code size={20} />
              {t("about.education.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="modern-card p-6">
                  <h3 className="modern-text text-base text-primary font-semibold mb-2">
                    {edu.degree}
                  </h3>
                  <p className="modern-text text-sm text-accent-cyan font-medium mb-2">
                    {edu.school}
                  </p>
                  <div className="flex items-center justify-between modern-text text-xs text-primary-purple-muted">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Grid with Icons */}
          <section>
            <h2 className="modern-text text-xl mb-8 text-primary flex items-center gap-2 font-semibold">
              <Terminal size={20} />
              {t("about.skills.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategoriesConfig.map((category) => {
                const techs = getTechnologiesByCategory(category.key as any); // get technologies by category
                return (
                  <div
                    key={category.key}
                    className="modern-card p-6 hover:bg-background-secondary transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-${category.color}`}>
                        {category.icon}
                      </span>
                      <h3 className="modern-text text-base text-primary font-semibold">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {techs.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3"
                        >
                          <img
                            src={tech.iconUrl}
                            alt={tech.name}
                            className="w-5 h-5"
                          />
                          <span className="modern-text text-sm text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
