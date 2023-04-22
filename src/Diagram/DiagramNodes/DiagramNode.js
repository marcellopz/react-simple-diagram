import React, { useContext, useEffect, useRef } from "react";
import NodeComponent from "./NodeComponent";
import { DiagramContext } from "../../context/DiagramContext";

export default function DiagramNode({ node }) {
  const ref = useRef();
  const { addNodeRef } = useContext(DiagramContext);
  const nodeId = node.id;

  useEffect(() => addNodeRef(nodeId, ref), [ref, nodeId, addNodeRef]);

  return (
    <div
      style={{
        position: "absolute",
        left: node.coordinates[0],
        top: node.coordinates[1],
      }}
    >
      <NodeComponent
        title={node.content.title}
        icon={node.content.icon}
        reff={ref}
      />
    </div>
  );
}
