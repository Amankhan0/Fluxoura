import React from 'react'

export default function CustomTh({TH, inner, paginationType}) {
  return (
    <tr>
      {TH?.map((element, i) => {
        var items = element?.title?.split('|')
        return element?.status ?<th key={i} className={`${element?.className?element?.className:'text-center'} whitespace-nowrap bg-slate-200  ${i == 0 ? paginationType==='server'?'rounded-tl-lg' : '' : ''} ${i == TH.length - 1 ? paginationType==='server'?'rounded-tr-lg' : '' : ''}  ${inner ? 'ChildTHClass' : 'bg-slate-200 text-slate-600'} px-4 py-3 tracking-wide  dark:bg-navy-800 dark:text-navy-100 lg:px-5`}>
          <span className='flex flex-col'>{items?.map((Obj, index) => <span key={index}> {Obj} </span>)}</span>
        </th> : null
      })}
    </tr>
  )
}