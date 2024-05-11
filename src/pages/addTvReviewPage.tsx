import React from "react";
import PageTemplate from "../components/templateSeriesPage";
import ReviewForm from "../components/reviewFormSeries";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getaTvSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { SeriesT } from "../types/interfaces";

const WriteSeriesReviewPage: React.FC = () => {
    const location = useLocation()
    const { itemId } = location.state;
    const { data: series, error, isLoading, isError } = useQuery<SeriesT, Error>(
        ["series", itemId],
        () => getaTvSeries(itemId)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return (
        <>
            {series ? (
                    <PageTemplate series={series}>
                        <ReviewForm {...series} />
                    </PageTemplate>
            ) : (
                <p>Waiting for series review details</p>
            )}
        </>
    );
};

export default WriteSeriesReviewPage;