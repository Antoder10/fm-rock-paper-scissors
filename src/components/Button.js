import React from 'react';

import scissors from '../images/icon-scissors.svg';

const Button = ({type, handleClick}) => {
  return (
    <>
    <button
      className={`bg-white rounded-full p-16 border-24 border-${type} w-16 h-16`}
      name={type}
      onClick={e => handleClick(e)}
    >
      <div className={`bg-${type}-img bg-cover bg-no-repeat w-16 h-16`}/>
    </button>
    </>
  )
}

export default Button;