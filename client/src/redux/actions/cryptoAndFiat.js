import axios from "axios";
import {
  LOADING,
  GET_RATES_SUCCESS,
  GET_RATES_FAIL,
} from "./../types/cryptoAndFiat";

export const getRates = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const { data } = await axios.get(`/crypto/rates`);
      dispatch({
        type: GET_RATES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_RATES_FAIL,
        payload: error,
      });
    }
  };
};
