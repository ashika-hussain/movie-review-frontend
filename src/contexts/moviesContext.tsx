import React, { useState } from "react";
import { ListedMovie, ListedSeries, MovieT, Review, SeriesT} from "../types/interfaces";


type MediaType = ListedMovie | ListedSeries;

interface MovieContextInterface {
    movieFavourites: number[];
    seriesFavourites: number[],
    addToFavourites: ((movie: MediaType, isSeries: boolean) => void);
    removeFromFavourites: ((movie: MediaType) => void);
    addReview: ((movie: MovieT, review: Review) => void); 
    playlists : number[];
    addToPlaylist : ((movie: MediaType) => void);
    removeFromPlaylist :((movie: MediaType) => void);
}
const initialContextState = {
    movieFavourites: [],
    seriesFavourites: [],
    addToFavourites: (movie: MediaType) => {movie.id },
    removeFromFavourites: (movie: MediaType) => { movie.id},
    addReview: (movie, review) => { movie.id, review},
    playlists: [],
    addToPlaylist: (movie: MediaType) => {movie.id },
    removeFromPlaylist: (movie: MediaType) => { movie.id},
};  



export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [myReviews, setMyReviews] = useState<Review[]>( [] ) 
    const [movieFavourites, setMovieFavourites] = useState<number[]>([]);
    const [playlists, setPLaylists] = useState<number[]>([]);
    const [seriesFavourites, setseriesFavourites] = useState<number[]>([]);


    const addToFavourites = (movie: MediaType,isSeries: boolean) => {
        const updatedMovieFavourites = [...movieFavourites];
        const updatedSeriesFavourites = [...seriesFavourites];
        if(isSeries){
        if (!seriesFavourites.includes(movie.id)) {
            updatedSeriesFavourites.push(movie.id);
        }
        setseriesFavourites(updatedSeriesFavourites);
    }
        else{
        if (!movieFavourites.includes(movie.id)) {
            updatedMovieFavourites.push(movie.id);
        }
        setMovieFavourites(updatedMovieFavourites);

        }
    };

    // We will use this function in a later section
    const removeFromFavourites = (movie: MediaType) => {
        setMovieFavourites(movieFavourites.filter((mId) => mId !== movie.id));
    };

    const addReview = (item: MovieT | SeriesT, review: Review ) => {   // NEW
        setMyReviews( {...myReviews, [item.id]: review } )
      };

      const addToPlaylist = (movie: MediaType) => {
        const updatedPlaylist = [...playlists];
        if (!playlists.includes(movie.id)) {
            updatedPlaylist.push(movie.id);
        }
        setPLaylists(updatedPlaylist);
        console.log(updatedPlaylist)
    };

    const removeFromPlaylist = (movie: MediaType) => {
        setPLaylists(playlists.filter((mId) => mId !== movie.id));
    };

    return (
        <MoviesContext.Provider
            value={{
                movieFavourites,
                seriesFavourites,
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