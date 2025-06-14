import React from "react";
import { useSelector } from "react-redux";
import logo from '../Artboard 2.png';
import logoWhite from '../logowhite.png';
import { faceBookIcon, instaIcon, linkdinIcon } from "../Constant/Icons/Icon";
import { NavLink } from "react-router-dom";
import Switcher from "../Component/Switcher";

const Footer = () => {

    const reduxSidebar = useSelector(state => state.SidebarReducer)
    const path = window.location.pathname

    console.log(reduxSidebar);
    

    return (
        <div className="crad shadow-xl bg-[#F2F2F2] text-black dark:bg-black">
            <div className="p-14">
                <div className="flex justify-center gap-10">
                    <div className="w-10 h-10 rounded-full bg-white fa shadow-xl p-2">
                        <i className="text-themeColor">{instaIcon}</i>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white fa shadow-xl p-2">
                        <i className="text-themeColor">{linkdinIcon}</i>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white fa shadow-xl p-2">
                        <i className="text-themeColor">{faceBookIcon}</i>
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <div className='flex gap-10 text-[4vw] lg:text-[1vw]'>
                        <NavLink className={`${path === '/' && 'border-b border-b-themeColor text-themeColor'} text-black dark:text-white`} to='/'>Home</NavLink>
                        <NavLink className={`${path === '/about' && 'border-b border-b-themeColor text-themeColor'} text-black dark:text-white`} to='/about'>About</NavLink>
                        <NavLink className={`${path === '/work' && 'border-b border-b-themeColor text-themeColor'} text-black dark:text-white`} to='/work'>Work</NavLink>
                        <NavLink className={`${path === '/contact' && 'border-b border-b-themeColor text-themeColor'} text-black dark:text-white`} to='/contact'>Contact</NavLink>
                    </div>
                </div>
            </div>
            <div className="card p-3 dark:bg-black">
                <div className="flex justify-center gap-5 items-center">
                    <img className='w-[16vw] h-[4vw] lg:w-[5vw] lg:h-[1vw] text-black' src={reduxSidebar?.theme === 'light' ? logoWhite : logo} />
                    <p className="text-[3.5vw] lg:text-[1vw] text-black dark:text-white">Copyright @2025; Design by Aman Khan</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;