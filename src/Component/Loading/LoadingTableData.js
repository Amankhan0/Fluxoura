import React from 'react'

export default function LoadingTableData({msg, style}) {
  return (
    <div className='w-full flex flex-col text-center justify-center text-accent-light' style={{minHeight : 530, style}}>
        <label className='text-2xl flex flex-row min-w-full justify-center items-center'>
            <span className='spinner is-elastic h-5 w-5 animate-spin rounded-full border-[3px] border-info/30 border-r-info'></span>&nbsp;Please wait...
        </label>
        <label className='text-2xl'>{msg?msg:'We are processing data...'}</label>
    </div>
  )
}
