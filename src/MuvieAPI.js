import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';

export class fetchMovie {
    #BASE_PROPS = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDg3Zjc1N2VkNzlmMjJjYzc1MmNjNjI2MDRiYmEzMSIsInN1YiI6IjY0OTk2MDQyYmJkMGIwMDBhZGYxNGNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8EWd1WEkvFSv-1esa_lWyYW1ErfKyLO7K4zWbUx18Y'
            }
    }
    
    getTrendingMovies() {
        return axios.get(`${BASE_URL}/trending/movie/day?language=en-US`, this.#BASE_PROPS);
    }

    getSearchMovies(query) {
        return axios.get(`${BASE_URL}/search/movie?query=${query}include_adult=false&language=en-US&page=1`, this.#BASE_PROPS);
    }

    getMovieDetails(id) {
        return axios.get(`${BASE_URL}/movie/${id}?language=en-US`, this.#BASE_PROPS);
    }

    getMovieCredits(id) {
        return axios.get(`${BASE_URL}/movie/${id}/credits?language=en-US&page=1`, this.#BASE_PROPS);
    }

    getMovieReview(id) {
        return axios.get(`${BASE_URL}/movie/${id}/reviews?language=en-US&page=1`, this.#BASE_PROPS);
    }
}

export const MovieAPI = new fetchMovie();