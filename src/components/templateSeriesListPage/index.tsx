import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import {  SeriesListPageTemplateProps} from "../../types/interfaces";
import SeriesList from "../seriesList";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const SeriesListPageTemplate: React.FC<SeriesListPageTemplateProps> = (props)=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={props.title} />
      </Grid>
      <Grid item container spacing={5}>
      <SeriesList action={props.action} series={props.movies} />
      </Grid>
    </Grid>
  );
}
export default SeriesListPageTemplate;