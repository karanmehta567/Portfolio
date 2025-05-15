import React, { useEffect, useState } from "react";

function Starbackground() {
  //ud,size,x,y,animation-duration list
  const [stars, setStar] = useState([]);
  const [meteors, setMeteor] = useState([]);
  useEffect(() => {
    generateStars();
    generateMeteors();

    const handlerResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handlerResize());
    return () => window.removeEventListener("resize", handlerResize);
  }, []);
  const generateStars = () => {
    const numberofStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 1000
    );
    const newStars = [];
    for (let i = 0; i < numberofStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStar(newStars);
  };
  const generateMeteors = () => {
    const numberofMeteor = 3;
    const newmeteors = [];
    for (let i = 0; i < numberofMeteor; i++) {
      newmeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteor(newmeteors);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 30 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
}

export default Starbackground;
