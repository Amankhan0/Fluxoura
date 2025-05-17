import React from 'react'

export default function PageTitle({title, className, style}) {
  return (
    <div className={['text-xl font-bold tracking-wide mb-5 ',className]} style={style}>{title}</div>
  )
}
