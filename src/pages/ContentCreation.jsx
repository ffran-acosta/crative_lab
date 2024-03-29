import foto1 from '../assets/content-creation/content-creation1.png';
import gifImage from '../assets/content-creation/gif/gift-content-creation-webp.webp';
import ReactPlayer from 'react-player';

const ContentCreation = () => {
  return (
    <div className="flex flex-col items-center mt-24 w-full mb-40">
      {/* Primer par */}
      <div className='w-full flex justify-center mb-4'>
        <div>
          <img src={foto1} alt="Foto de ejemplo" />
        </div>
        <div className="ml-4 md:ml-8"> {/* Utilizando clases de margen proporcionales */}
          <img src={gifImage} alt="Gif de ejemplo" />
        </div>
      </div>

      {/* Segundo par */}
      <div className='flex justify-center mt-52'>
        <div>
          <img src={gifImage} alt="Gif de ejemplo" />
        </div>
        <div className="ml-4 md:ml-8"> {/* Utilizando clases de margen proporcionales */}
          <img src={foto1} alt="Foto de ejemplo" />          
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-40'>
        <ReactPlayer
          url='https://vimeo.com/508006835'
          controls
          style={{ width: '100%', maxWidth: '480px' }}
        />
        <ReactPlayer
          url='https://vimeo.com/508006835'
          controls
          style={{ width: '100%', maxWidth: '480px' }}
        />
        <ReactPlayer
          url='https://vimeo.com/508006835'
          controls
          style={{ width: '100%', maxWidth: '480px' }}
        />
      </div>
    </div>
  );
};

export default ContentCreation;