import React from 'react';

interface JokeProps {
  joke: string;
}

const Joke: React.FC<JokeProps> = ({ joke }) => {
  return (
    <div className="joke">
      <p>{joke}</p>
    </div>
  );
};

export default Joke;