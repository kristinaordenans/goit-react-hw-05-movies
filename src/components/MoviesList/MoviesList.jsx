import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ data }) => {
      const location = useLocation();

    return (
        <ul>
      {data?.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
    </ul>
  );
}