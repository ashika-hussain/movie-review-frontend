import React, { useState } from "react";
import { ListedMovie, MovieT, Review} from "../types/interfaces";

interface MovieContextInterface {
    favourites: number[];
    addToFavourites: ((movie: ListedMovie) => void);
    removeFromFavourites: ((movie: ListedMovie) => void);
    addReview: ((movie: MovieT, review: Review) => void); 
    playlists : number[];
    addToPlaylist : ((movie: ListedMovie) => void);
    removeFromPlaylist :((movie: ListedMovie) => void);
}
const initialContextState = {
    favourites: [],
    addToFavourites: (movie: ListedMovie) => {movie.id },
    removeFromFavourites: (movie: ListedMovie) => { movie.id},
    addReview: (movie, review) => { movie.id, review},
};  


export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [myReviews, setMyReviews] = useState<Review[]>( [] ) 
    const [favourites, setFavourites] = useState<number[]>([]);
    const [playlists, setPLaylists] = useState<number[]>([]);


    const addToFavourites = (movie: ListedMovie) => {
        const updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };

    // We will use this function in a later section
    const removeFromFavourites = (movie: ListedMovie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    const addReview = (movie: MovieT, review: Review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
      };

      const addToPlaylist = (movie: ListedMovie) => {
        const updatedPlaylist = [...playlists];
        if (!playlists.includes(movie.id)) {
            updatedPlaylist.push(movie.id);
        }
        setPLaylists(updatedPlaylist);
        console.log(updatedPlaylist)
    };

    const removeFromPlaylist = (movie: ListedMovie) => {
        setPLaylists(playlists.filter((mId) => mId !== movie.id));
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                playlists,
                addToPlaylist,
                removeFromPlaylist

            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;