import React from "react";
import { AiFillHome, AiOutlineSearch, AiFillPlayCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import styles from './BottomBar.module.css'
export const BottomBar = () => {
  return (
    <div className={styles.bottomBarContainer}>
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
