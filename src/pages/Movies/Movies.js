import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'Utils/MuvieAPI';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import css from "./Movies.module.css"

export const Movies = () => {
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const movieId = searchParams.get(`movieId`) ?? '';

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);

    fetchSearchMovie(movieId)
      .then(({ results }) => {
        if (!results.length) {
          setSearchParams({});
          throw new Error(`"${movieId}" not found`);
        }
        setData(results);
      })
      .catch(err => alert('error:' + err))
      .finally(setLoading(false));
    }, [movieId, setSearchParams]);

   const handleSubmit = searchMovieId => {
    if (!searchMovieId) return setSearchParams({});
    setSearchParams({ movieId: searchMovieId });
  };

  return (
    <main>
      <div className={css.search}>
        {loading && <Loader />}
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      {data.length !== 0 && <MoviesList data={data} />}
      {!loading && <MoviesList data={data} />}
    </main>
  ); 
}