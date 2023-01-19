import React from "react";
import "./sidebar.css";
import {
  AiFillHome,
  AiFillClockCircle,
  AiFillLike,
  AiFillYoutube,
  AiFillSetting,
} from "react-icons/ai";
import { GiFilmStrip, GiTrophyCup, GiGamepad } from "react-icons/gi";
import { TbLivePhoto } from "react-icons/tb";
import { FaShopify } from "react-icons/fa";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdVideoLibrary,
  MdOutlineHistory,
  MdOutlineSmartDisplay,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="navbar w-1/10">
      <div>
        <AiFillHome color="rgb(82, 82, 82)" size={25} />
        <span>Home</span>
      </div>
      <div>
        <MdOutlineExplore color="rgb(82, 82, 82)" size={25} />
        <span>Explore</span>
      </div>
      <div>
        <MdOutlineSubscriptions color="rgb(82, 82, 82)" size={25} />
        <span>Subscription</span>
      </div>
      <hr />
      <div>
        <MdVideoLibrary color="rgb(82, 82, 82)" size={25} />
        <span>Library</span>
      </div>
      <div>
        <MdOutlineHistory color="rgb(82, 82, 82)" size={25} />
        <span>History</span>
      </div>
      <div>
        <MdOutlineSmartDisplay color="rgb(82, 82, 82)" size={25} />
        <span>Your videos</span>
      </div>
      <div>
        <AiFillClockCircle color="rgb(82, 82, 82)" size={25} />
        <span>Watch later</span>
      </div>
      <div>
        <AiFillLike color="rgb(82, 82, 82)" size={25} />
        <span>Liked videos</span>
      </div>
      <hr />
      <h2>MORE FROM YOUTUBE</h2>
      <div>
        <AiFillYoutube color="rgb(82, 82, 82)" size={25} />
        <span>YouTube Premium</span>
      </div>
      <div>
        <GiFilmStrip color="rgb(82, 82, 82)" size={25} />
        <span>Films</span>
      </div>
      <div>
        <GiGamepad color="rgb(82, 82, 82)" size={25} />
        <span>Gaming</span>
      </div>
      <div>
        <TbLivePhoto color="rgb(82, 82, 82)" size={25} />
        <span>Live</span>
      </div>
      <div>
        <FaShopify color="rgb(82, 82, 82)" size={25} />
        <span>Fashion & beauty</span>
      </div>
      <div>
        <TbLivePhoto color="rgb(82, 82, 82)" size={25} />
        <span>Learning</span>
      </div>
      <div>
        <GiTrophyCup color="rgb(82, 82, 82)" size={25} />
        <span>Sport</span>
      </div>
      <hr />
      <div>
        <AiFillSetting color="rgb(82, 82, 82)" size={25} />
        <span>Settings</span>
      </div>
      <div>
        <TbLivePhoto color="rgb(82, 82, 82)" size={25} />
        <span>Report history</span>
      </div>
      <div>
        <TbLivePhoto color="rgb(82, 82, 82)" size={25} />
        <span>Help</span>
      </div>
      <div>
        <TbLivePhoto color="rgb(82, 82, 82)" size={25} />
        <span>Send feedback</span>
      </div>
    </div>
  );
};

export default Sidebar;
