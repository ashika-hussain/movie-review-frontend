import React from "react";
import Grid from "@mui/material/Grid";
import { ListedSeries } from "../../types/interfaces";
import SeriesCard from "../seriesCard";

interface SeriesListProps {
  series: ListedSeries[],
  action: (m: ListedSeries) => React.ReactNode;
}

const SeriesList: React.FC<SeriesListProps> = (props) => {
  const series=props.series;
  const seriesCards = series.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <SeriesCard key={m.id} series={m}  action={props.action}/>
    </Grid>
  ));
  return seriesCards;
}

  export default SeriesList;