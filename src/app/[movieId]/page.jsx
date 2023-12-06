import CardInfo from "@/components/CardInfo";
import Nav from "@/components/Nav";

const MoviePage = ({ params }) => {
  const movieId = params.movieId;

  return (
    <div>
      <Nav />
      <CardInfo id={movieId} />
    </div>
  );
};

export default MoviePage;
