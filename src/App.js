import React from "react";
import "./css/main.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//File components
import NavBar from "./components/NavBar";
import ConCard from "./components/ConCard";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConCard />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
