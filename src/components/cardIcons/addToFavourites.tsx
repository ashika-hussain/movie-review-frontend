import React, {MouseEvent, useContext} from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { SeriessContext } from "../../contexts/seriesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {ListedMovie, ListedSeries} from "../../types/interfaces"

type MediaType = ListedMovie | ListedSeries;

const AddToFavouritesIcon: React.FC<MediaType  & { isSeries: boolean }> = (item) => {
  const moviecontext = useContext(MoviesContext);
  const seriesContext = useContext(SeriessContext);
  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(item.isSeries)
    seriesContext.addToFavourites(item as ListedSeries)
  else
    moviecontext.addToFavourites(item as ListedMovie)
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;