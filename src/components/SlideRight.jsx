import React, { useState, useEffect } from 'react';
import './SlideRight.css';

const SlideRight = () => {
  const [currentSlide, setCurrentSlide] = useState(3);

  const images = [
    { url: 'spons1.jpg', title: 'Image 1' },
    { url: 'spons1.jpg', title: 'Image 2' },
    { url: 'spons1.jpg', title: 'Image 3' },
    { url: 'spons1.jpg', title: 'Image 4' },
    { url: 'spons1.jpg', title: 'Image 5' },
    { url: 'spons1.jpg', title: 'Image 6' },
    { url: 'spons1.jpg', title: 'Image 7' },
    { url: 'spons1.jpg', title: 'Image 8' }, 
    { url: 'spons1.jpg', title: 'Image 9' },
    { url: 'spons1.jpg', title: 'Image 10' },
    // Add more images here
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const slideRight = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slide-right">
      <div className="slider-wrapper" style={{ transform: `translateX(calc(-${currentSlide * (100 / images.length)}%))` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-slide ${index === currentSlide ? 'active' : ''
              }`}
          >
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideRight;
