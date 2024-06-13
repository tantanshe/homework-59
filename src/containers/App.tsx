import {useEffect, useState} from 'react';
import AddMovieForm from '../components/AddMovieForm/AddMovieForm';
import Movie from '../components/Movie/Movie';
import Joke from '../components/Joke/Joke';
import JokeButton from '../components/JokeButton/JokeButton';
import './App.css';

const App = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [movies, setMovies] = useState([
    {id: '1', text: 'First movie'},
    {id: '2', text: 'Second movie'},
    {id: '3', text: 'Third movie'}
  ]);
  const [movieText, setMovieText] = useState<string>('');
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    try {
      const response = await fetch(url);
      const info = await response.json();
      setJoke(info.value);
    } catch (error) {
      setJoke('Failed to fetch joke');
    }
  };

  useEffect(() => {
    console.log('1');
    void fetchJoke();
  }, []);

  const movieTextChange = (text: string) => {
    setMovieText(text);
  };

  const addMovie = () => {
    if (movieText.trim()) {
      const newMovie = {
        id: Date.now().toString(),
        text: movieText
      };
      const newMovies = [...movies, newMovie];
      setMovies(newMovies);
      setMovieText('');
    }
  };

  const removeMovie = (movieId: string) => {
    const updatedMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(updatedMovies);
  };

  const editMovie = (movieId: string, newText: string) => {
    const updatedMovies = movies.map(movie =>
      movie.id === movieId ? {...movie, text: newText} : movie
    );
    setMovies(updatedMovies);
  };

  return (
    <>
      <h2>TO-WATCH LIST</h2>
      <AddMovieForm
        movieText={movieText}
        onMovieTextChange={movieTextChange}
        onAddMovie={addMovie}
      />
      <div>
        {movies.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            onRemoveMovie={removeMovie}
            onEditMovie={editMovie}
          />
        ))}
      </div>
      <hr/>
      <div className="joke-app">
        <h2>JOKES GENERATOR</h2>
        <Joke joke={joke}/>
        <JokeButton onClick={fetchJoke}/>
      </div>
    </>
  );
};

export default App;
