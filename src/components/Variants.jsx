import React from "react";
import "./Navbar/navbar.css";

const Variants = ({ text }) => {
  return (
    <div className="v_child h-8 text-center rounded-2xl text-white bg-gray-700 px-4 py-1 mx-2">
      {text}
    </div>
  );
};

export default Variants;
