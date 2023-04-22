import React, { useContext } from "react";
import { DiagramContext } from "../../context/DiagramContext";

function parsePxRem(str, div) {
  if (!str) {
    return;
  }
  if (typeof str === "number") {
    return str;
  }
  if (str.includes("px")) {
    return parseFloat(str.slice(0, -2));
  }
  if (str.includes("rem")) {
    return (
      parseFloat(str.slice(0, -3)) * parseFloat(getComputedStyle(div).fontSize)
    );
  }
  return str;
}

function getOffsetStartCoords(div) {
  const xOffset =
    parsePxRem(div.clientWidth, div) + 2 * parsePxRem(div.clientLeft, div);
  const yOffset =
    parsePxRem(div.clientHeight, div) / 2 + parsePxRem(div.clientTop, div);
  return [xOffset, yOffset];
}

function getOffsetEndCoords(div) {
  const yOffset =
    parsePxRem(div.clientHeight, div) / 2 + parsePxRem(div.clientTop, div);
  return [0, yOffset];
}

export default function DiagramLink({ link }) {
  const { nodes, nodeRefs } = useContext(DiagramContext);
  const start = nodes.filter((node) => node.id === link.input)[0];
  const end = nodes.filter((node) => node.id === link.output)[0];

  if (!nodeRefs[start.id]) {
    return null;
  }

  const startOffset = getOffsetStartCoords(nodeRefs[start.id].current);
  const endOffset = getOffsetEndCoords(nodeRefs[end.id].current);

  const startCoord = [
    start.coordinates[0] + startOffset[0],
    start.coordinates[1] + startOffset[1],
  ];

  const endCoord = [
    end.coordinates[0] + endOffset[0],
    end.coordinates[1] + endOffset[1],
  ];

  const dx = endCoord[0] - startCoord[0];
  const flexVar = 2;

  const control1 = [startCoord[0] + dx / flexVar, startCoord[1]];
  const control2 = [endCoord[0] - dx / flexVar, endCoord[1]];

  const d =
    `M ${startCoord[0]} ${startCoord[1]}` +
    ` C ${control1[0]} ${control1[1]},` +
    ` ${control2[0]} ${control2[1]},` +
    ` ${endCoord[0]} ${endCoord[1]}`;

  return (
    <g>
      {/* <circle cx={start.coordinates[0]} cy={start.coordinates[1]} r="5px" /> */}
      <path
        d={d}
        style={{
          pointerEvents: "stroke",
          stroke: "#dae1e7",
          strokeWidth: "0.5rem",
          fill: "transparent",
        }}
      ></path>
    </g>
  );
}
