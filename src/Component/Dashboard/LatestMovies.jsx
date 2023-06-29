import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { useSelector } from "react-redux";

export const LatestMovies = () => {
  const data = useSelector((store) => store.data);
  const [topMovies, setTopMovie] = useState([]);
  console.log("DATAaaaaa", data);
  function tipMoviesFun() {
    let movies = [];
    data.map((el, i) => {
      if (el.year > 1916) {
        movies.push(el);
      }
    });
    setTopMovie(movies);
  }
  console.log("Latest MOVIES", topMovies);
  useEffect(() => {
    tipMoviesFun();
  }, [data]);

  return (
    <>
      <div style={{width:'90%',margin:'auto'}}>
        <h2 style={{textAlign:'left'}}>Latest Movies</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {topMovies.map((el) => (
          <SwiperSlide style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ width: "90%", height: "200px", margin: "auto" }}
              src="https://plus.unsplash.com/premium_photo-1661700093968-b538c5a9f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="moviesImage"
            />
            <h5 style={{marginBottom:"60px"}}>{el.title}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
