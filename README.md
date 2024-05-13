# Movie Review App React

Name: ASHIKA HUSSAIN

Video demonstration:  https://youtu.be/WO-CAMCcEWQ

This repository contains an implementation of the Movie Fans Web Application using the ReactJS library. 

# Features:
+ Movie List/Movie Details: Displayed a list of movies with basic details and allowed users to view detailed information about each movie.

+ Series List/Series Details: Similar to movies, provide a list of TV series with basic details and detailed information for each series.

+ Upcoming Movies List: Showcased upcoming movies with release dates.

+ Trending Movies App: Highlighted trending movies based on popularity or other criteria.
  
+  Cast List of Movies: Highlighted a cast list of movies
  
+  Click on the Cast list to View Details of an actor

+ Movie Review Add Form: Enabled users to submit reviews for movies.

+ Series Review Add Form: Allowed users to submit reviews for TV series.

+ Add Movie Favourites: Enabled users to mark movies as favorites for quick access.

+ Add Series Favourites: Similar to movies, allowed users to mark TV series as favorites.

+ Filtering on Series using Genres/Release Year: Provided filtering options for TV series based on genres and release years.

+ Sort movies by name: Allowed users to sort the movie list alphabetically by name.

+ Pagination for movies: Implemented pagination for the movie list to improve performance and user experience.

+ S3 bucket and CloudFront distribution for the MoviesReact app: Deployed the frontend of the app using AWS S3 bucket and CloudFront for content delivery and scalability.

# API endpoints

+ Fetches a list of movies based on the provided page number: /discover/movie
+ Fetches details of a specific movie by its ID: /movie/{id}
+ Fetches a list of movie genres: /genre/movie/list
+ Fetches images (posters) of a specific movie by its ID: /movie/{id}/images
+ Fetches reviews of a specific movie by its ID: /movie/{id}/reviews
+ Fetches a list of upcoming movies: /movie/upcoming
+ Fetches a list of popular TV series: /tv/popular
+ Fetches details of a specific TV series by its ID: /tv/{id}
+ Fetches images (posters) of a specific TV series by its ID: /tv/{id}/images
+ Fetches a list of trending movies of the week: /trending/movie/week
+ Fetches the cast members of a specific movie by its ID: /movie/{id}/credits
+ Fetches reviews of a specific TV series by its ID: /tv/{id}/reviews
+ Fetches details of a specific actor by their ID: /person/{id}

# Routing

+ /series/:id: Displays details of a specific TV series.
+ /movies/trending: Shows trending movies of the week.
+ /series/favourites: Lists favorite TV series.
+ /series/reviews/form: Provides a form for writing TV series reviews.
+ /series/: Lists various TV series.
+ /reviews/form: Offers a form for writing movie reviews.
+ /movies/upcoming: Lists upcoming movies.
+ /reviews/:id: Displays details of a review.
+ /movies/favourites: Lists favorite movies.
/actor/:id: Displays details of an actor.
/fantasymovie: Provides a page for writing a fantasy movie script.
/movies/:id: Displays details of a specific movie

