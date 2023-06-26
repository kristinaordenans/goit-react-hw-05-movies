import { Routes, Route, Link } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Movie } from "pages/Movie";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/movies" element={<Movies/>}>
          <Route path="/movies/:movieId" element={<Movie/>}/>
          <Route path="" element={<div>Cast</div>}/>
          <Route path="" element={<div>Reviews</div>}/>
        </Route>   
      </Routes>
    </div>
  );
};


// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDg3Zjc1N2VkNzlmMjJjYzc1MmNjNjI2MDRiYmEzMSIsInN1YiI6IjY0OTk2MDQyYmJkMGIwMDBhZGYxNGNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8EWd1WEkvFSv-1esa_lWyYW1ErfKyLO7K4zWbUx18Y'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
