import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  releaseYearFilter,
} from "../components/movieFilterUI";
import { DiscoverMovies, ListedMovie } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import Pagination from "../components/Pagination/indexx";

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

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["discover", currentPage],
    () => getMovies(currentPage),
    {
      keepPreviousData: true, // Keep previous data while loading new data
    }
  );
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

  // Function to handle sort button click
  const handleSortButtonClick = (sortByValue: string) => {
    if (sortBy === sortByValue) {
      setSortBy("");
    } else {
      setSortBy(sortByValue);
    }
  };

  const sortMovies = (movies: ListedMovie[]): ListedMovie[] => {
    switch (sortBy) {
      case "name":
        return [...movies].sort((a, b) => a.title.localeCompare(b.title));
      case "release_date":
        return [...movies].sort((a, b) => a.release_date.localeCompare(b.release_date));
      default:
        return movies;
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
  let displayedMovies = filterFunction(movies);
  displayedMovies = sortMovies(displayedMovies)



  return (
    <>
      <PageTemplate
      title="Discover Movies"
      movies={displayedMovies}
      action={(movie: ListedMovie) => {
        return <AddToFavouritesIcon {...movie} isSeries={false} />
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
            <Pagination
        currentPage={currentPage}
        totalPages={data?.total_pages || 1}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
export default HomePage;