import React from 'react';

import {ReactComponent as Scissors} from '../images/icon-scissors.svg';
import {ReactComponent as Rock} from '../images/icon-rock.svg';
import {ReactComponent as Paper} from '../images/icon-paper.svg';

const Button = ({type, handleClick}) => {
  return (
    <div
      className={`bg-white rounded-full p-16 border-24 border-${type} w-16 h-16`}
      onClick={e => handleClick(e)}
      id={type}
    >
      {
        (type === 'scissors' && <Scissors />) ||
        (type === 'rock' && <Rock />) ||
        (type === 'paper' && <Paper />)
      }
    </div>
  )
}

export default Button;