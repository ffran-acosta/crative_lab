import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataImg } from '../data/img';

const SliderTest = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Velocidad en milisegundos entre cada transición
    };

    return (
        <div className="w-full mt-8">
            <Slider {...settings}>
                {dataImg.map((img, index) => (
                    <div key={index}>
                        <img src={img.path} alt={img.name} className="w-full h-20 z-10 mx-4" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderTest;