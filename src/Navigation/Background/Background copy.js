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
        <div className="ts-page-wrapper">
            <div className="container">

                {/* <!--NAVIGATION ******************************************************************************************--> */}
                <header id="header">
                    <nav className="navbar navbar-dark ts-separate-bg-element">
                        <a className="navbar-brand" href="#">
                            <img src="assets/img/logo.png" alt="" />
                        </a>
                        {/* <!--end navbar-brand--> */}
                        <button className="navbar-toggler ts-open-side-panel" type="button" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <!--end navbar-toggler--> */}
                    </nav>
                    {/* <!--end navbar--> */}
                </header>
                {/* <!--end #header--> */}

                {/* <!--CONTENT *********************************************************************************************--> */}
                <main id="main-content">
                    <div className="ts-content-wrapper">
                        <div className="row">
                            {/* <!--Page Title--> */}
                            <div className="col-md-6">
                                <h1>Get Ready For Our<br />ICO Launch</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra lectus neque.
                                </p>
                                <a href="#" className="btn btn-primary mr-2 ts-open-side-panel">Learn More</a>
                                <a href="https://vimeo.com/63502573" className="btn btn-outline-light video-popup"><i className="fa fa-play mr-2"></i>Video</a>
                            </div>
                            {/* <!--end col-md-6--> */}
                            {/* <!--Count Down--> */}
                            <div className="col-md-6">
                                <div className="text-center my-4">
                                    <div className="ts-count-down" data-date="December 24, 2018 15:03:26"><div><span className="ts-cc-number">00 </span><span className="ts-cc-description">Days</span></div><div><span className="ts-cc-number">00 </span><span className="ts-cc-description">Hours</span></div><div><span className="ts-cc-number">00 </span><span className="ts-cc-description">Minutes</span></div><div><span className="ts-cc-number">00 </span><span className="ts-cc-description">Seconds</span></div></div>
                                    {/* <!--end ts-count-down--> */}
                                </div>
                            </div>
                            {/* <!--end col-md-6--> */}
                        </div>
                        {/* <!--end row--> */}
                    </div>
                    {/* <!--end ts-content-wrapper--> */}
                </main>
                {/* <!--end #main-content--> */}

                {/* <!--FOOTER **********************************************************************************************--> */}
                <footer id="footer">
                    <div className="clearfix py-4">
                        <div className="float-none float-sm-left">
                            <div className="ts-social-icons">
                                <a href="#" className="fab fa-facebook"></a>
                                <a href="#" className="fab fa-twitter"></a>
                                <a href="#" className="fab fa-pinterest"></a>
                                <a href="#" className="fab fa-instagram"></a>
                            </div>
                        </div>
                        {/* <!--end social-icons--> */}
                        <div className="float-none float-sm-right text-left text-sm-right ts-opacity__50">
                            <small>© 2018 ThemeStarz, All Rights Reserved</small>
                        </div>
                        {/* <!--end text-left--> */}
                    </div>
                    {/* <!--end clearfix--> */}
                </footer>
                {/* <!--end #footer--> */}
            </div>
            {/* <!--end container--> */}

            {/* <!--BACKGROUND **********************************************************************************************--> */}
            <div className="ts-background ts-shapes-canvas position-fixed ts-separate-bg-element" data-bg-color="#00265f">
                <div className="ts-shape"><div className="ts-background-image ts-animate ts-scale" data-bg-image="assets/img/bg/14.png" style={{ animationDuration: '6s', backgroundImage: fourteen }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/13.png" style={{ animationDuration: '12s', backgroundImage: thirteen }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-scale" data-bg-image="assets/img/bg/12.png" data-bg-opacity=".3" style={{ animationDuration: '8s', backgroundImage: twelve }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-scale" data-bg-image="assets/img/bg/11.png" style={{ animationDuration: '7s', backgroundImage: eleven }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/10.png" style={{ animationDuration: '11s', backgroundImage: ten }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/9.png" data-bg-opacity=".8" style={{ animationDuration: '14s', backgroundImage: nine }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/8.png" data-bg-opacity=".8" style={{ animationDuration: '14s', backgroundImage: eight }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/7.png" style={{ animationDuration: '14s', backgroundImage: seven }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/6.png" data-bg-opacity=".8" style={{ animationDuration: '8s',opacity:'0.8', backgroundImage: twelve }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate" data-bg-image="assets/img/bg/5.png" data-bg-opacity=".8" style={{ animationDuration: '12s',opacity:'0.8', backgroundImage: five }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/4.png" style={{ animationDuration: '11s', backgroundImage: four }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/3.png" data-bg-opacity=".8" style={{ animationDuration: '6s',opacity:'0.8', backgroundImage: three }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/2.png" style={{ animationDuration: '8s', backgroundImage: two }}></div></div>
            <div className="ts-shape"><div className="ts-background-image ts-animate ts-bounce" data-bg-image="assets/img/bg/1.png" data-bg-opacity=".8" style={{ animationDuration: '12s',opacity:'0.8', backgroundImage: one }}></div></div>
            <div className="ts-background" style={{backgroundColor:'rgb(0, 38, 95)'}}></div></div>
        {/* <!--end ts-background--> */ }
    </div >
    )
}

export default Background;