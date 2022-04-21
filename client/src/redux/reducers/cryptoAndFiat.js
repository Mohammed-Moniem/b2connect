import {
  LOADING,
  GET_RATES_SUCCESS,
  GET_RATES_FAIL,
} from "./../types/cryptoAndFiat";

const initialState = {
  totalCount: "",
  fiatCount: "",
  cryptoCount: "",
  fait: [],
  crypto: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: false };
    case GET_RATES_SUCCESS:
      return { ...state, ...action.payload, loading: false };

    case GET_RATES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
