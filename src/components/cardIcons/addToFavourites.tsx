import React, {MouseEvent, useContext} from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {ListedMovie, ListedSeries} from "../../types/interfaces"

type MediaType = ListedMovie | ListedSeries;

const AddToFavouritesIcon: React.FC<MediaType  & { isSeries: boolean }> = (item) => {
  const context = useContext(MoviesContext);
  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(item,item.isSeries);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;