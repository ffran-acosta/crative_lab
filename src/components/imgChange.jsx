import { useState, useEffect } from 'react';
import { dataImg } from '../data/img';

const BrandSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === dataImg.length - 1 ? 0 : prevIndex + 1
            );
        }, 1);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full mt-8">
            <div className="flex w-full">
                {dataImg.map((image, index) => (
                    <img
                        key={index}
                        src={image.path}
                        alt={`Image ${index}`}
                        className={`w-full h-28 z-10 mx-4 ${index === currentIndex ? '' : 'hidden'
                            }`}
                        style={{ animationDelay: `-${index * 1}s` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default BrandSlider;