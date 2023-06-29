import React, { useState } from "react";
import { AiFillHome, AiOutlineSearch, AiFillPlayCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import styles from "./BottomBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const navItem = [
  {
    name: "Home",
    icon: AiFillHome,
    link: "/",
  },
  {
    name: "Search",
    icon: AiOutlineSearch,
    link: "/search",
  },
  {
    name: "Video",
    icon: AiFillPlayCircle,
    link: "#",
  },
  {
    name: "You",
    icon: FaUserCircle,
    link: "#",
  },
];

export const BottomBar = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("/");

  return (
    <div className={styles.bottomBarContainer}>
      {navItem.map((el, i) => (
        <button
          key={i}
          onClick={() => (navigate(`${el.link}`), setActiveNav(`${el.link}`))}
          style={{ color: activeNav== `${el.link}` ? "yellow" : "rgb(240,240,240)"}}
        >
          <el.icon
            style={{
              width: "20px",
              height: "20px",
              marginTop: "10px",
            }}
          />
          <p>{el.name}</p>
        </button>
      ))}
      
    </div>
  );
};
