import React, { useState, useEffect } from 'react';
import './SlideLeft.css';

const SlideLeft = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { url: 'spons3.png', title: 'Image 1' },
    { url: 'spons3.png', title: 'Image 2' },
    { url: 'spons3.png', title: 'Image 3' },
    { url: 'spons3.png', title: 'Image 4' },
    { url: 'spons3.png', title: 'Image 5' },
    { url: 'spons3.png', title: 'Image 6' },
    { url: 'spons3.png', title: 'Image 7' },
    { url: 'spons3.png', title: 'Image 8' },
    { url: 'spons3.png', title: 'Image 9' },
    { url: 'spons3.png', title: 'Image 10' },
    // Add more images here
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const slideLeft = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slide-left">
      <div className="slider-wrapper" style={{ transform: `translateX(calc(-${currentSlide * (100 / images.length)}%))` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-slide ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideLeft;
