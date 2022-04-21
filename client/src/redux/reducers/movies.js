import { LOADING, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL } from "../types/movies";

const initialState = {
  movies: "",
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: false };
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false };

    case GET_MOVIES_FAIL:
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
