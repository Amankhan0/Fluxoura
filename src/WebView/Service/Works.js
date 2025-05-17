import React from "react";
import Background from "../../Navigation/Background/Background";
import Contact from "../Contact/Contact";

const Service = () => {

    var serviceArr = [
        {
            title: 'Tech'
        },
        {
            title: 'Media'
        },
        {
            title: 'Research'
        },
        {
            title: 'Design'
        },
        {
            title: 'Media'
        }
    ]

    return (
        <div className="h-full w-full flex overflow-x-scroll">
            {
                serviceArr?.map((ele, i) => (
                    <div key={i} className="min-w-[400px] border text-center h-[70vh] text-gray-300 hover:bg-[#42ef19] hover:font-bold hover:text-white cursor-pointer"> {/* Adjust width as needed */}
                        <div className="text-5xl uppercase mt-32">
                            <p>{ele.title}</p>
                            <p className="mt-2">Solution</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );

}

export default Service;