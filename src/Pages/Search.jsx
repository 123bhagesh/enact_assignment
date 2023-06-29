import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const countrylist = [
  "Canada",
  "France",
  "Germany",
  "India",
  "Italy",
  "Japan",
  "Spain",
  "United Kingdom",
  "United States",
];
const yearlist = [1918, 1996, 1914, 1912, 1910, 1908, 1906, 1904, 1902];
export const Search = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);

  const [country, setCountry] = useState("");
  const [year, setYear] = useState(null);

  console.log("DATAaaaaa", data);
  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleFilter = () => {
    if(year || country){
      navigate(`/filter/${year || country}`)
    }
    else{
      alert("Add Year or Country to Filter")
    }
  };
  const handleClear = () => {
    setCountry("");
    setYear();
    // console.log("CCCCCCCC", year, country);
  };

  // console.log("TTTTTTTTTTTTTTt", topMovies);
/////////////////////////////////////////////////
  const [query, setQuery] = useState("");
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    const delay = setTimeout(search, 500); // Delay in milliseconds before performing search
    return () => clearTimeout(delay); // Cleanup function to clear the timeout on unmount or query change
  }, [query]);

  const search = () => {
    if (query === "") {
      setMedias([]); // Clear the medias when the query is empty
    } else {
      const filteredMedias = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setMedias(filteredMedias);
    }
  };

  const onQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };


  return (
    <div className={styles.searchContainer}>
      <input
        placeholder="Search IMDb"
        type="text"
        autoFocus
        onChange={onQueryChange}
        value={query}
      />
{/* {medias.length === 0 ? (
          <div>No results found.</div>
        ) : (
          <div> */}
            {medias.map((media) => (
              <div style={{display:"flex",width:"100%",height:"110px",gap:"5%",marginTop:'10px'}} key={media.imdb_title_id} onClick={()=> navigate(`/movie-details/${media.title}`)}>
                <div style={{ width: "80px",height:"100px" }}>
                  <img
                    src='https://i.pinimg.com/236x/e1/f6/ba/e1f6ba2316b80194b0b309c3aefddedd.jpg'
                    alt="Poster"
                    style={{ width: "80px", height: "100px", overflow: "hidden" }}
                  />
                </div>
                <div>
                  <h4>{media.title}</h4>
                  {/* <p >{media.description}</p> */}
                </div>
              </div>
        ))}
      <br />

      <h4>Country</h4>
      <div className={styles.scrollmenu}>
        {countrylist.map((el, i) => (
          <p onClick={() => setCountry(el)} key={i}>
            {el}
          </p>
        ))}
      </div>
      <h4>Year</h4>
      <div className={styles.scrollmenu}>
        {yearlist.map((el, i) => (
          <p onClick={() => setYear(el)} key={i}>
            {el}
          </p>
        ))}
      </div>
      <div className={styles.filterDiv}>
        <button className={styles.clearButton} onClick={handleClear}>
          CLEAR
        </button>
        <button className={styles.filterButton} onClick={handleFilter}>
          SEE RESULTS
        </button>
      </div>
    </div>
  );
};

////////////////////////////////////

