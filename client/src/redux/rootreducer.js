import { combineReducers } from "redux";
import CryptoAndFiat from "./reducers/cryptoAndFiat";
import Movies from "./reducers/movies";

const reducers = {
  cryptoAndFiat: CryptoAndFiat,
  movies: Movies,
};

export default combineReducers(reducers);
