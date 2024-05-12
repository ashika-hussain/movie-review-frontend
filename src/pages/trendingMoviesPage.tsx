import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import { DiscoverMovies, ListedMovie } from "../types/interfaces";
import useFiltering from "../hooks/useFiltering";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieFilterUI, { genreFilter, releaseYearFilter, titleFilter } from "../components/movieFilterUI";
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
  
  const releaseYearFiltering = {
    name: "releaseYear",
    value: "0",
    condition: releaseYearFilter,
  };

const TrendingMoviesPage: React.FC= () => {
    const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>("trending", getTrendingMovies);
    const { filterValues, setFilterValues, filterFunction } = useFiltering(
      [],
      [titleFiltering, genreFiltering,releaseYearFiltering]
    );
    const [sortBy, setSortBy] = useState("");
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

    

    const handleSortButtonClick = (sortByValue: string) => {
      if (sortBy === sortByValue) {
        setSortBy("");
      } else {
        setSortBy(sortByValue);
      }
    };
  
  
    const changeFilterValues = (type: string, value: string) => {
      const changedFilter = { name: type, value: value };
  
    const updatedFilterSet =  [...filterValues];
    switch (type) {
      case "title":
        updatedFilterSet[0] = changedFilter;
        break;
      case "genre":
        updatedFilterSet[1] = changedFilter;
        break;
      case "releaseYear":
        updatedFilterSet[2] = changedFilter;
        break;
      default:
        break;
    }
    setFilterValues(updatedFilterSet);
  }
  
  
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
          releaseYearFilter= {filterValues[2].value}
          sortBy={sortBy} 
          onSortButtonClick={handleSortButtonClick}
        />
      </>
    );
}

export default TrendingMoviesPage