import React from 'react';

import {ReactComponent as Rules} from '../images/image-rules.svg';

const Modal = ({setShowModal}) => {
  return (
    <div className="flex justify-center items-center bg-background-to w-screen h-screen">
      <div className="flex flex-col bg-white w-96 h-auto rounded-md p-8">
        <div className="flex flex-row justify-between mb-8">
          <span className="uppercase text-2xl font-bold">Rules</span>
          <button className="text-2xl" onClick={() => setShowModal(false)}>✕</button>
        </div>
        <Rules />
      </div>
    </div>
  )
}

export default Modal;