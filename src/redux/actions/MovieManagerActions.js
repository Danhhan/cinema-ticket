import { movieService } from "../../services/Movie";
import { SET_MOVIES } from "../types/MovieType";

export const getMoviesAction = () => {
  return async (dispatch) => {
    try {
      const result = await movieService.getMovies();
      dispatch({
        type: SET_MOVIES,
        movies: result.data.content,
      });
    } catch (error) {}
  };
};
