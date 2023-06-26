import { Link, useParams } from "react-router-dom"

export const MovieDetails = () => {
    const {filmId } = useParams();
    
    return (
        <>
            <h2>Movie:{filmId}</h2>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="review">Revievs</Link>
                </li>
            </ul>
        </>
    )
}