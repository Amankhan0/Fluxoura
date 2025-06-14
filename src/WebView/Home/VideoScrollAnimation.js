import React, { useState, useEffect } from 'react';

const VideoScrollAnimation = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate video size and position based on scroll
    const maxScroll = 2000; // Max scroll distance for animation
    const scrollProgress = Math.min(scrollY / maxScroll, 1);

    // Video scaling (from 100% to 30%)
    const videoScale = 1 - (scrollProgress * 0.7);

    // Video moves DOWN instead of UP
    const videoTranslateY = scrollProgress * 100; // Positive value moves DOWN

    // Video position transition
    const isVideoEmbedded = scrollProgress > 0.6;

    return (
        <div className="min-h-[200vh">
            {/* Video Banner Section */}
            <div className="relative h-screen overflow-hidden">
                <video
                    className="absolute w-full h-full object-cover transition-all duration-300 "
                    style={{
                        transform: `scale(${videoScale}) translateY(${videoTranslateY}px)`,
                        opacity: isVideoEmbedded ? 0 : 1,
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="https://www.doorsstudio.com/assets/front/videos/brand-big-idea2.mp4" type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    <div className="w-full h-full from-purple-600 to-blue-600 flex items-center justify-center">
                        <div className="text-6xl font-bold">VIDEO</div>
                    </div>
                </video>

                {/* Overlay gradient */}
                <div className="absolute inset-0  from-transparent via-transparent to-black/50" />
            </div>

            {/* Text Section with Embedded Video */}
            <div className="relative px-8 py-32">
                <div className="max-w-6xl mx-auto">
                    <div>
                        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                            <div className='flex items-center flex-wrap'>
                                <span className="block mb-4">Let's</span>

                                {/* Embedded Video in Text */}
                                <div className="relative inline-block">
                                    <div
                                        className="relative overflow-hidden rounded-2xl transition-all duration-700 ease-out"
                                        style={{
                                            width: isVideoEmbedded ? '300px' : '0px',
                                            height: isVideoEmbedded ? '200px' : '0px',
                                            opacity: isVideoEmbedded ? 1 : 0,
                                            transform: `scale(${isVideoEmbedded ? 1 : 0.5})`,
                                        }}
                                    >
                                        <video
                                            className="w-full h-[200px] object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        >
                                            <source src="https://www.doorsstudio.com/assets/front/videos/brand-big-idea2.mp4" type="video/mp4" />
                                            <div className="w-full h-full bg-gradient-to-br flex items-center justify-center">
                                                <div className="text-2xl font-bold">VIDEO</div>
                                            </div>
                                        </video>

                                        {/* Video border glow effect */}
                                        <div className="absolute inset-0 rounded-2xl ring-4 ring-purple-500/50 shadow-2xl shadow-purple-500/25" />
                                    </div>
                                </div>
                                <span className="block mt-4">ADVERTISE </span>
                            </div>
                            <span className="block bg-clip-text">
                                YOUR AMBITION
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoScrollAnimation;