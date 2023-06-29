import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import PaginationCon from "./PaginationCon";
import { useDispatch, useSelector } from "react-redux";
import { GetMovie } from "../Redux/Action/MovieAction";

const ConCard = () => {
  const [movies, setMovies] = useState([]);
  //Get Data From Api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetMovie());
  }, []);
  const MovieData = useSelector((state) => state.Movie);
  useEffect(() => {
    setMovies(MovieData);
    //console.log(MovieData)
  }, [MovieData]);

  return (
    <Container>
      <div className="card-con">
        <Row className="justify-content-center ">
          {movies.length >= 1 ? (
            movies.map((item) => {
              return <Card key={item.id} item={item} />;
            })
          ) : (
            <h3 className="text-center p-3 my-3 fs-bold text-light">
              لا يوجد افلام
            </h3>
          )}
          <PaginationCon />
        </Row>
      </div>
    </Container>
  );
};

export default ConCard;
