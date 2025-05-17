import React from "react";
import { rightIcon } from "../../Constant/Icons/Icon";
import { NavLink } from "react-router-dom";

const WhoWeAre = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="p-[2vw] sm:p-[2vw] md:p-[5vw] mb-5">
                <h2 className=" dark:text-white text-[8vw] lg:text-[4vw] text-black" style={{ lineHeight: "60px"}}>
                    What<br /> <span className="text-themeColor animate-pulse dark:text-white text-[8vw] lg:text-[4vw]" style={{ lineHeight: "50px" }}>We Do?</span>
                </h2>
                <h4 className="mt-2 font-bold text-xl dark:text-white text-black">We specialize in a range of</h4>
                <h1 className="font-bold text-xl dark:text-white text-black">graphic design services, <br /> including:</h1>
            </div>
            <div className="p-[5vw] sm:p-[2vw] md:p-[5vw] bg-themeColor text-white  mb-5">
                <h3 className="font-bold text-xl mb-5 dark:text-white">About Fluxoura</h3>
                <p className=" dark:text-white">We specialize in crafting stunning visual identities that make brands unforgettable. With a passion for design and a commitment to excellence, we bring creativity and strategy together to deliver compelling solutions across multiple platforms.</p>
                <NavLink to='/about' className="flex gap-6 mt-5 text-xl font-bold  dark:text-white" href="https://www.doorsstudio.com/about">About us
                    {rightIcon}
                </NavLink>
            </div>
            <div className="p-[2vw] sm:p-[2vw] md:p-[5vw]">
                <h3 className="font-bold text-xl mb-5  dark:text-white text-black">At Fluxoura</h3>
                <p className=" dark:text-white text-black">we specialize in creating visually stunning and strategic designs that elevate brands. From unique logos and engaging web experiences to high-quality print materials and standout packaging, we ensure every detail reflects your brand’s identity. Let’s bring your vision to life!</p>
                <a className="flex gap-6 mt-5 text-xl font-bold  text-black dark:text-white" href="https://www.doorsstudio.com/service">Our services
                    {rightIcon}
                </a>
            </div>
        </div>
    );

}

export default WhoWeAre;