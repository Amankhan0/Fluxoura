import React from "react";
import one from './Image/1.png'
import two from './Image/2.png'
import three from './Image/3.png'
import four from './Image/4.png'
import five from './Image/5.png'
import six from './Image/6.png'
import seven from './Image/7.png'
import eight from './Image/8.png'
import nine from './Image/9.png'
import ten from './Image/10.png'
import eleven from './Image/11.png'
import twelve from './Image/12.png'
import thirteen from './Image/13.png'
import fourteen from './Image/14.png'
import './background.css'

const Background = () => {
    
    return (
        <div className="animated-bg">
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={one} />
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={two} />
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={three} />
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={four} />
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={six} />
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={seven} />
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={eight} />
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={nine} />
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={ten} />
            {/* <img className="ml-[10%] absolute ts-animate ts-bounce" src={eleven} /> */}
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={twelve} />
            <img className="ml-[10%] absolute ts-animate ts-bounce" src={thirteen} />
            <img className=" absolute ts-animate ts-bounce" src={fourteen} />
        </div>
    )
}

export default Background;