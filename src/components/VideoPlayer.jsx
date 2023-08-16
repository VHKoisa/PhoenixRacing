import React, { useEffect, useRef, useState } from 'react';
import './InfoSection.css';

const LazyVideoPlayer = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const videoRef = useRef(null);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
      };
  
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          console
          observer.disconnect();
        }
      }, options);
  
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
  
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, []);
  
    return (
      <div>
        {isIntersecting && (
          <div className="abt-right">
          <video ref={videoRef} controls className='embed-item'>
          <source src='./intro_vid_bl.mp4'/>video not supported
          </video>
          </div>
        )}
      </div>
    );
  };

  export default LazyVideoPlayer;