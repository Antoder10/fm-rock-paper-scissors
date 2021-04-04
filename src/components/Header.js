import React from 'react';

import logo from '../images/logo.svg';

const Header = ({score}) => {
  return (
    <div className="flex flex-row w-full justify-between rounded-lg border-2 border-gray-500 px-6 py-4">
      <img src={logo} alt="Rock Paper Scissors" />
      <div className="flex flex-col items-center justify-center bg-white rounded-md px-12">
        <span className="uppercase">score</span>
        <span className="font-bold text-5xl">{score}</span>
      </div>
    </div>
  )
}

export default Header;
