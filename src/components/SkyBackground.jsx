import { useEffect, useState } from "react";

export const SkyBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [clouds, setClouds] = useState([]); 

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateClouds();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🌌 Stars
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  // ☄️ Meteors
  const generateMeteors = () => {
    const numberOfMeteors = 5; 
    const newMeteors = []; 
    for (let i = 0; i < numberOfMeteors; i++) { newMeteors.push(randomMeteor(i)); } setMeteors(newMeteors);
  };

  const randomMeteor = (id) => ({
    id,
    spawnId: Math.random(),
    size: Math.random() * 1 + 1,
    x: Math.random() * 100,
    y: Math.random() * 20,
    delay: Math.random() * 15,
    animationDuration: Math.random() * 3 + 3,
  });

  const handleMeteorEnd = (id) => {
    setMeteors((prev) =>
      prev.map((m) => (m.id === id ? randomMeteor(id) : m))
    );
  };

  // ☁️ Clouds
  const generateClouds = () => {
    const numberOfClouds = 6;
    setClouds(Array.from({ length: numberOfClouds }, (_, i) => randomCloud(i)));
  };

  const randomCloud = (id) => ({
    id,
    spawnId: Math.random(),
    top: Math.random() * 80, // random vertical placement
    size: 120 + Math.random() * 100, // varied width
    duration: 20 + Math.random() * 20, // slower drift
  });

  const handleCloudEnd = (id) => {
    setClouds((prev) =>
      prev.map((c) => (c.id === id ? randomCloud(id) : c))
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* ⭐ Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* ☄️ Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id + "-" + meteor.spawnId}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            position: "absolute",
          }}
          onAnimationEnd={() => handleMeteorEnd(meteor.id)}
        />
      ))}

      {/* ☁️ Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id + "-" + cloud.spawnId}
          className="cloud"
          style={{
            top: `${cloud.top}%`,
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            animationDuration: `${cloud.duration}s`,
          }}
          onAnimationEnd={() => handleCloudEnd(cloud.id)}
        >
          {/* Extra random wisps */}
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="puff"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 30}px`,
                left: `${-10 + Math.random() * 120}%`,
                top: `${-20 + Math.random() * 60}%`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
