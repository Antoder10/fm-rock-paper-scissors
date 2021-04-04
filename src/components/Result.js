import React from 'react';

import Button from './Button';

const Result = ({playerPick, botPick, resetPicks, message}) => {
  return (
    <div className="grid grid-cols-3 w-3/4 items-center justify-items-center mt-16">
      <div className="flex flex-col items-center">
        <span className="uppercase text-white text-2xl mb-16">You Picked</span>
        <Button type={playerPick} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold text-4xl uppercase text-white mb-4">{message}</span>
        <button
          className="bg-white text-black rounded-md uppercase px-8 py-4"
          onClick={() => resetPicks()}
        >
          Play Again
        </button>
      </div>
      <div className="flex flex-col items-center">
        <span className="uppercase text-white text-2xl mb-16">The house Picked</span>
        <Button type={botPick} />
      </div>
    </div>
  )
}

export default Result;
