import { useEffect, useState } from "react";

interface SparkleConfig {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface UseSparklesProps {
  colors: {
    first: string;
    second: string;
  };
  sparklesCount: number;
}

export const useSparkles = ({ colors, sparklesCount }: UseSparklesProps) => {
  const [sparkles, setSparkles] = useState<SparkleConfig[]>([]);

  useEffect(() => {
    const generateStar = (): SparkleConfig => {
      const starX = `${Math.random() * 100}%`;
      const starY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 4;
      const scale = Math.random() * 1 + 0.3;
      const lifespan = Math.random() * 15 + 10;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateStar);
      setSparkles(newSparkles);
    };

    const updateStars = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar();
          } else {
            return { ...star, lifespan: star.lifespan - 0.1 };
          }
        }),
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 200);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return sparkles;
};