import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import { FcFilmReel } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { GetMovie, FilterMovieSearcher } from "../Redux/Action/MovieAction";


const NavBar = () => {
  const searcher = (word) => {
    onsearch(word);
  };
  const dispatch = useDispatch();
  //On Search Filter
  const onsearch = async (word) => {
    if (word === "") {
      dispatch(GetMovie());
    } else {
      dispatch(FilterMovieSearcher(word));
    }
  };
  return (
    <div>
      <Navbar fixed="top" style={{ background: "#344456" }} expand="lg">
        <Container>
          <div style={{ color: "#fff", cursor: "pointer" }}>
            <a href="/" className="text-decoration-none">
              <FcFilmReel className="fs-1" />
            </a>
            <Navbar.Brand href="/" className="fs-3 " style={{ color: "#fff" }}>
              افلام بلس
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="form d-flex ">
              <BiSearchAlt
                className="my-2 ms-2 fs-2"
                style={{ color: "#00cc99" }}
              />
              <input
                type="text"
                placeholder="البحث"
                className="text-center search"
                onChange={(e) => searcher(e.target.value)}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
