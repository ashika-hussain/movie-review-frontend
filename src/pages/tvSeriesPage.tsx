import React from "react";
import PageTemplate from "../components/templateSeriesListPage";
import {getTvSeries } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";

import { DiscoverSeries, ListedSeries } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import SeriesFilterUI, { genreFilter, titleFilter } from "../components/seriesFilterUI";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

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

const TvSeriesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverSeries, Error>("tvseries", getTvSeries);
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

  const series = data ? data.results : [];
  const displayedSeries = filterFunction(series);



  return (
    <>
      <PageTemplate
      title="Discover TV Series"
      series={displayedSeries}
      action={(series: ListedSeries) => {
        return <AddToFavouritesIcon {...series} isSeries={true} />
      }}
      />
      <SeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};
export default TvSeriesPage;