import React, { useContext } from "react"
import PageTemplate from "../components/templateMovieListPage";
import { SeriessContext } from "../contexts/seriesContext";
import { useQueries } from "react-query";
import { getaTvSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import  {
  titleFilter
} from "../components/seriesFilterUI";
import { SeriesT } from "../types/interfaces";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";
import SeriesFilterUI from "../components/seriesFilterUI";
import { releaseYearFilter } from "../components/movieFilterUI";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};

// eslint-disable-next-line react-refresh/only-export-components
export const genreFiltering = {
  name: "genre",
  value: "0",
  condition: function (series: SeriesT, value: string) {
    // Is user selected genre in this movies's genre list? 
    // Always true if selected genre ia All (0).
    const genreId = Number(value);
    const genre_ids = series.genres.map((g) => g.id);
    return genreId > 0 ? genre_ids.includes(genreId) : true;
  },
};

const releaseYearFiltering = {
  name: "releaseYear",
  value: "0",
  condition: releaseYearFilter,
};




const FavouriteSeriesPage: React.FC = () => {
  const { favourites: seriesIds } = useContext(SeriessContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering,releaseYearFiltering]
  );



  // Create an array of queries and run them in parallel.
  const favouriteSeriesQueries = useQueries(
    seriesIds.map((seriesId) => {
      return {
        queryKey: ["series", seriesId ],
        queryFn: () => getaTvSeries(seriesId.toString()),
      };
    })
  );
   // Check if any of the parallel queries is still loading.
   const isLoading = favouriteSeriesQueries.find((m) => m.isLoading === true);

   if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteSeriesQueries.map((q) => q.data);
  const displayedSeries = allFavourites
  ? filterFunction(allFavourites)
  : [];


 
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

  return (
    <>
     <PageTemplate
        title="Favourite Series"
        movies={displayedSeries}
        action={(series) => {
          return (
            <>
              <RemoveFromFavourites  {...series} />
              <WriteReview {...series} isSeries= {true}/>
            </>
          );
        
        }}
      />
      <SeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        releaseYearFilter= {filterValues[2].value}
      />
    </>
  );
};

export default FavouriteSeriesPage;