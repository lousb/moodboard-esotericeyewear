import React from 'react';
import './gallery.css'; // Import the CSS for the grid
import ParallaxImage from '../../atoms/parralax-image';
import Reveal from '../../atoms/text-reveal';
import RevealDiv from '../../atoms/reveal-div';

const Gallery = () => {
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  const images = importAll(require.context('./GalleryImages', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="gallery-grid">
      {Object.keys(images).reverse().map((imageFile, index) => (
        <React.Fragment key={index}>
          <div className="gallery-item">
            <RevealDiv>
              <ParallaxImage
                url={images[imageFile]}
                className="image-container"
                index={`${index + 1}`}
              />
            </RevealDiv>
            <Reveal textContent={`${index + 1}`} element="div" elementClass="parallax-index" />
          </div>
          {/* Insert an empty gallery item for every 5th index */}
          {(index + 1) % 5 === 0 && <div className="gallery-item empty-item" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Gallery;
