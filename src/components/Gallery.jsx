import Styles from './Gallery.module.css';
import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import img4 from '../assets/gallery-4.png';
import img5 from '../assets/gallery-5.png';
import img6 from '../assets/gallery-6.png';
import img7 from '../assets/gallery-7.png';
import img8 from '../assets/gallery-8.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  return (
    <>
      <div id='gallery' className={Styles.container}>
        <h1>Gallery</h1>
      <section className={Styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={Styles.gridItem}>
            <img src={image} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </section>
      </div>
    </>
  );
};

export default Gallery;
