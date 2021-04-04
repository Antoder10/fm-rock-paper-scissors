import React from 'react';

import logo from '../images/logo.svg';

const Header = ({score}) => {
  return (
    <div className="flex flex-row justify-between rounded-md border-2 border-gray-500 mt-8 p-6">
      <img src={logo} alt="Rock Paper Scissors" />
      <div className="flex flex-col items-center justify-center bg-white rounded-md px-12">
        <span className="uppercase">score</span>
        <span className="font-bold text-5xl">{score}</span>
      </div>
    </div>
  )
}

export default Header;
