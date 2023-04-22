import React, { useContext } from "react";
import { DiagramContext } from "../../context/DiagramContext";
import DiagramLink from "./DiagramLink";

export default function DiagramLinks() {
  const { links } = useContext(DiagramContext);
  return (
    links &&
    links.length > 0 && (
      <svg style={{ height: "100%", width: "100%", zIndex: -1 }}>
        {links.map((link, i) => (
          <DiagramLink link={link} key={i} />
        ))}
      </svg>
    )
  );
}
