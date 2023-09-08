
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";
import "./css/home.css";
import img1 from "./images/pngwing.com.png";

function Home() {
  let navigate = useNavigate()
  let [movies, setMovies] = useState([]);
  let [movies2, setMovies2] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  let movieTypeList = async () => {
    let url = 'http://localhost:4010/movie-list';
    let response = await axios.get(url);
    let data = response.data;
    setMovies(data.result);
  }

  useEffect(() => {
    movieTypeList()
  }, []);
  let moviesTypeListTwo = async () => {
    let url = "http://localhost:4010/movie-list-2";
    let response = await axios.get(url);
    let data = response.data;
    setMovies2(data.result);
  }
  useEffect(() => {
    moviesTypeListTwo();
  }, []);



  return (<>
    <header className="d-lg-flex col-12 justify-content-lg-between p-2 mt-0 home-header bg-black">
      <div className="d-lg-flex header-left-div ms-4">
        <img src={img1} className="header-left-div-img ms-2" />
      </div>

      <div className="d-lg-flex header-right-div align-items-lg-center" >
        <div className=" search-wrapper" onClick={() => navigate('/search')}>
          <p className="fa fa-search search-icon me-3" ></p>
          <input type="text" placeholder="Search" className="search" readOnly />
        </div>
        <button className="btn btn-danger join-button py-0 ms-2" onClick={() => navigate('/main')}>JOIN NOW</button>
        <button className="bg-transparent button-sign  ms-2 me-4">SIGN IN</button>
      </div>
    </header>
    <>
      <section className="movie-section">
        <div className="Movies-div">
          <p className="display-5 fw-bold Movies mb-2 ">Movies</p>
          <p className="movies-description">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
          <h5 className="mt-5">Popular Movies</h5>
        </div>

        <Carousel responsive={responsive} className="mt-4">

          {
            movies.map((movie, index) => {
              return (<>
                <Wrapper>
                  <div key={movie._id} className="container ms-0 " onClick={() => navigate("/movie-detailed/" + movie._id)}>
                    <div className="wrapper">
                      <div className="banner-image">
                        <figure>
                          <img src={movie.image} />
                        </figure>
                      </div>
                      <h6 className="mt-0">{movie.movie}</h6>

                    </div>
                  </div>
                </Wrapper>

              </>)
            })
          }

        </Carousel>
        {/* list 2 */}
        <h5 className=" mt-5 mb-4 ms-3 ">Popular Movies</h5>
        <Carousel responsive={responsive} className="second-carousel">

          {
            movies2.map((movie2) => {
              return (<>
                <Wrapper>
                  <div key={movie2._id} className="container" onClick={() => navigate("/movie-detailed/" + movie2._id)}>
                    <div className="wrapper">
                      <div className="banner-image">
                        <figure>
                          <img src={movie2.image} />
                        </figure>
                      </div>
                      <h6 className="mt-0">{movie2.movie}</h6>

                    </div>
                  </div>
                </Wrapper>

              </>)
            })
          }

        </Carousel>
      </section >
    </>
  </>)

}
export default Home;
// {
//   movies.map((curElem) => {
//     return <NetflixCard key={curElem.id} actualData={curElem} />
//   })
// }
const Wrapper = styled.section`
  
    padding: 0rem;
    font-family: "Lexend Deca Light";
  
  
  
    .container {
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      background-color: rgba(17, 25, 40, 0.25);
      border-radius: 12px;
      border: 0;
      padding: 5px;
      filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;
      text-align: center;
  
    }
  
    .wrapper {
      width: 100%;
      height: 100%;
  
    }
  
    .banner-image {
      height:auto;
      width: 100%;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255, 0.255)
      overflow:hidden;
      
      img{
        width: 100%;
        height: auto;
      }
    }
    
    
  
    h1{
      color: rgba(255,255,255,0.98);
      text-transform: uppercase;
      font-size: 2.4rem;
    }
  
    p {
      color: #fff;
      text-align: center;
      font-size: 1rem;
      line-height: 150%;
      letter-spacing: 2px;    
    }
  
    .button-wrapper{
      margin-top: 18px;
    }
  
    .outline {
      background: transparent;
      color: rgba(0, 212, 255, 0.9);
      border: 1px solid rgba(0, 212, 255, 0.6);
      transition: all .3s ease;
  
    }
  
    .outline:hover{
      transform: scale(1.125);
      color: rgba(255, 255, 255, 0.9);
      border-color: rgba(255, 255, 255, 0.9);
      transition: all .3s ease;
    }
  
    .fill {
      background: rgba(0, 212, 255, 0.9);
      color: rgba(255,255,255,0.95);
      filter: drop-shadow(0);
      font-weight: bold;
      transition: all .3s ease;
    }
  
    .fill:hover{
      transform: scale(1.125);
      border-color: rgba(255, 255, 255, 0.9);
      filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
      transition: all .3s ease;
    }
  `