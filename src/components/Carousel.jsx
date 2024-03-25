import { useState, useEffect } from 'react';
import { dataImg } from '../data/img';

const BrandSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === dataImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * (100 / (dataImg.length + 2))}%)`;
  }, [currentIndex]);

  return (
    <div className="w-full mt-8 relative overflow-hidden">
      <div 
        className="flex  slider"
        style={{ width: '100vw', height: '20vh', transition: 'transform 4s ease-in-out' }}
        >
        {dataImg.map((image, index) => (
          <img
            key={index}
            src={image.path}
            alt={`Image ${index}`}
            className="w-full h-20 mx-4"
          />
        ))}
        {dataImg.map((image, index) => (
          <img
            key={index}
            src={image.path}
            alt={`Image ${index}`}
            className="w-full h-20 mx-4"
          />
        ))}
        {dataImg.map((image, index) => (
          <img
            key={index}
            src={image.path}
            alt={`Image ${index}`}
            className="w-full h-20 mx-4"
          />
        ))}
        {dataImg.map((image, index) => (
          <img
            key={index}
            src={image.path}
            alt={`Image ${index}`}
            className="w-full h-20 mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;

