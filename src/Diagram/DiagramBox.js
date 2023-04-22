import React, { useState } from "react";
import Diagram from "./Diagram";

export default function DiagramBox({ schema }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMoreZoom = () => {
    setScale((prev) => prev + 0.2);
  };

  const handleLessZoom = () => {
    setScale((prev) => {
      if (prev !== 0.2) {
        return prev - 0.2;
      }
      return prev;
    });
  };

  const handleMouseDown = (event) => {
    // Set the initial position of the mouse
    const initialMousePos = { x: event.clientX, y: event.clientY };

    // Create a function to handle the mousemove event
    const handleMouseMove = (event) => {
      // Calculate the difference between the current and initial mouse position
      const deltaX = event.clientX - initialMousePos.x;
      const deltaY = event.clientY - initialMousePos.y;

      // Update the position of the component
      setPosition({ x: position.x + deltaX, y: position.y + deltaY });
    };

    // Add the mousemove and mouseup event listeners to the document
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  return (
    <div
      style={{
        height: "600px",
        width: "1000px",
        border: "1px solid black",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseDown={handleMouseDown}
    >
      <button
        onClick={handleMoreZoom}
        style={{
          position: "absolute",
          right: "20px",
          top: "20px",
          width: "30px",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        +
      </button>
      <button
        onClick={handleLessZoom}
        style={{
          position: "absolute",
          right: "20px",
          top: "50px",
          width: "30px",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        -
      </button>
      <Diagram schema={schema} scale={scale} position={position} />
    </div>
  );
}
