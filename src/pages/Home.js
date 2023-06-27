import { useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { fetchTrandingMovies } from "Utils/MuvieAPI";
import { Loader } from "components/Loader/Loader";

export const Home = () => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

fetchTrandingMovies(setData)
      .then(({ results }) => setData(results))
      .catch(err => console.error('error:' + err))
      .finally(setLoading(false));
  }, []);
    
    return (
        <>
            {loading && <Loader />}
            <h2>Trending today</h2>
            <MoviesList  data={data}/>
        </>
    )
}
