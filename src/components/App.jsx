import { Routes, Route } from "react-router-dom";
// import { lazy } from 'react';
import { Layout } from "./Layout";

import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import { Cast } from "../components/Cast/Cast";
import { Reviews } from "../components/Reviews/Reviews";
import { NotFound } from "../components/NotFound/NotFound";


// const Home = lazy(() => import('pages/Home'));
// const MovieDetails = lazy(() => import('pages/MovieDetails'));
// const Movies = lazy(() => import('pages/Movies'));
// const Cast = lazy(() => import('components/Cast/Cast'));
// const Reviews = lazy(() => import('components/Reviews/Reviews'));
// const NotFound = lazy(() => import('components/NotFound/NotFound'));


export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/> 
          <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>} /> 
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>  
      </Routes> 
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
