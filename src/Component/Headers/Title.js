import React from 'react'

export default function Title({title, className, style, important}) {

  return (
    <label className={' '+className}>{title}{important ? <span className='text-error'>*</span> : null}</label>
  )
}
