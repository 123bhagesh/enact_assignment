import React from "react";
import { AiFillHome, AiOutlineSearch, AiFillPlayCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
export const BottomBar = () => {
  return (
    <div className="bottomBarContainer">
      {/* <div> */}
        <button>
          <AiFillHome />
        </button>
        <button>
          <AiOutlineSearch />
        </button>
        <button>
          <AiFillPlayCircle />
        </button>
        <button>
          <FaUserCircle />
        </button>
      {/* </div> */}
    </div>
  );
};
