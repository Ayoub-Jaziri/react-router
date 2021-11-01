import MovieCard from "./MovieCard";

function MoviesList({ movies, searchTitle, rating }) {
  return (
    <div className="list">
      {movies
        .filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(searchTitle.toLowerCase().trim()) &&
            movie.rate >= rating
        )
        .map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
    </div>
  );
}
export default MoviesList;
