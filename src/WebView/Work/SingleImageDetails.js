import React, { useEffect, useState } from "react";
import { BackButton, leftArrowIcon } from "../../Constant/Icons/Icon";

const SingleImageDetail = ({ index, setIndex,Data }) => {
    const [refImg, setRefImg] = useState([]);
    const [enter, setEnter] = useState(false);

    // Current Image Data
    const images = Data[index];

    useEffect(() => {

        if (!enter) {
            setEnter(true)
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        let tempRefImg = [];

        // Total Data Length
        const totalImages = Data.length;

        // Find Previous or Next 3 Images
        if (totalImages > 1) {
            if (index - 3 >= 0) {
                tempRefImg = [
                    { ...Data[index - 3], idx: index - 3 },
                    { ...Data[index - 2], idx: index - 2 },
                    { ...Data[index - 1], idx: index - 1 },
                ];
            } else if (index + 3 < totalImages) {
                tempRefImg = [
                    { ...Data[index + 1], idx: index + 1 },
                    { ...Data[index + 2], idx: index + 2 },
                    { ...Data[index + 3], idx: index + 3 },
                ];
            } else {
                // If less than 3 images available, take whatever is available
                tempRefImg = Data
                    .filter((_, i) => i !== index) // Exclude the current image
                    .slice(0, 3)
                    .map((img, i) => ({ ...img, idx: i }));
            }
        }

        setRefImg(tempRefImg);
    }, [index]);

    // Function to Set Index and Scroll to Top
    const handleImageClick = (newIndex) => {
        setIndex(newIndex);
        window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 Scroll to top with smooth animation
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-3xl font-bold text-black dark:text-white">{images?.title}</h1>
                <div>
                    <button onClick={() => setIndex(null)} className="flex gap-4 items-center text-white underline px-6 py-3 rounded-md text-lg font-semibold transition">
                        {leftArrowIcon} Back to Work
                    </button>
                </div>
            </div>
            <img src={images?.src} alt={images?.title} className="w-full h-full object-cover rounded-lg shadow-lg mb-6" />
            <p className="text-lg text-black dark:text-white">{images?.description}</p>

            {/* Reference Images */}
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">Explore More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
                {refImg.map((ref) => (
                    <button key={ref.id} onClick={() => handleImageClick(ref.idx)}>
                        <img
                            src={ref.src}
                            alt={ref.title}
                            className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SingleImageDetail;