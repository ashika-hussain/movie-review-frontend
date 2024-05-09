import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { ListedMovie } from "../types/interfaces";

const UpcomingMoviesPage: React.FC= () => {
    const [movies, setMovies] = useState<ListedMovie[]>([]);
    const favourites = movies.filter(m => m.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    // New function
  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m: ListedMovie) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  };
    useEffect(() => {
        getUpcomingMovies().then(movies => {
          setMovies(movies);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  
    return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        selectFavourite={addToFavourites}
      />
    );
}

export default UpcomingMoviesPage