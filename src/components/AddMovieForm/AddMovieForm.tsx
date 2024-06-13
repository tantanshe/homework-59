import React from 'react';
import './AddMovieForm.css'

interface AddMovieFormProps {
  movieText: string;
  onMovieTextChange: (text: string) => void;
  onAddMovie: () => void;
}

const AddMovieForm: React.FC<AddMovieFormProps> = ({movieText, onMovieTextChange, onAddMovie}) => {
  return (
    <div className="add-movie-form">
      <input type="text" value={movieText} onChange={(e) => onMovieTextChange(e.target.value)}
             className="add-movie-input"
      />
      <button className="add-movie-button" onClick={onAddMovie}>Add</button>
    </div>
  );
};

export default AddMovieForm;