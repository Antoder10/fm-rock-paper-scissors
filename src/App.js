import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import Button from './components/Button';

const types = ['rock', 'paper', 'scissors'];

const App = () => {
  const [playerPick, setPlayerPick] = useState('');
  const [botPick, setBotPick] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  const calculateScore = () => {
    if (playerPick === 'rock' && botPick === 'paper') {
      setScore(prev => prev - 1);
      setMessage('you lose');
    }
    else if (playerPick === 'paper' && botPick === 'scissors') {
      setScore(prev => prev - 1);
      setMessage('you lose');
    }
    else if (playerPick === 'scissors' && botPick === 'rock') {
      setScore(prev => prev - 1);
      setMessage('you lose');
    }
    else if (playerPick === 'rock' && botPick === 'scissors') {
      setScore(prev => prev + 1);
      setMessage('you win');
    }
    else if (playerPick === 'paper' && botPick === 'rock') {
      setScore(prev => prev + 1);
      setMessage('you win');
    }
    else if (playerPick === 'scissors' && botPick === 'paper') {
      setScore(prev => prev + 1);
      setMessage('you win');
    }
    else {
      setMessage('draw');
    }
  }

  const handleClick = e => {
    setPlayerPick(e.target.name);
    let randomType = types[Math.floor(Math.random() * types.length)];
    setBotPick(randomType);
    calculateScore();
  }

  const resetPicks = () => {
    setPlayerPick('');
    setBotPick('');
  }

  return (
    <div className="flex justify-center bg-gradient-to-r from-background-from to-background-to w-screen h-screen">
      <div className="w-2/3">
        <Header score={score} />
        {!playerPick &&
          <div className="flex bg-triangle justify-center items-center bg-cover bg-no-repeat mt-8">
            <Button type={'rock'} handleClick={handleClick} />
            <Button type={'paper'} handleClick={handleClick} />
            <Button type={'scissors'} handleClick={handleClick} />
          </div>
        }
        {playerPick && botPick &&
          <div className="grid grid-cols-3 items-center justify-items-center mt-16">
            <Button type={playerPick} handleClick={handleClick} />
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-4xl uppercase text-white mb-4">{message}</span>
              <button
                className="bg-white text-black rounded-md uppercase px-8 py-4"
                onClick={() => resetPicks()}
              >
                Play Again
              </button>
            </div>
            <Button type={botPick} handleClick={handleClick} />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
