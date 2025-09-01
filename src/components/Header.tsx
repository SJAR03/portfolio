import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon } from "lucide-react";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-border pixel-card">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`modern-text text-sm transition-colors font-medium ${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary-glow"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className={`modern-text text-sm transition-colors font-medium ${
                isActive("/about")
                  ? "text-primary"
                  : "text-foreground hover:text-primary-glow"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/blog"
              className={`modern-text text-sm transition-colors font-medium ${
                isActive("/blog")
                  ? "text-primary"
                  : "text-foreground hover:text-primary-glow"
              }`}
            >
              {t("nav.blog")}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="lang-selector hover:text-primary transition-colors"
              title="Toggle Language"
            >
              {t("lang.toggle")}
            </button>

            <button
              onClick={toggleTheme}
              className="theme-toggle flex items-center gap-1"
              title={t("theme.toggle")}
            >
              {theme === "dark" ? <Sun size={12} /> : <Moon size={12} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
