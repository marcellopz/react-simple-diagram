import React, { useRef } from "react";
import PropTypes from "prop-types";
import DiagramProvider from "../context/DiagramContext";
import DiagramLinks from "./DiagramLinks/DiagramLinks";
import DiagramNodes from "./DiagramNodes/DiagramNodes";

function Diagram({ schema, scale, position }) {
  const canvasRef = useRef();
  return (
    <div
      ref={canvasRef}
      style={{
        height: "100%",
        width: "100%",
        transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <DiagramProvider schema={schema} canvasRef={canvasRef}>
        <DiagramLinks />
        <DiagramNodes />
      </DiagramProvider>
    </div>
  );
}

Diagram.propTypes = {
  schema: PropTypes.object,
};

export default Diagram;
