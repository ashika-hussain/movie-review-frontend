import React from "react";
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
  value: (new Date()).getFullYear().toLocaleString(),
  condition: releaseYearFilter,
};

const HomePage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>("discover", getMovies);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering,releaseYearFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


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
  const displayedMovies = filterFunction(movies);



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
      />
    </>
  );
};
export default HomePage;