import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import { DiscoverMovies, ListedMovie } from "../types/interfaces";
import useFiltering from "../hooks/useFiltering";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieFilterUI, { genreFilter, titleFilter } from "../components/movieFilterUI";
import AddToPlayListIcon from "../components/cardIcons/addToPlayLIstIcon";


const titleFiltering = {
    name: "title",
    value: "",
    condition: titleFilter,
  };
  const genreFiltering = {
    name: "genre",
    value: "0",
    condition: genreFilter,
  };
  

const TrendingMoviesPage: React.FC= () => {
    const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>("trending", getTrendingMovies);
    const { filterValues, setFilterValues, filterFunction } = useFiltering(
      [],
      [titleFiltering, genreFiltering]
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
  
    const changeFilterValues = (type: string, value: string) => {
      const changedFilter = { name: type, value: value };
      const updatedFilterSet =
        type === "title"
          ? [changedFilter, filterValues[1]]
          : [filterValues[0], changedFilter];
      setFilterValues(updatedFilterSet);
    };
  
    const movies = data ? data.results : [];
    const trendingmovies = filterFunction(movies);
  
  
    return (
        <>
        <PageTemplate
        title="Trending Movies"
        movies={trendingmovies}
        action={(movie: ListedMovie) => {
          return <AddToPlayListIcon {...movie} />
        }}
        />
        <MovieFilterUI
          onFilterValuesChange={changeFilterValues}
          titleFilter={filterValues[0].value}
          genreFilter={filterValues[1].value}
        />
      </>
    );
}

export default TrendingMoviesPage