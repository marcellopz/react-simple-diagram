import React from "react";

export default function NodeComponent({ title, icon, reff }) {
  return (
    <div
      style={{
        height: "80px",
        width: 150,
        border: "3px solid lightGray",
        borderRadius: 8,
      }}
      ref={reff}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "50px", width: "50px" }}>
          {typeof icon === "string" ? (
            <img src={icon} height="100%" width="100%" alt="icon" />
          ) : (
            React.cloneElement(icon, {
              style: { height: "100%", width: "100%" },
            })
          )}
        </div>
      </div>
      <div style={{ justifyContent: "center", display: "flex", marginTop: 5 }}>
        {title}
      </div>
    </div>
  );
}
