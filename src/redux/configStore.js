import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { MovieReducer } from "./reducers/MovieReducer";
import { MovieTheaterReducer } from "./reducers/MovieTheaterReducer";

const rootReducers = combineReducers({
  //state app
  CarouselReducer,
  MovieReducer,
  MovieTheaterReducer,
});
export const store = createStore(rootReducers, applyMiddleware(thunk));
