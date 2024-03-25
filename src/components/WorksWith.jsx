import { dataImg } from '../data/img';

const BrandSlider = () => {
  return (
    <div className="w-full mt-8">
      <div className="flex w-full">
        {dataImg.map((image, index) => (
          <img
            key={index}
            src={image.path}
            alt={`Image ${index}`}
            className="w-full h-20 z-10 mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
