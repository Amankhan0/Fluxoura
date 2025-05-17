import React from "react";
import Background from "../../Navigation/Background/Background";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import SomeWork from "../SomeWork/SomeWork";
import banner from '../../Image/creativea.png';

const Home = () => {

    const width = window.innerWidth

    return (
        <div style={{ fontFamily: 'CustomFont, sans-serif' }} className="text-black dark:text-white">
            {
                width > 500 ?
                    <div className="grid grid-cols-2 w-full lg:h-[100vh] xl:h-[100vh]">
                        <div className="pt-[15%] pl-[15%] font-bold">
                            <div className="text-[5vw]">
                                <div className="flex text-black dark:text-white">
                                    <p>Creativity is  </p>
                                </div>
                                <p className="-mt-8 uppercase text-[6vw] text-black dark:text-white">
                                    the future.
                                </p>
                                <p className="-mt-10"> Come be creative.</p>
                            </div>
                            <div className="mt-10 text-[1.4vw]">
                                <p className=" text-black dark:text-white">At <span className="text-themeColor dark:text-white animate-pulse">Fluxoura</span>, we blend creativity with purpose to create  </p>
                                <p className=" text-black dark:text-white">visually impactful experiences. Our team of designers,  </p>
                                <p className=" text-black dark:text-white">thinkers, and innovators transform your ideas into stunning  </p>
                                <p className=" text-black dark:text-white">websites, branding, and marketing materials, bringing </p>
                                <p className=" text-black dark:text-white">your vision to life with precision and style.</p>
                            </div>
                        </div>
                        <div>
                            <img src={banner} />
                        </div>
                    </div>
                    :
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
                                    <img src={banner} className="w-[100%]" />
                                </div>
                            </div>
                            <div className="text-[3vw] lg:text-[1.5vw]">
                                <p className=" text-black dark:text-white">At <span className="text-themeColor dark:text-white animate-pulse">Fluxoura</span>, we blend creativity with purpose to create  </p>
                                <p className=" text-black dark:text-white">visually impactful experiences. Our team of designers,  </p>
                                <p className=" text-black dark:text-white">thinkers, and innovators transform your ideas into stunning  </p>
                                <p className=" text-black dark:text-white">websites, branding, and marketing materials, bringing </p>
                                <p className=" text-black dark:text-white">your vision to life with precision and style.</p>
                            </div>
                        </div>
                    </div>
            }

            <div className="card p-10">
                <WhoWeAre />
            </div>
            <div className="my-20">
                <p className="text-center uppercase dark:text-white text-[8vw] lg:text-[4vw] md:lg:text-[4vw] sm:text-[4vw]">Feature</p>
                <p className="text-center dark:text-white text-[6vw] lg:text-[4vw] md:lg:text-[4vw] sm:text-[4vw]">Our Feature & Services.</p>
                <Service />
            </div>
            <div className="my-20" id='work'>
                <p className="text-center uppercase dark:text-white text-[8vw] lg:text-[4vw] md:lg:text-[4vw] sm:text-[4vw]">Work</p>
                <p className="text-center dark:text-white text-[6vw] lg:text-[4vw] md:lg:text-[4vw] sm:text-[4vw]">Our Works</p>
                <SomeWork />
            </div>
        </div>
    )
}

export default Home;