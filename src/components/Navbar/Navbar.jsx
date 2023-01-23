import React from "react";
import Variants from "../Variants";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="variant fixed max-w-full h-18 flex overflow-x-auto overflow-y-hidden pl-4 pr-4 pt-4 min-x-full items-center z-10">
      <Variants text="ALL" />
      <Variants text="CSS" />
      <Variants text="HTML" />
      <Variants text="Tailwind" />
      <Variants text="Programs" />
      <Variants text="Design" />
      <Variants text="Website" />
      <Variants text="ReactJS" />
      <Variants text="UI" />
      <Variants text="Android" />
      <Variants text="Jetpack" />
      <Variants text="Bootstrap" />
      <Variants text="JavaScript" />
      <Variants text="PHP" />
      <Variants text="Git" />
      <Variants text="SQL" />
      <Variants text="React" />
      <Variants text="Flutter" />
      <Variants text="Tech" />
      <Variants text="Java" />
    </div>
  );
};

export default Navbar;
