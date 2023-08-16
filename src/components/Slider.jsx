import React, { useEffect, useRef } from 'react';
import './Slider.css';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Clone the first set of images and append them to the end
    const slideItems = Array.from(slider.querySelectorAll('.logos-slide img'));
    const cloneItems = slideItems.map((item) => item.cloneNode(true));
    cloneItems.forEach((cloneItem) => {
      slider.querySelector('.logos-slide').appendChild(cloneItem);
    });

    // Calculate the slide width
    const slideWidth = slideItems[0].offsetWidth;

    // Set the initial position
    slider.style.transform = `translateX(${-slideWidth}px)`;

    let currentPosition = -slideWidth;
    let currentIndex = 1;

    const slide = () => {
      // Calculate the next position
      currentPosition -= slideWidth;

      // Apply transition and move to the next position
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(${currentPosition}px)`;

      currentIndex++;

      // Reset the position and transition after the last slide
      if (currentIndex === slideItems.length + 1) {
        setTimeout(() => {
          slider.style.transition = 'none';
          slider.style.transform = `translateX(${-slideWidth}px)`;
          currentPosition = -slideWidth;
          currentIndex = 1;
        }, 500);
      }
    };

    // Start the slide show
    const slideInterval = setInterval(slide, 2000);

    // Stop the slide show on component unmount
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="logos-container">
      <div className="logos-slider" ref={sliderRef}>
        <div className="logos-slide">
            <img src='spons1.jpg'/>
            <img src='spons2.jpg'/>
            <img src='spons3.png'/>
            <img src='spons1.jpg'/>
            <img src='spons2.jpg'/>
            <img src='spons3.png'/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
