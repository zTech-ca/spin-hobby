import React from "react";

export default function SquareWeb() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <iframe
        src="https://spinhobby.square.site/"
        title="Spin Hobby Square Store"
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
