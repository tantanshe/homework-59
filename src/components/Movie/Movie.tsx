import React, {useState, useEffect} from 'react';
import './Movie.css'

interface MovieProps {
  movie: {
    id: string;
    text: string;
  };
  onRemoveMovie: (movieId: string) => void;
  onEditMovie: (movieId: string, newText: string) => void;
}

const Movie: React.FC<MovieProps> = React.memo(({movie, onRemoveMovie, onEditMovie}) => {
  const [text, setText] = useState(movie.text);

  useEffect(() => {
    setText(movie.text);
  }, [movie.text]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onEditMovie(movie.id, e.target.value);
  };
  return (
    <div className="movie">
      <input className="movie-change" type="text" value={text} onChange={handleChange}/>
      <button className="remove-movie-button" onClick={() => onRemoveMovie(movie.id)}>Remove</button>
    </div>
  );
});

export default Movie;