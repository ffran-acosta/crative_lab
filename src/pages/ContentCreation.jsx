import foto1 from '../assets/content-creation/content-creation1.png';
import gifImage from '../assets/content-creation/gif/gift-content-creation-webp.webp';

const ContentCreation = () => {
  return (
    <div className="flex w-full justify-center h-auto mt-10">
      <div>
        <div>
          <img src={foto1} alt="Foto de ejemplo" />
        </div>
        <div className="ml-8">
          <img src={gifImage} alt="Gif de ejemplo" />
        </div>
      </div>
      <div>
        <div className="ml-8">
          <img src={gifImage} alt="Gif de ejemplo" />
        </div>
        <div>
          <img src={foto1} alt="Foto de ejemplo" />
        </div>
      </div>

    </div>
  );
};

export default ContentCreation;