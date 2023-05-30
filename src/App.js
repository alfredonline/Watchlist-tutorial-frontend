import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import SubmissionForm from "./components/SubmissionForm";

function App() {
  const [cards, setCards] = useState([]);

  const addMovie = async (movie) => {
    console.log(movie);
    const addMovieToDatabase = await axios.post(
      "http://localhost:3010/addMovie",
      movie
    );
  };

  const getMovies = async () => {
    const movies = await axios.get("http://localhost:3010/getMovies");
    setCards(movies.data);
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <div className="App">
      <SubmissionForm addMovie={(movie) => addMovie(movie)} />
      <div className="wrapper">
        {cards.map((card) => {
          return <MovieCard {...card} />;
        })}
      </div>
    </div>
  );
}

export default App;
