import React from "react";
import Background from "../../Navigation/Background/Background";
import Contact from "../Contact/Contact";
import Button from "../../Component/Button/Button";

const Service = () => {
    
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  mx-[5%] mt-20">
            <div className="card p-5 items-center text-center h-[50vh]">
                <img className="w-[65%]" src="https://echoinnovateit.com/wp-content/uploads/2023/08/mobile-app-development.png" />
                <p className="text-[2vw] my-5 text-black dark:text-white">Brand Identity Design</p>
                <p className="mt-2 text-black dark:text-white">From logos to typography, color schemes, and beyond, we help build cohesive and memorable brands that leave a lasting impression.</p>
                {/* <div className="mt-10">
                    <Button title="Know More"/>
                </div> */}
            </div>
            <div className="card p-5 items-center text-center h-[50vh]">
                <img className="w-[65%]" src="https://echoinnovateit.com/wp-content/uploads/2023/08/mobile-app-development.png" />
                <p className="text-[2vw] my-5 text-black dark:text-white">Web & App Design</p>
                <p className="mt-2 text-black dark:text-white">We create intuitive, beautiful, and user-friendly websites and applications that enhance the user experience and drive engagement.</p>
                {/* <div className="mt-10">
                    <Button title="Know More"/>
                </div> */}
            </div>
            <div className="card p-5 items-center text-center h-[50vh]">
                <img className="w-[65%]" src="https://echoinnovateit.com/wp-content/uploads/2023/08/mobile-app-development.png" />
                <p className="text-[2vw] my-5 text-black dark:text-white">Print Design</p>
                <p className="mt-2 text-black dark:text-white">Brochures, posters, business cards, and more – we bring your brand to life through print that speaks volumes.</p>
                {/* <div className="mt-10">
                    <Button title="Know More"/>
                </div> */}
            </div>
            <div className="card p-5 items-center text-center h-[50vh]">
                <img className="w-[65%]" src="https://echoinnovateit.com/wp-content/uploads/2023/08/mobile-app-development.png" />
                <p className="text-[2vw] my-5 text-black dark:text-white">Packaging Design</p>
                <p className="mt-2 text-black dark:text-white">Stand out on the shelf with custom packaging that not only grabs attention but also tells your brand’s story.</p>
                {/* <div className="mt-10">
                    <Button title="Know More"/>
                </div> */}
            </div>
        </div>
    );

}

export default Service;