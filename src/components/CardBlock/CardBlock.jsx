import React from "react";
import Navbar from "../Navbar/Navbar";

const CardBlock = () => {
  return (
    <div className="card_block relative flex w-full min-h-full bg-black">
      <Navbar />
      <div className="text-w  hite w-full">Cards</div>
    </div>
  );
};

export default CardBlock;
