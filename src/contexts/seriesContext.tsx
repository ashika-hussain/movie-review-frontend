import React, { useState } from "react";
import { ListedSeries, SeriesT, SeriesReview} from "../types/interfaces";

interface SeriesContextInterface {
    favourites: number[];
    addToFavourites: ((series: ListedSeries) => void);
    removeFromFavourites: ((series: ListedSeries) => void);
    addReview: ((series: SeriesT, review: SeriesReview) => void); 
    playlists : number[];
    addToPlaylist : ((series: ListedSeries) => void);
    removeFromPlaylist :((series: ListedSeries) => void);
}
const initialContextState = {
    favourites: [],
    addToFavourites: (series: ListedSeries) => {series.id },
    removeFromFavourites: (series: ListedSeries) => { series.id},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addReview: (series: { id: any; }, review: any) => { series.id, review},
    playlists: [],
    addToPlaylist: (series: ListedSeries) => {series.id },
    removeFromPlaylist: (series: ListedSeries) => { series.id},
};  


export const SeriessContext = React.createContext<SeriesContextInterface>(initialContextState);

const SeriessContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [myReviews, setMyReviews] = useState<SeriesReview[]>( [] ) 
    const [favourites, setFavourites] = useState<number[]>([]);
    const [playlists, setPLaylists] = useState<number[]>([]);


    const addToFavourites = (series: ListedSeries) => {
        const updatedFavourites = [...favourites];
        if (!favourites.includes(series.id)) {
            updatedFavourites.push(series.id);
        }
        setFavourites(updatedFavourites);
    };

    // We will use this function in a later section
    const removeFromFavourites = (series: ListedSeries) => {
        setFavourites(favourites.filter((mId) => mId !== series.id));
    };

    const addReview = (series: SeriesT, review: SeriesReview) => {   // NEW
        setMyReviews( {...myReviews, [series.id]: review } )
      };

      const addToPlaylist = (series: ListedSeries) => {
        const updatedPlaylist = [...playlists];
        if (!playlists.includes(series.id)) {
            updatedPlaylist.push(series.id);
        }
        setPLaylists(updatedPlaylist);
        console.log(updatedPlaylist)
    };

    const removeFromPlaylist = (series: ListedSeries) => {
        setPLaylists(playlists.filter((mId) => mId !== series.id));
    };

    return (
        <SeriessContext.Provider
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
        </SeriessContext.Provider>
    );
};

export default SeriessContextProvider;