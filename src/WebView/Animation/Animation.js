import React, { useRef, useState } from "react";
import videoList from "./videos";

const Animation = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const modalRefs = useRef([]);

  const openModal = (index) => {
    setOpenIndex(index);
    setTimeout(() => modalRefs.current[index]?.play(), 100);
  };

  const closeModal = (index) => {
    setOpenIndex(null);
    const video = modalRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const stopVideo = (index) => {
    const video = modalRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const enterFullscreen = (index) => {
    const video = modalRefs.current[index];
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  };

  return (
   videoList.map((video, index) => (
        <div key={index} className="mb-10">
          {/* Video Preview */}
          <div
            onClick={() => openModal(index)}
            className="relative w-[400px] h-[225px] cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <video
              src={video.src}
              className="w-full h-full object-cover"
              muted
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-white opacity-90"
                fill="currentColor"
                viewBox="0 0 84 84"
              >
                <circle cx="42" cy="42" r="42" fill="rgba(0,0,0,0.4)" />
                <polygon points="33,24 62,42 33,60" fill="white" />
              </svg>
            </div>
          </div>

          {/* Modal */}
          {openIndex === index && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 w-[90%] max-w-6xl shadow-2xl relative max-h-[90vh] overflow-auto">
                <h2 className="text-2xl font-semibold mb-4 text-center">{video.title}</h2>
                
                <video
                  ref={(el) => (modalRefs.current[index] = el)}
                  className="w-full max-h-[80vh] rounded-lg object-contain mx-auto"
                  controls={false}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="flex justify-center mt-6 gap-4 flex-wrap">
                  <button
                    onClick={() => modalRefs.current[index]?.play()}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                  >
                    ▶️ Play
                  </button>
                  <button
                    onClick={() => stopVideo(index)}
                    className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    ⏹ Stop
                  </button>
                  <button
                    onClick={() => enterFullscreen(index)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    🔲 Fullscreen
                  </button>
                  <button
                    onClick={() => closeModal(index)}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                  >
                    ❌ Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))
  );
};

export default Animation;
