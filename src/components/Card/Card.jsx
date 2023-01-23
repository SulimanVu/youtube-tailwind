import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
  return (
    <div className="flex flex-col space-y-3 cursor-pointer ">
      <div className="relative h-52 sm:h-36 w-full">
        <img
          src={require("../../images/ganesh.jpg")}
          alt=""
          className="relative h-full w-full object-cover"
        />
        <span className="absolute right-1 bottom-1 p-0.5 px-1 rounded-sm bg-black text-white text-xs bg-opacity-70">
          16:25
        </span>
      </div>
      <div className="user_info flex flex-col flex-auto space-y-1.5 mb-3">
        <div className="flex items-center space-x-3">
          <img src="" alt="" className="w-12 h-12 rounded-full object-cover" />
          <div className="flex items-start">
            <a className="text-sm text-bold text-white pr-1" href="#">
              This is YouTube Web UI Clone using TailwindCSS
            </a>
            <BsThreeDotsVertical size={20} color="#fff" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
