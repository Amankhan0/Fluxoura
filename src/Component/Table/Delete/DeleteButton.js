import React from 'react'

export default function DeleteButton({ enableDeleteBtn, data, ele, handleDelete }) {
    const Check = (ele) =>{
        if(enableDeleteBtn){
          return data?.find((Obj)=>Obj._id === ele?._id)
        }
      }
    
    return (
        <td>
            <input
                className="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:bg-error checked:!border-error hover:!border-error focus:!border-error dark:border-navy-400"
                type="checkbox"
                checked={Check(ele)}
                onClick={() => handleDelete(ele)}
            />
        </td>
    )
}
