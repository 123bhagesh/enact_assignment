import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../Redux/action";
import styles from "./MovieDetail.module.css";

export const MovieDetail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  // console.log(param)
  const data = useSelector((store) => store.data);
  const [topMovies, setTopMovie] = useState([]);

  //   console.log("DATAaaaaa", data);

  const handleFilter = () => {
    // console.log("YYYYYY", year, country);
    let movies = [];
    data.filter((el) => {
      if (el.title >= param.detail) {
        //   movies.push(el);
        setTopMovie(el);
      }
    });
  };
  console.log("Latest MOVIES", topMovies);

  useEffect(() => {
    dispatch(getData());
    handleFilter();
  }, [param]);
  
  return (
    <div className={styles.movieDetailContainer}>
      <img
        style={{ width: "100%", overflow: "hidden" }}
        src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbamsmackpow.com%2Ffiles%2Fimage-exchange%2F2018%2F08%2Fie_23207.jpeg"
        alt="Poster"
      />
      <h3>Title: {topMovies.title}</h3>
      <h4>Date publish: {topMovies.date_published}</h4>
      <h4>Raiting: {topMovies.avg_vote}</h4>

      <p>Discription: {topMovies.description}</p>
    </div>
  );
};
