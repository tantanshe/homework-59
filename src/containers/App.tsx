import {useState} from 'react';
import AddMovieForm from '../components/AddMovieForm/AddMovieForm';
import './App.css';
import Movie from '../components/Movie/Movie';

const App = () => {
  const [movies, setMovies] = useState([
    {id: '1', text: 'First movie'},
    {id: '2', text: 'Second movie'},
    {id: '3', text: 'Third movie'}
  ]);

  const [movieText, setMovieText] = useState<string>('');

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
    </>
  );
};

export default App;
