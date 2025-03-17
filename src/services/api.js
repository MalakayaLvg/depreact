const API_KEY = "06c3aaaadbb8cdeac3fd2b2cb497b272";
const BASE_URL = "https://api.themoviedb.irg/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movies/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`);
    const data = await response.json()
    return data.results
}
