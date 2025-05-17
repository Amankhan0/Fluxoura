import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setApiJson } from '../../Store/Action/Api/ApiAction'

export default function InputField({ type, title, important, fieldName, parent }) {
    const dispatch = useDispatch()
    const reduxApi = useSelector(state=>state.ApiReducer)

    const handleChange = (e) => {
        var json = reduxApi?.json
        if (parent) {
            json[parent] = json[parent] || {};
            Object.assign(json[parent], { [fieldName]: e?.target?.value });
          } else {
            Object.assign(json, { [fieldName]: e?.target?.value });
          }
        dispatch(setApiJson(json))
    }

    return (
        <div className='flex flex-col'>
            <label className=''>{title}{important ? <span className='text-error'>*</span> : null}</label>
            <input type={type || 'text'} onChange={(e)=>handleChange(e)} />
        </div>
    )
}
