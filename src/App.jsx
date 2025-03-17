import './App.css'
import MovieCard from "./components/MovieCard.jsx";

function App() {

  const movieNumber = 1;

  return (
    <>
        { movieNumber === 1 ? (
       <MovieCard movie={{title: "Le retour du quoicoufeur", release_date: "2025"}}/>
        ) : (
        <MovieCard movie={{title: "Bienvenue les enfants", release_date: "2024"}}/>
        )}
    </>
  )
}

export default App
