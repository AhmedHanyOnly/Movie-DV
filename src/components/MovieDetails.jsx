import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const par = useParams();
  const [movie, setMovie] = useState([]);

  const details = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${par.id}%7D?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    details();
  }, []);
  console.log(movie);
  return (
    <div className="movie-landing">
      <div className="bg-lading">
        <img
          src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path}
          alt="sss"
          style={{ height: "80vh", width: "100%", height:'100vh', zIndex: "-1" }}
        />
        <div className="bg-img"></div>
      </div>
      <Container>
        <div className="movie-details d-flex justify-content-between">
          <div className="col-12 col-lg-4  col-sm-6  ">
            <div className="img-card ">
              <img
                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                alt="img"
                className="movie-img-card"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7  col-sm-5">
            <div className="text-container">
              <h3 className="title-movie text-light  p-2 mb-3 fw-bold">
                {movie.title}
              </h3>
              <div className="story m-2 ">
                <h3 style={{ color: "#ddd" }}>القصه</h3>
                <p className="p-1 " style={{ color: "#a3a9b3" }}>
                  {movie.overview}
                </p>
              </div>
              <p className=" fs-5 " style={{ color: "#ddd" }}>
                تاريخ الاصدار : {movie.release_date}
              </p>
              <p className=" fs-5" style={{ color: "#ddd" }}>
                التقييم : {movie.vote_average}{" "}
                <BsFillStarFill
                  className="mb-1 mx-1 "
                  style={{ color: "#ffcc40" }}
                />
              </p>
              <p className=" fs-5" style={{ color: "#ddd" }}>
                عدد المقيمين : {movie.vote_count}
              </p>
              
              <button className="btn-movie">
                <a href="/" className="btn-link">
                  الرجوع للقائمه
                </a>
              </button>
              <button className="btn-movie">
                <a href={movie.homepage} className="btn-link">
                  مشاهده الان 
                </a>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MovieDetails;
