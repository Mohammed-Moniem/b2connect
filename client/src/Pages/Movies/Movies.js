import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Charts from "../../Components/Movies/Charts";
import { getMovies } from "./../../redux/actions/movies";

const Movies = () => {
  const { movies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div style={{ paddingTop: "25px" }}>
      <Charts movies={movies} />
    </div>
  );
};

export default Movies;
