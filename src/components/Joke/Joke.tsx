import React from 'react';
import './Joke.css'

interface JokeProps {
  joke: string;
}

const Joke: React.FC<JokeProps> = ({joke}) => {
  return (
    <div className="joke">
      <p>{joke}</p>
    </div>
  );
};

export default Joke;