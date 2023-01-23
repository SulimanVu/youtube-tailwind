import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import "./cardblock.css";

const CardBlock = () => {
  return (
    <div className="flex flex-col lg:ml-60 w-full lg:w-4/5 xl:w-5/6">
      <Navbar />
      <div className="cards text-w hite w-11/12 mx-auto flex justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardBlock;
