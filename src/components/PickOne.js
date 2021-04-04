import React from 'react';

import Button from './Button';

const PickOne = ({handleClick}) => {
  return (
    <div className="flex flex-col bg-triangle bg-contain bg-center bg-no-repeat justify-between mt-8 w-3/4 h-3/4">
      <div className="flex flex-row justify-between px-16">
        <Button type={'paper'} handleClick={handleClick} />
        <Button type={'scissors'} handleClick={handleClick} />
      </div>
      <div className="flex justify-center">
        <Button type={'rock'} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default PickOne;
