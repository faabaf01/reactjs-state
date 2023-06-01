import React from "react"

function Sidebar({ color, size, setColor, setSize }) {
  return (
    <div className="sidebar">
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        onClick={() => {
          setColor("pink");
          setSize(20);
        }}
      >
        Make the text 20px and pink
      </button>
    </div>
  );
}

export default Sidebar
