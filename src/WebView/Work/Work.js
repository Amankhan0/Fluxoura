import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Data, productData } from "./Data";
import SingleImageDetail from "./SingleImageDetails";
import { BackButton, leftArrowIcon } from "../../Constant/Icons/Icon";
import Animation from "../Animation/Animation";

const Work = () => {

    const [activeImage, setActiveImage] = useState(null)
    const [activeProductImage, setActiveProductImage] = useState(null)
    var path = window.location.pathname.split('/')[2]

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        activeImage !== null ?
        <SingleImageDetail Data={Data} setIndex={setActiveImage} index={activeImage} />
        :
        activeProductImage!==null?
        <SingleImageDetail Data={productData} setIndex={setActiveProductImage} index={activeProductImage} />
        :
            <div>
                <div className="flex pt-10 pl-10 items-center gap-5">
                    <NavLink to='/' className="cursor-pointer text-black dark:text-white">{leftArrowIcon}</NavLink>
                    <p className="text-2xl uppercase text-black dark:text-white">{path}</p>
                </div>
                {
                    path === 'Animation' ?
                        <div className="grid grid-cols-3 gap-10 p-10">
                            <Animation />
                        </div>
                        :
                        path === 'product-manipulation' ?
                            <div className="grid grid-cols-2 gap-10 p-10">
                                {productData.map((img, index) => {
                                    return(
                                        // path === img.type &&
                                        <div key={img.id} className="relative group w-full h-full overflow-hidden">
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                <div
                                                    onClick={() => setActiveProductImage(index)}
                                                    className="text-white underline px-6 py-3 rounded-md text-lg font-semibold cursor-pointer transition"
                                                >
                                                    Click Here
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            :

                            <div className="grid grid-cols-2 gap-10 p-10">
                                {Data.map((img, index) => (
                                    path === img.type &&
                                    <div key={img.id} className="relative group w-full h-full overflow-hidden">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <div
                                                onClick={() => setActiveImage(index)}
                                                className="text-white underline px-6 py-3 rounded-md text-lg font-semibold cursor-pointer transition"
                                            >
                                                Click Here
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                }
            </div>
    );
};

export default Work;