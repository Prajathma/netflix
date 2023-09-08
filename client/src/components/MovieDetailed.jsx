import { useNavigate, useParams } from "react-router-dom";
import "./css/MovieDetailed.css";
import netflixLogo from "./images/netflixlogo.png";
import globe from "./images/icons8-globe-64.png";
import arrow from "./images/icons8-sort-down-50.png";
import Header from "./Header";
// import raone from "./images/bro.jpg";
import axios, { all } from "axios";
import { useEffect, useState } from "react";




function MovieDetailed() {
  let { id } = useParams();

  let navigate = useNavigate();
  // let [allMovies, setAllMovies] = useState([]);


  // let allMoviesList = async () => {
  //   let url = 'http://localhost:4010/single-movies-list/' + m_id;
  //   let { data } = await axios.get(url);
  //   console.log(data.result);
  // }

  // useEffect(() => {
  //   allMoviesList()
  // }, []);
  let [soon, setSoon] = useState([]);
  let [detailMovies, setDetailMovies] = useState([]);
  let [collage, setCollage] = useState([]);


  let movieTypeDetail = async () => {
    let url = 'http://localhost:4010/single-movies-list/' + id;
    let { data } = await axios.get(url);
    setDetailMovies(data.result);

  }

  useEffect(() => {
    movieTypeDetail();
  }, []);
  let allMovieList = async () => {
    let url = 'http://localhost:4010/all-movies-list';
    let { data } = await axios.get(url);
    setCollage(data.result);

  }
  useEffect(() => {
    allMovieList()
  }, [])

  let upComingMovies = async () => {
    let url = 'http://localhost:4010/coming-soon';
    let { data } = await axios.get(url);
    setSoon(data.result);

  }
  useEffect(() => {
    upComingMovies();
  }, [])


  return (<>
    {
      detailMovies === null ? null : (
        <>
          <Header />
          <section className="container-fluid ">
            <section className="row">
              <section className="col-lg-12 " >

                {/*  */}
                {/* style={{ backgroundImage: `url(${detailMovies.image})` }} */}
                <section className="col-lg-12 head-section" >
                  <img src={"/images/" + detailMovies.image} className="head-section-image col-lg-12" />
                  <div className="details">
                    <div className="details-child">
                      <p className="fs-2 fw-bold">{detailMovies.movie}</p>
                      <p className="rating">2023 | Maturity Rating:U/A 13+ | 2h 11m | Fantasy</p>
                      <p className="description-1">{detailMovies.description}</p>
                      <div className="d-flex">
                        <p className="rating ">Starring:</p>
                        <p className="text-white ms-2">{(detailMovies.starring)}</p>


                      </div>
                    </div>
                  </div>
                  <div className="join-button-parent">
                    <div className="d-lg-flex justify-content-between col-lg-12   join-button-movie">
                      <div className="d-flex align-items-center ">
                        <img src={netflixLogo} className="netflixLogo mb-2" />
                        <p className="mt-2 ms-1 fw-bold" style={{ zIndex: 1 }}>Watch all you want.</p>
                      </div>
                      <div className="">
                        <button className="btn btn-danger join-button py-0 mt-1 me-2" onClick={() => navigate('/main')}>JOIN NOW</button>
                      </div>
                    </div>
                  </div>
                  <p className="More">More Details</p>
                  <div className="">
                    <div>
                      <p className="rating mb-0">
                        Watch offline
                      </p>
                      <p className="mt-0">Available to Download</p></div>
                  </div>
                  <div>
                    <p className="cast mb-0 mt-0">Cast</p>
                    <div className="cast-child mt-0">
                      <span className="starring">{detailMovies.starring}</span>

                    </div>
                  </div>
                  <div className="mt-5 ">
                    <p className="more-like-this">More Like This</p>
                    <div className="banner-image">
                      <figure className="more-image-parent col-lg-12 " onClick={() => window.location.reload(true)}>
                        {collage.map((image) => {
                          return (
                            <>
                              <img key={image._id} src={"/images/" + image.image} className="more-image p-1" onClick={() => navigate("/movie-detailed/" + image._id)} />
                            </>
                          );
                        })}
                      </figure>
                    </div>
                  </div>
                  <h1 className="more-like-this Coming-soon">Coming Soon</h1>
                  <div className=" d-flex soon-movies-parent">

                    {soon.map((soon) => {
                      return (
                        <>

                          <div key={soon._id} className="col-lg-3 soon-movies">

                            <p className="fs-5 mb-0">{soon.name}</p>
                            <p className="rating soon-description mt-0">{soon.description}</p>
                          </div>

                        </>
                      )
                    })


                    }

                  </div>


                  <section className="footer col-lg-10  ">
                    <p className=" fs-lg-6 mb-lg-5 mt-lg-4 rating">Questions? Call 000-800-919-1694</p>
                    <div className="row d-lg-flex d-none col-lg-12">
                      <div className="col col-margin">
                        <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a>
                      </div>
                      <div className="col">
                        <a href="#">Help Centre</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Legal Notices</a>
                      </div>
                      <div className="col">
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Only on Netflix</a>
                      </div>
                      <div className="col">
                        <a href="#">Media Centre</a>
                        <a href="#"> Terms of Use</a>
                        <a href="#"> Terms of Use</a>
                      </div>
                    </div>
                    <div className=" d-lg-none d-inline">
                      <div className="d col col-margin">
                        <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a>
                      </div>
                      <div className="col col-margin">
                        <a href="#">Help Centre</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Legal Notices</a>
                      </div>
                      <div className="col col-margin">
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Only on Netflix</a>
                      </div>
                      <div className="col col-margin">
                        <a href="#">Media Centre</a>
                        <a href="#"> Terms of Use</a>
                        <a href="#"> Terms of Use</a>
                      </div>
                    </div>
                    <section />
                  </section>
                  <div className="col-lg-10  pb-5">
                    <button className=" button-3 button-1  d-lg-flex align-items-lg-center justify-content-lg-around me-lg-3 d-flex align-items-center justify-content-around"><img src={globe} className="language-icon " />
                      <p className="english d-lg-flex d-flex">English</p>
                      <img src={arrow} className="sort-icon" />
                    </button>
                    <p className="text-white fs-6 mt-lg-3 copyright-txt">Netflix India</p>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </>
      )
    }

  </>)
}
export default MovieDetailed;