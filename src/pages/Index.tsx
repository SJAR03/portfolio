import { useLanguage } from "@/context/LanguageContext";
import { Download, ExternalLink, Globe } from "lucide-react";
import SkillsCarousel from "@/components/SkillsCarousel";
import SocialLinks from "@/components/SocialLinks";
import { getTechnologyByName, type Technology } from "@/data/technologies";
import pixelAvatar from "@/assets/avatar.jpg";

const Index = () => {
  const { t } = useLanguage();
  // Specific stack at current job
  const currentJobTechNames = [
    ".Net",
    "Java",
    "Spring Boot",
    "React",
    "SQL Server",
    "Docker",
    "Digital Ocean",
    "Gitlab",
  ];

  // Obtener los objetos Technology correspondientes
  const currentJobTechnologies = currentJobTechNames
    .map((name) => getTechnologyByName(name))
    .filter((tech): tech is Technology => tech !== undefined); // filter undefined

  const handleViewCV = () => {
    const cvUrl = "/cv.pdf";
    window.open(cvUrl, "_blank");
  };

  const handleDownloadCV = () => {
    const cvUrl = "/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Sergio_Ayerdis_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pixel-grid scanlines">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Card */}
          <div className="modern-card p-8 md:p-12 text-center space-y-8 animate-fade-in">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <img
                  src={pixelAvatar}
                  alt="Avatar"
                  className="w-24 h-24 md:w-32 md:h-32 hover-scale rounded-full border-4 border-primary animate-pulse"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>

              <div className="space-y-4">
                <h1 className="modern-title">
                  <span className="text-primary-purple-muted">
                    {t("home.greeting")}{" "}
                  </span>
                  <span className="text-primary typing-effect">
                    Sergio Ayerdis
                  </span>
                </h1>

                {/* Social Links */}
                <SocialLinks />

                <p className="modern-subtitle max-w-2xl mx-auto text-start">
                  {t("home.description")}
                </p>
              </div>
            </div>

            {/* Current Role - Enhanced */}
            <div className="modern-card p-8 bg-background-secondary">
              <div className="space-y-4">
                <p className="modern-text text-sm text-primary-purple-muted">
                  {t("home.currentRole")}
                </p>
                <div className="space-y-3">
                  <h2 className="modern-text text-xl font-bold text-primary">
                    {t("home.company")}
                  </h2>
                  <p className="modern-text text-sm text-foreground leading-relaxed">
                    {t("home.companyDescription")}
                  </p>

                  {/* Company Technologies */}
                  <div className="grid grid-cols-4 gap-3 pt-4 justify-items-stretch">
                    {currentJobTechnologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-background-tertiary px-3 py-2 rounded-md"
                      >
                        <img
                          src={tech.iconUrl}
                          alt={tech.name}
                          className="w-5 h-5"
                        />
                        <span className="code-text text-xs text-foreground">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Company Link */}
                  <a
                    href="https://www.flordecana.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 modern-text text-xs text-primary hover:text-primary-glow transition-colors"
                  >
                    <Globe size={14} />
                    {t("home.companyLink")}
                  </a>
                </div>
              </div>
            </div>

            {/* CV Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleViewCV}
                className="modern-button flex items-center gap-2"
              >
                <ExternalLink size={16} />
                {t("home.viewCV")}
              </button>
              <button
                onClick={handleDownloadCV}
                className="modern-button-secondary flex items-center gap-2"
              >
                <Download size={16} />
                {t("home.downloadCV")}
              </button>
            </div>

            {/* Skills Carousel */}
            <div className="space-y-4">
              <h3 className="modern-text text-lg text-primary-purple-muted font-semibold">
                {t("skills.title")}
              </h3>
              <SkillsCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
