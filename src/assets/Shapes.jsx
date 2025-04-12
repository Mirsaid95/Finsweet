import React from "react";

const Shapes = () => {
  return (
    <div>
      <svg
        width="{10}"
        height="{10}"
        viewBox="0 0 300 30 "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 11.4074V0H28V11.4074H0Z" fill="#666DFF" />
        <path d="M0 27.9999V19.7036H7.72414V27.9999H0Z" fill="#666DFF" />
        <path d="M0 19.7037V0H18.3448V19.7037H0Z" fill="#FFA155" />
        <path d="M7.72461 11.4074V0H18.3453V11.4074H7.72461Z" fill="#FFD3AF" />
      </svg>
    </div>
  );
};

export default Shapes;
