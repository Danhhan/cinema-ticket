import { SET_FILM_COMMING, SET_FILM_ON, SET_MOVIES } from "../types/MovieType";

const stateDefault = {
  movies: [],
  dangChieu: true,
  sapChieu: true,
  moviesDefault: [],
};
export const MovieReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_MOVIES: {
      state.movies = action.movies;
      state.moviesDefault = action.movies;
      return { ...state };
    }
    case SET_FILM_ON: {
      state.dangChieu = !state.dangChieu;
      state.movies = state.moviesDefault?.filter(
        (movie) => movie.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_FILM_COMMING: {
      state.sapChieu = !state.sapChieu;
      state.movies = state.moviesDefault?.filter(
        (movie) => movie.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    default:
      return { ...state };
  }
};
