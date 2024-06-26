import { ReactNode } from "react";

export interface BaseMovie {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    
  }

  export interface BaseMovieList { 
    movies: BaseMovie[];
  }
  export interface MovieT extends BaseMovie {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries:{
        iso_3166_1:string;
        name:string
    }[];
  }
  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; //some props are optional...
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }
  export interface ListedMovie extends BaseMovie {
    genre_ids: number[];
  }

  export type FilterOption = "title" | "genre" | "releaseYear";

  export interface MovieListPageTemplateProps {
    movies: ListedMovie[];
    title: string;
    action: (m: ListedMovie) => ReactNode;
  }
  export interface Review{
    id: string;
    content: string
    author: string
    isSeries : boolean
  }


  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }

  interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovie[];
  }

  export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }


  //Series


  interface BaseTVSeries {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }

  export interface ListedSeries extends BaseTVSeries {
    genre_ids: number[];
  }

  export interface BaseTVSeriesList { 
    movies: BaseTVSeries[];
  }


  export interface SeriesListPageTemplateProps {
    series: ListedSeries[];
    title: string;
    action: (m: ListedSeries) => ReactNode;
  }


  export interface SeriesT extends BaseTVSeries {
    genres: {
      id: number;
      name: string;
    }[];
  }



  interface DiscoverSeries {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseTVSeries[];
  }




  export interface SeriesReview {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    seriesId: number,
  }


  interface CastMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }


  interface ActorDetails {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string | null;
    gender: number;
    homepage: string | null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string | null;
}


interface FantasyMovie {
  title: string;
  overview: string;
  genres: string; // Assuming genres are represented as an array of strings
  releaseDate: string; // Date format (e.g., "YYYY-MM-DD")
  runtime: number; // Runtime in minutes
  productionCompanies: string;
}


