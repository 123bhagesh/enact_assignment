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
    link: "/video",
  },
  {
    name: "You",
    icon: FaUserCircle,
    link: "/profile",
  },
];

export const BottomBar = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("/");

  const handleNavigateHome = () => {
    return navigate("/");
  };
  const handleNavigateSearch = () => {
    return navigate("/search");
  };
  const handleNavigateVideo = () => {
    return navigate("/video");
  };
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
      {/* <button
        onClick={handleNavigateHome}
        style={{ color: activeNav == `/` ? "yellow" : "rgb(240,240,240)" }}
      >
        <AiFillHome
          style={{
            width: "20px",
            height: "20px",
            marginTop: "10px",
          }}
        />
        <p>Home</p>
      </button>{" "}
      <button
        onClick={handleNavigateSearch}
        style={{
          color: activeNav == `/search` ? "yellow" : "rgb(240,240,240)",
        }}
      >
        <AiOutlineSearch
          style={{
            width: "20px",
            height: "20px",
            marginTop: "10px",
          }}
        />
        <p>Search</p>
      </button>{" "}
      <button
        onClick={handleNavigateVideo}
        style={{ color: activeNav == `/video` ? "yellow" : "rgb(240,240,240)" }}
      >
        <AiFillPlayCircle
          style={{
            width: "20px",
            height: "20px",
            marginTop: "10px",
          }}
        />
        <p>Video</p>
      </button>{" "}
      <button
        onClick={() => navigate(`/`)}
        style={{ color: activeNav == `/` ? "yellow" : "rgb(240,240,240)" }}
      >
        <FaUserCircle
          style={{
            width: "20px",
            height: "20px",
            marginTop: "10px",
          }}
        />
        <p>You</p>
      </button> */}
      {/* <a href="/">Home</a><a href="/search">Search</a><a href="/video">Video</a><a href=""></a> */}
    </div>
  );
};
