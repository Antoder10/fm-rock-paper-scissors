import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import PickOne from './components/PickOne';
import Result from './components/Result';
import Footer from './components/Footer';
import Modal from './components/Modal';

const types = ['rock', 'paper', 'scissors'];

const App = () => {
  const [playerPick, setPlayerPick] = useState('');
  const [botPick, setBotPick] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const calculateScore = () => {
    if ((playerPick === 'rock' && botPick === 'paper') || (playerPick === 'paper' && botPick === 'scissors') || (playerPick === 'scissors' && botPick === 'rock')) {
      setScore(prev => prev - 1);
      setMessage('you lose');
    }
    else if ((playerPick === 'rock' && botPick === 'scissors') || (playerPick === 'paper' && botPick === 'rock') || (playerPick === 'scissors' && botPick === 'paper')) {
      setScore(prev => prev + 1);
      setMessage('you win');
    }
    else {
      setMessage('draw');
    }
  }

  useEffect(() => {
    calculateScore();
  }, [botPick])

  const handleClick = e => {
    setPlayerPick(e.target.id);
    let randomType = types[Math.floor(Math.random() * types.length)];
    setBotPick(randomType);
  }

  const resetPicks = () => {
    setPlayerPick('');
    setBotPick('');
  }

  return (
    <>
    {showModal && <Modal setShowModal={setShowModal} />}
    <div className="flex justify-center bg-gradient-to-r from-background-from to-background-to w-screen h-screen">
      <div className="flex flex-col items-center w-2/3 py-8">
        <Header score={score} />
        {!playerPick && <PickOne handleClick={handleClick} />}
        {playerPick && botPick &&
          <Result
            playerPick={playerPick}
            botPick={botPick}
            resetPicks={resetPicks}
            message={message}
          />
        }
        <Footer setShowModal={setShowModal} />
      </div>
    </div>
    </>
  );
}

export default App;
