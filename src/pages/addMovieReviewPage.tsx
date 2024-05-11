import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getaTvSeries, getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { MovieT, SeriesT } from "../types/interfaces";
import TemplateSeriesPage from "../components/templateSeriesPage";

const WriteReviewPage: React.FC = (props) => {
    const location = useLocation()
    const { itemId, isSeries } = location.state;

    type DataType = MovieT | SeriesT;
    const { data: movie, error, isLoading, isError } = useQuery<DataType, Error>(
        [isSeries ? "series" : "movie", itemId], // Using "tvSeries" or "movie" as the query key depending on the value of isSeries
        () => isSeries ? getaTvSeries(itemId) : getMovie(itemId) 
    );



    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;[]
    }
    return (
        <>
            {movie ? (
                
                isSeries ? (
                    <TemplateSeriesPage series={movie}>
                        <ReviewForm {...movie} />
                    </TemplateSeriesPage>
                ) : (
                    <PageTemplate movie={movie}>
                        <ReviewForm {...movie} />
                    </PageTemplate>
                )
            ) : (
                <p>Waiting for movie review details</p>
            )}
        </>
    );
};

export default WriteReviewPage;