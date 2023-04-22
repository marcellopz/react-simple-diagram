import { createContext, useCallback, useState } from "react";

export const DiagramContext = createContext();

export default function DiagramProvider({ children, schema, canvasRef }) {
  const nodes = schema.nodes;
  const links = schema.links;
  const [nodeRefs, setNodeRefs] = useState({});

  const addNodeRef = useCallback((id, newRef) => {
    setNodeRefs((prev) => {
      return {
        ...prev,
        [id]: newRef,
      };
    });
  }, []);

  return (
    <DiagramContext.Provider
      value={{
        canvasRef,
        links,
        nodes,
        nodeRefs,
        addNodeRef,
      }}
    >
      {children}
    </DiagramContext.Provider>
  );
}
