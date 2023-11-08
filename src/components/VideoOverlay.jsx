// import React, { useState } from 'react';
import './VideoOverlay.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faX } from '@fortawesome/free-solid-svg-icons';

const VideoOverlay = () => {
  // const [isOverlayActive, setOverlayActive] = useState(false);

  // const openVideoOverlay = () => {
  //   setOverlayActive(true);
  // };

  // const closeVideoOverlay = () => {
  //   setOverlayActive(false);
  // };

  return (
    <>
        <div className="video-link" >
          <svg
            strokeMiterlimit="10"
            style={{
                fillRule: 'nonzero',
                clipRule: 'evenodd',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
            }}
            version="1.1"
            viewBox="0 0 840 595"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            className="play-icon"
        >
            <defs />
            <g id="Layer-1">
                <g opacity="1">
                    <path d="M341.006 244.316C366.006 269.316 378.506 282.316 378.506 283.316C378.506 284.316 366.173 297.316 341.506 322.316C329.173 334.816 316.839 347.316 304.506 359.816C313.673 359.816 360.139 359.816 360.139 359.816C360.139 359.816 372.006 346.982 397.006 321.316C409.506 308.482 422.006 295.649 434.506 282.816C421.839 270.149 409.173 257.482 396.506 244.816C371.173 219.482 357.561 206.853 357.561 206.853C357.561 206.853 312.673 206.816 303.506 206.816C316.006 219.316 328.506 231.816 341.006 244.316Z" fill="#0072bb" fillRule="nonzero" opacity="1" stroke="none" />
                    <path d="M424.8 244.316C449.8 269.316 462.3 282.316 462.3 283.316C462.3 284.316 449.966 297.316 425.3 322.316C412.966 334.816 400.633 347.316 388.3 359.816C397.466 359.816 443.932 359.816 443.932 359.816C443.932 359.816 455.8 346.982 480.8 321.316C493.3 308.482 505.8 295.649 518.3 282.816C505.633 270.149 492.966 257.482 480.3 244.816C454.966 219.482 441.354 206.853 441.354 206.853C441.354 206.853 396.466 206.816 387.3 206.816C399.8 219.316 412.3 231.816 424.8 244.316Z" fill="#0072bb" fillRule="nonzero" opacity="1" stroke="none" />
                </g>
            </g>
        </svg>
        <div className="video-btn">
            <div className="first">Unleash the Thrill!</div>
            <div className="second">Discover our World of Racing</div>
        </div>   
        </div>
      {/* {isOverlayActive && (
        <div className="video-overlay active">
          <div className="video-container">
            <div className="video-close" onClick={closeVideoOverlay}>
                <FontAwesomeIcon icon={faX}/><span> Close </span>
            </div>
            < iframe 
            className='video-intro'
            src="https://www.youtube.com/embed/2PnbGCbcRYU" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen/>
          </div>
        </div>
      )} */}
    </>
  );
};

export default VideoOverlay;
