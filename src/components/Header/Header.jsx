import React from "react";
import { TbAlignJustified } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import {
  AiFillAudio,
  AiOutlineVideoCameraAdd,
  AiOutlineTable,
  AiFillBell,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../../images/youtube2.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header flex justify-between">
      <div className="flex w-1/6 items-center pl-3">
        <TbAlignJustified color="#fff" size={30} />
        <img className="w-1/1 h-6 pl-5 object-cover" src={logo} alt="logo" />
      </div>
      <div className="search_block flex w-1/2 items-center">
        <input
          className="h-7 w-full px-4 py-0 bg-neutral-900 text-white"
          type="text"
          placeholder="Search..."
        />
        <button className="search h-7 bg-neutral-600">
          <CiSearch color="#fff" size={20} />
        </button>
        <button className="pl-2">
          <AiFillAudio color="#fff" size={20} />
        </button>
      </div>
      <div className="flex w-40 pr-7 items-center justify-between">
        <AiOutlineVideoCameraAdd color="#fff" size={25} />
        <AiOutlineTable color="#fff" size={25} />
        <AiFillBell color="#fff" size={25} />
        <AiOutlineUser color="#fff" size={25} />
      </div>
    </div>
  );
};

export default Header;
