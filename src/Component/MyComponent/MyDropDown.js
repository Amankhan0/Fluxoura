import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavigationJson } from "../../Store/Action/NavigationAndFormAction/NavigationAndFormAction";

const MyDropDown = ({ title, option, placeholder, keyName }) => {

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

    return (<>

        <label>{title}</label>
        <select onChange={(e) => onChange(e.target.value)} className="border border-black w-full rounded-xl p-3">
            <option value=''>{placeholder}</option>
            {
                option.map((ele, i) => {
                    return (
                        <option>{ele}</option>
                    )
                })
            }
        </select>

    </>)
}

export default MyDropDown;