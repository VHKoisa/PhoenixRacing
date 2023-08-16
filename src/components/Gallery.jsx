import React from 'react';
import './Gallery.css'

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <a href={image.link}><img src={image.url} alt={image.title} /></a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
