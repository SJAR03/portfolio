import React, { useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  isEmail?: boolean;
  email?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/SJAR03",
    icon: <FaGithub size={20} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sergioayerdis",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "Email",
    url: "mailto:sayerdisrodriguez@gmail.com",
    icon: <Mail size={20} />,
    isEmail: true,
    email: "sayerdisrodriguez@gmail.com",
  },
  //   {
  //     name: "Twitter",
  //     url: "https://twitter.com",
  //     icon: <FaTwitter size={20} />,
  //   },
];

const SocialLinks: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {socialLinks.map((link) => {
        if (link.isEmail && link.email) {
          return (
            <div key={link.name} className="relative group">
              <a
                href={link.url}
                className="pixel-card p-3 hover:bg-background-tertiary transition-all duration-200 flex items-center justify-center"
                title={link.name}
              >
                <span className="text-primary group-hover:text-primary-glow transition-colors">
                  {link.icon}
                </span>
              </a>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-auto transition-opacity duration-200 z-50">
                <div className="bg-background-tertiary text-primary px-4 py-3 rounded-full shadow-lg flex flex-col items-center min-w-[250px] max-w-[300px] text-center">
                  <span className="text-sm break-words">
                    {copied ? "¡Copiado! ✅" : link.email}
                  </span>
                  {!copied && (
                    <button
                      onClick={() => handleCopy(link.email!)}
                      className="mt-2 px-4 py-1 bg-primary text-black rounded-full text-xs hover:bg-primary-glow transition"
                    >
                      Copiar
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        }

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-card p-3 hover:bg-background-tertiary transition-all duration-200 group flex items-center justify-center"
            title={link.name}
          >
            <span className="text-primary group-hover:text-primary-glow transition-colors">
              {link.icon}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
