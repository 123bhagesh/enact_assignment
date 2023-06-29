import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../Redux/action";

export const FilterMovies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams()
  console.log(Number(param.filter))
  const data = useSelector((store) => store.data);
  const [topMovies, setTopMovie] = useState([]);

//   console.log("DATAaaaaa", data);

  const handleFilter = () => {
    // console.log("YYYYYY", year, country);
    let movies = [];
    data.filter((el) => {
      if (el.year >= Number(param.filter) ) {
        movies.push(el);
      }
    setTopMovie(movies)
    })}
//   console.log("Latest MOVIES", topMovies);

    useEffect(()=>{
        dispatch(getData());
        handleFilter()
    },[])

  return (
    <div>
      {topMovies.map((media) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "110px",
            gap: "5%",
            marginTop: "10px",
          }}
          key={media.imdb_title_id}
          onClick={()=> navigate(`/movie-details/${media.title}`)}
        >
          <div style={{ width: "80px", height: "100px" }}>
            <img
              src="https://i.pinimg.com/236x/e1/f6/ba/e1f6ba2316b80194b0b309c3aefddedd.jpg"
              alt="Poster"
              style={{ width: "80px", height: "100px", overflow: "hidden" }}
            />
          </div>
          <div>
            <h4>{media.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
