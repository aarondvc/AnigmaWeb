import { useEffect, useState } from "react";

export const SkyAssets = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    // Generate initial clouds
    const initialClouds = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      top: Math.random() * 80 + 10, // random vertical position (%)
      delay: Math.random() * 20, // staggered start
      duration: 40 + Math.random() * 30, // speed variation
    }));
    setClouds(initialClouds);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud"
          style={{
            top: `${cloud.top}%`,
            animationDelay: `${cloud.delay}s`,
            animationDuration: `${cloud.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
