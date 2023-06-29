import axios from "axios";
import { AllMovies } from "../Type/type";
import { MovieAPI } from "../Type/type";

export const GetMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieAPI);
    dispatch({
      type: AllMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const FilterMovieSearcher = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
    );
    dispatch({
      type: AllMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const PageNum = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    );
    dispatch({
      type: AllMovies,
      data: res.data.results,
      page: res.data.total_pages,
    });
  };
};
