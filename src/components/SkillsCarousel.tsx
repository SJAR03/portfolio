import React, { useRef, useEffect, useState } from "react";
import { technologies } from "@/data/technologies";

const SkillsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // Duplicate the array for seamless scrolling
  const duplicatedSkills = [...technologies, ...technologies];

  useEffect(() => {
    let animationFrame: number;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      if (carouselRef.current) {
        setOffset((prev) => {
          const totalWidth = carouselRef.current!.scrollWidth / 2;
          const next = prev + speed;
          return next >= totalWidth ? 0 : next;
        });
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-background-secondary rounded-md border border-border-primary">
      <div
        ref={carouselRef}
        className="flex gap-8 py-6"
        style={{
          transform: `translateX(-${offset}px)`,
          transition: "transform 0s linear",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex flex-col items-center gap-2 min-w-[80px] hover-scale"
          >
            <div className="w-12 h-12 bg-background-tertiary rounded-md border border-card-border flex items-center justify-center hover:border-primary transition-colors">
              <img
                src={skill.iconUrl}
                alt={skill.name}
                className="w-8 h-8"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${skill.name}&background=6366f1&color=fff&size=32`;
                }}
              />
            </div>
            <span className="code-text text-xs text-center text-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
