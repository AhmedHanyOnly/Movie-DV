import { AllMovies } from "../Type/type";

const Organize = { Movie: [], PageCount: 0 };
export const MovieReducer = (state = Organize, action) => {
  if (action.type === AllMovies) {
    return { Movie: action.data, PageCount: action.page };
  } else {
    return state;
  }
};
