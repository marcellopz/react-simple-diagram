import React, { useContext } from "react";
import { DiagramContext } from "../../context/DiagramContext";

export default function DiagramCanvas() {
  const context = useContext(DiagramContext);
  return <div>DiagramCanvas</div>;
}
