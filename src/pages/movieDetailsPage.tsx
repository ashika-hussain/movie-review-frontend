import React from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { CastMember, MovieT} from "../types/interfaces";
import PageTemplate from "../components/templateMoviePage";
import { getMovie , getMovieCast} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery<MovieT, Error>(
    ["movie", id],
    ()=> getMovie(id||"")
  );

  const { data: castData } = useQuery<CastMember[], string>(
    ["cast", id], // Specify query key as an array containing the query identifier and query parameter
    () => getMovieCast(id || "")
  );
  if (isLoading) {
    return <Spinner />;
  }

  if (isError ) {
    return <h1>{(error as Error).message}</h1>;
  }


  return (
    <>
      {movie ? (
        <>
        <PageTemplate movie={movie as MovieT}> 
        <MovieDetails movie={movie as MovieT} cast={castData as CastMember[]} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
    </>
  );
};

export default MovieDetailsPage;