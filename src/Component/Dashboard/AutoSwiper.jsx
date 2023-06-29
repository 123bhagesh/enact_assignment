import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";

export const AutoSwiper = () => {
  const data = useSelector((store) => store.data);
  const [topMovies, setTopMovie] = useState([]);
//   console.log("DATAaaaaa", data);
  function tipMoviesFun() {
    let movies = [];
    data.map((el, i) => {
      if (el.avg_vote > 7) {
        movies.push(el);
      }
    });
    setTopMovie(movies);
  }

  console.log("TOP MOVIES", topMovies);
  useEffect(() => {
    tipMoviesFun();
  }, [data]);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {topMovies.map((el) => (
          <SwiperSlide style={{display:'flex',flexDirection:'column'}}>
            <img style={{width:"90%",height:'250px',margin:'auto' }} src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="moviesImage" />
            <h5>{el.original_title}</h5>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
