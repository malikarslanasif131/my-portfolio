import React, { useState } from "react";
import "./CirclesAnimation.css";

const CirclesAnimation = () => {
  const [circles, setCircles] = useState([
    { id: 1, left: 10, top: 100 },
    { id: 2, left: 20, top: 100 },
    { id: 3, left: 55, top: 70 },
    { id: 4, left: 60, top: 30 },
    { id: 5, left: 65, top: 40 },
    { id: 6, left: 70, top: 50 },
    { id: 7, left: 75, top: 80 },
    { id: 8, left: 80, top: 90 },
    { id: 9, left: 85, top: 60 },
    { id: 10, left: 90, top: 20 },
    { id: 11, left: 95, top: 45 },
    { id: 12, left: 15, top: 75 },
    { id: 13, left: 25, top: 55 },
    { id: 14, left: 25, top: 85 },
    { id: 15, left: 30, top: 65 },
  ]);

  const handleMouseDown = (event, id) => {
    const index = circles.findIndex((circle) => circle.id === id);
    const offsetX = event.clientX - circles[index].left;
    const offsetY = event.clientY - circles[index].top;

    const handleMouseMove = (event) => {
      const updatedCircles = [...circles];
      updatedCircles[index] = {
        ...updatedCircles[index],
        left: event.clientX - offsetX,
        top: event.clientY - offsetY,
      };
      setCircles(updatedCircles);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <ul className="circles">
      {circles.map((circle) => (
        <li
          key={circle.id}
          style={{ left: `${circle.left}%`, top: `${circle.top}%` }}
          onMouseDown={(event) => handleMouseDown(event, circle.id)}
        ></li>
      ))}
    </ul>
  );
};

export default CirclesAnimation;
