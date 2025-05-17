import React from "react";

const Button = ({title}) =>{
    return(
        <div className="bg-themeColor rounded-xl px-7 py-3">
            <p className="text-white">{title}</p>
        </div>
    )
}

export default Button;