import MovieCard from "../components/MovieCard.jsx";

function Home(){

    const movies = [
        {id: 1, title: "Le conte de menthe et cristaux", release_date: "2024"},
        {id: 2, title: "L'amour ouf", release_date: "2024"},
        {id: 3, title: "La folle histoire de richard", release_date: "2023"},

    ]

    const handleSearch = () => {

    }

    return(
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home;