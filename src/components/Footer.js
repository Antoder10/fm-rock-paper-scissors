import React from 'react'

const Footer = ({setShowModal}) => {
  return (
    <div className="flex justify-end w-full">
      <button
        className="rounded-md border-2 border-white text-white uppercase py-1 px-8"
        onClick={() => setShowModal(true)}
      >
        Rules
      </button>
    </div>
  )
}

export default Footer;
