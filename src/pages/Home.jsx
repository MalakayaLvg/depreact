import "../css/Home.css"
import MovieCard from "../components/MovieCard.jsx";
import { useState } from "react";

function Home(){

    const [ searchQuery, setSearchQuery ] = useState("");

    const movies = [
        {id: 1, title: "Le conte de menthe et cristaux", release_date: "2024"},
        {id: 2, title: "L'amour plouf", release_date: "2024"},
        {id: 3, title: "La folle histoire de richard", release_date: "2023"},

    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return(
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies ..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie =>
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                    )
                )}
            </div>
        </div>
    )
}

export default Home;