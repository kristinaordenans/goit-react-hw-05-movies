import { useLocation, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { fetchMovieById } from "Utils/MuvieAPI";
import { Link, Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { BtnGoBack } from "components/BtnGoBack/BtnGoBack";

export const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const urlLocation = useLocation();
    const previousUrlLocation = useRef(urlLocation?.state?.from ?? '/movies');

    useEffect(() => {
    setLoading(true);

    fetchMovieById(movieId)
      .then(movieData => setDataMovie(movieData))
      .catch(err => console.error('error:' + err))
      .finally(setLoading(false));
  }, [movieId]);

  if (!dataMovie) return;

  const IMG = dataMovie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${dataMovie.poster_path}`
    : `https://via.placeholder.com/500x750`;
  const releaseData = dataMovie.release_date
    ? `(${dataMovie.release_date.slice(0, 4)})`
    : '';

  return (
    <>
      <Link to={previousUrlLocation.current}>
        <BtnGoBack />
      </Link>
      <div>
        {loading && <Loader />}
        {dataMovie && (
          <>
            <div>
              <img src={IMG} alt={dataMovie.title} />
            </div>
            <div>
              <h1>{`${dataMovie.title} ${releaseData}`}</h1>
              <span>
                User Score: {Math.round(dataMovie.vote_average * 10)}%
              </span>
              <h2>Overview</h2>
              <p>{dataMovie?.overview}</p>
              {!dataMovie.overview && (
                <p>There is no any overwiev for this movie</p>
              )}
              <h3>Genres</h3>
              {dataMovie?.genres &&
                dataMovie.genres.map(({ name, id }) => (
                  <span key={id}>{name} </span>
                ))}
              {!dataMovie.genres.length && (
                <p>There is no any genres for this movie</p>
              )}
            </div>
          </>
        )}
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <Link to={`cast`}>
            <li>Cast</li>
          </Link>
          <Link to={`reviews`}>
            <li>Reviews</li>
          </Link>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
