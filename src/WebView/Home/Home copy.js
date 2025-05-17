import React from "react";
import Background from "../../Navigation/Background/Background";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import SomeWork from "../SomeWork/SomeWork";
import banner from '../../Image/creativea.png';

const Home = () => {

    return (
        <div style={{ fontFamily: 'CustomFont, sans-serif' }} className="text-black dark:text-white">
            <div className="w-full lg:h-[100vh]">
                <div className="p-[10%] font-bold">
                    <div className="grid grid-cols-3">
                        <div className="text-[5vw] lg:text-[4vw] col-span-2">
                            <div className="">
                                <p>Creativity is  </p>
                            </div>
                            <p className="-mt-2 uppercase text-[5vw] ">
                                the future.
                            </p>
                            <p className="-mt-2 "> Come be creative.</p>
                        </div>
                        <div>
                            <img src={banner} className="w-[100%]"/>
                        </div>
                    </div>
                    <div className="text-[3vw] lg:text-[1.5vw]">
                        <p>At <span className="text-themeColor dark:text-white animate-pulse">Fluxoura</span>, we blend creativity with purpose to create  </p>
                        <p>visually impactful experiences. Our team of designers,  </p>
                        <p>thinkers, and innovators transform your ideas into stunning  </p>
                        <p>websites, branding, and marketing materials, bringing </p>
                        <p>your vision to life with precision and style.</p>
                    </div>
                </div>
            </div>
            <div className="card p-10">
                <WhoWeAre />
            </div>
            <div className="my-20">
                <p className="text-center uppercase dark:text-white text-[8vw]">Feature</p>
                <p className="text-center dark:text-white text-[6vw]">Our Feature & Services.</p>
                <Service />
            </div>
            <div className="my-20">
                <SomeWork />
            </div>
        </div>
    )
}

export default Home;