import React from "react";
import Navbar from "../Navbar/Navbar";

const CardBlock = () => {
  return (
    <div className="card_block flex w-full">
      <Navbar />
      <div className="text-white w-full bg-black">Cards</div>
    </div>
  );
};

export default CardBlock;
