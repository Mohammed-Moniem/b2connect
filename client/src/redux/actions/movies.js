import axios from "axios";
import { LOADING, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL } from "../types/movies";

export const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const { data } = await axios.get(`/movies`);
      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: GET_MOVIES_FAIL,
        payload: error,
      });
    }
  };
};
