import { Link } from "react-router-dom";

export const Movies = () => {
    //  список популярних фільмів
    // useEffect(() => {
    // })
    return <div>
        <h2>Trending today</h2>
        {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => {
            return (<Link key={film} to={`${film}`}> { film }</Link>);
        })}
    </div>
}