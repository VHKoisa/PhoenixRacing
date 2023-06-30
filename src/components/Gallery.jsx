import React from 'react';
import './Gallery.css'

const Gallery = () => {
  const images = [
    { url: './spons1.jpg', title: 'Image 1' },
    { url: './spons2.jpg', title: 'Image 2' },
    { url: './spons1.jpg', title: 'Image 3' },
    { url: './spons2.jpg', title: 'Image 4' },
    { url: './spons1.jpg', title: 'Image 5' },
    { url: './spons2.jpg', title: 'Image 6' },
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image.url} alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
