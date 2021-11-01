import { useParams } from "react-router-dom";

function OneMovie({ movies }) {
  const { Id } = useParams();
  const movie = movies.find((movie) => movie.id == Id);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movie.link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3>{movie.title}</h3>
      <p style={{}}>
        {movie.description} <br /> A paragraph is a series of sentences that are
        organized and coherent, and are all related to a single topic.
        <br /> Almost every piece of writing you do that is longer than a few
        sentences
        <br /> should be organized into paragraphs. ... One of the most
        important of these is a topic sentence.
      </p>
    </div>
  );
}
export default OneMovie;
