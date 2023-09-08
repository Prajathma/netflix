import { useEffect, useState } from "react";
import "./css/Search.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Search() {
  let navigate = useNavigate()
  let initData = {
    _id: "",
    movie: "",
    movie_id: 0,

  }
  let [hideAll, setHideAll] = useState(true);
  let [selectAll, setSelectALl] = useState({ ...initData });
  let [shows, setShows] = useState([]);
  let [movie_list, setMovies] = useState({ list: [], message: "0 movies found" })

  let setASelectedAll = (id) => {
    setSelectALl(shows[id]);
    setHideAll(true);

  }

  let getMovieList = async () => {
    try {
      let url = 'http://localhost:4010/all-movies-list';
      let response = await axios.get(url);
      let data = response.data;
      setShows(data.result);
    } catch (error) {
      alert('Server Error');
      console.log(error);
    }

  };
  let getAllMovieListById = async () => {
    let url = "http://localhost:4010/search/" + selectAll.movie;
    let { data } = await axios.get(url);
    setMovies(data.result);
  }

  useEffect(() => {
    if (selectAll.movie_id !== 0) {
      getAllMovieListById();
    }
  }, [selectAll])
  useEffect(() => {
    getMovieList();
  }, []);

  return (<>
    <div className=" gap-lg-3  align-items-start mt-3 search-div">
      <div className="w-50 me-lg-0 position-relative ">
        <input
          type="text"
          className="form-control search-page-top-input set-100 mb-lg-1 w-100 me-lg-0 py-lg-2 py-2 px-3 bg-black"
          placeholder="Please type a location"
          readOnly
          value={selectAll.movie === "" ? "" : `${selectAll.movie}`}
          onClick={() => setHideAll(false)}
        />
        {
          hideAll ? null : (
            <ul className="list-group search-page-dropdown me-lg-0 position-absolute top-100 w-100 " >
              {
                shows.map((show, index) => {
                  return (
                    <li key={show._id} className="list-group-item search-page-dropdown-result z-100" onClick={() => setASelectedAll(index)}>{show.movie}</li>
                  )
                })
              }
            </ul>
          )}
      </div>



    </div>
    <div className="search-card">
      <img src={"/images/" + movie_list.image} className="search-image" onClick={() => navigate("/movie-detailed/" + movie_list._id)} />
      <p className="d-flex justify-content-center fs-2 fw-bold movie_list-movie">{movie_list.movie}</p>
    </div>
  </>)

}

export default Search;