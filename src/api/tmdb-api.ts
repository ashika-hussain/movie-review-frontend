/* eslint-disable @typescript-eslint/no-explicit-any */
import { CastMember } from "../types/interfaces";

export const getMovies = (page:number) => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
    ).then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
      return response.json();
    })
      .catch((error) => {
        throw error
      });
  };


  export const getMovie = (id: string) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get movie data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
    ).then( (response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = (id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("failed to fetch images");
      }
      return response.json();
    }).then((json) => json.posters)
      .catch((error) => {
        throw error
      });
  };
  export const getMovieReviews = (id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
        if (!response.ok)
          throw new Error(`Unable to fetch upcoming movies. Response status: ${response.status}`);
        return response.json();
      })
        .catch((error) => {
          throw error
        });
    };


    export const getTvSeries = ()=>{
      return fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&page=1`
      ).then((response) => {
          if (!response.ok)
            throw new Error(`Unable to fetch TV Series. Response status: ${response.status}`);
          return response.json();
        })
          .catch((error) => {
            throw error
          });
      };


      export const getaTvSeries = (id: string) =>{
     return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get Series data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };


    
  export const getSeriesImages = (id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("failed to fetch images");
      }
      return response.json();
    }).then((json) => json.posters)
      .catch((error) => {
        throw error
      });
  };


  export const getTrendingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
        if (!response.ok)
          throw new Error(`Unable to fetch trending movies. Response status: ${response.status}`);
        return response.json();
      })
        .catch((error) => {
          throw error
        });
    };


    export const getMovieCast = (id: string): Promise<any> => {
      return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Unable to fetch movie credits. Response status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Extract cast members from the response
          const cast: CastMember[] = data.cast;
          return cast;
        })
        .catch((error) => {
          throw error;
        });
    };
    


  export const getTvSeriesReviews = (id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getActorDetails = (id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch actor details for ID ${id}`);
        }
        return res.json();
      })
      .then((json) => {
        // Check if the JSON response contains actor details
        if (json) {
          return json;
        } else {
          throw new Error(`Actor details not found for ID ${id}`);
        }
      });
  };
  

 