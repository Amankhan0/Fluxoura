import React from 'react'

export default function ButtonCompoment({ title, onClick }) {
  return (
    <button className="btn rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90" onClick={onClick}>
      {title}
    </button>
  )
}
