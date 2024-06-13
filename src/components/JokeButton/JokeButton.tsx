import React from 'react';
import './JokeButton.css';

interface JokeButtonProps {
  onClick: () => void;
}

const JokeButton: React.FC<JokeButtonProps> = React.memo(({onClick}) => {
  return (
    <button className="joke-button" onClick={onClick}>
      Get a new joke!
    </button>
  );
});

export default JokeButton;