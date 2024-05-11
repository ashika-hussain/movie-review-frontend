import React from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import { SeriesT} from "../types/interfaces";
import PageTemplate from "../components/templateSeriesPage";
import { getaTvSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const SeriesDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data: series, error, isLoading, isError } = useQuery<SeriesT, Error>(
    ["series", id],
    ()=> getaTvSeries(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }


  return (
    <>
      {series ? (
        <>
        <PageTemplate series={series as SeriesT}> 
          <SeriesDetails {...series as SeriesT} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
    </>
  );
};

export default SeriesDetailsPage;