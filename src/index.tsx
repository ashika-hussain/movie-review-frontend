import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TvSeriesPage from "./pages/tvSeriesPage";
import FavouriteSeriesPage from "./pages/favouriteSeriesPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import SeriessContextProvider from "./contexts/seriesContext";
import  WriteSeriesReviewPage from "./pages/addTvReviewPage";
import SeriesDetailsPage from "./pages/seriesDetailsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import WriteFantasyMoviePage from "./pages/fantasyMoviePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <SiteHeader /> 
     <MoviesContextProvider>
      <SeriessContextProvider>
      <Routes>

      <Route path="/series/:id" element={<SeriesDetailsPage />} />
      <Route path="/movies/trending" element={<TrendingMoviesPage />} />
      <Route path="/series/favourites" element={<FavouriteSeriesPage />} />
      <Route path="/series/reviews/form" element={<WriteSeriesReviewPage/>} />
      <Route path="/series/" element={<TvSeriesPage/>} />
      <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
      <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
      <Route path="/reviews/:id" element={<MovieReviewPage/>} />
      <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
      <Route path="/actor/:id" element={<ActorDetailsPage />} />
      <Route path="/fantasymovie" element={<WriteFantasyMoviePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />}  />
      </Routes>
      </SeriessContextProvider>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)