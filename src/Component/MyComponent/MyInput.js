import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavigationJson } from "../../Store/Action/NavigationAndFormAction/NavigationAndFormAction";

const MyInput = ({title,placeholder,keyName}) =>{

    const reducxNavigationAndForm = useSelector(state => state.NavigationAndFormReducer)
    const dispatch = useDispatch()


    const onChange = (value) => {
        var json = {
            [keyName]: value
        }
        var oldJson = reducxNavigationAndForm.navigationAndFormJson
        Object.assign(oldJson, json)
        dispatch(setNavigationJson(oldJson))
    }

    return(<>

        <label>{title}</label>
        <input onChange={(e)=>onChange(e.target.value)} className="border border-black w-full rounded-xl p-3" placeholder={placeholder}/>

    </>)
}

export default MyInput;