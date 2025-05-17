import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function NavigationButton({url, title}) {
    const navigate = useNavigate()
    const handleNavigation = () =>{
        navigate(url)
    }
  return (
    <button className='btn bg-primary/10 text-primary' onClick={handleNavigation}> {title} </button>
  )
}
