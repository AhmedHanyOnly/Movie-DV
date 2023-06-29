import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card-style">
      <Link to={`/movie/${item.id}`} className="text-decoration-none">
        <img
          src={`https://image.tmdb.org/t/p/w500/` + item.poster_path}
          alt="img"
          className="image"
        />
        <div className="text-card">
          <h3>{item.title}</h3>
          <p>تاريخ الاصدار : {item.release_date}</p>
          <p>
            التقييم : {item.vote_average}{" "}
            <BsFillStarFill
              className="mb-1 mx-1"
              style={{ color: "#ffcc40" }}
            />
          </p>
          <p>عدد المقيمين : {item.vote_count}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
