import React from 'react'
import FilterConstant from '../../../Constant/Filter/FilterConstant'

export default function ServerFilter({screen}) {
  let td = FilterConstant.find(Obj => Obj.screen === screen)
  const handleOnChange = () =>{
    
  }

  return (
    <div>
        {
        td !== undefined ? td?.filterType?.map((element, i) => {
          return <div key={i} className=''>
            <div className='max-w-lg'>
              <label className="block">
                <h2 className="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">{element.text}</h2>
                <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent" onChange={(e) => handleOnChange(e.target.value, element)}>
                  <option value={''} selected> Select </option>
                  {element.value.map((childelement, j) => <option key={j} > {childelement.text} </option>)}
                </select>
              </label>
            </div>
          </div>
        }) : null
      }
    </div>
  )
}
