import React, {MouseEvent, useContext} from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {ListedMovie} from "../../types/interfaces"



export const AddToPlayListIcon: React.FC<ListedMovie> = (movie) => {
    const context = useContext(MoviesContext);
  
    const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      context.addToFavourites(movie);
    };
    return (
      <IconButton aria-label="add to Playlist" onClick={onUserSelect}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };