import React, { useContext } from "react";
import { DiagramContext } from "../../context/DiagramContext";
import DiagramNode from "./DiagramNode";

export default function DiagramNodes() {
  const { nodes } = useContext(DiagramContext);

  return (
    nodes &&
    nodes.length > 0 &&
    nodes.map((node) => <DiagramNode node={node} key={node.id} />)
  );
}
