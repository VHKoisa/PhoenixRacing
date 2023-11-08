import "./Hero.css";
import VideoOverlay from "./VideoOverlay";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from "framer-motion";
import { useEffect,useState } from "react";

const scrollToSection = () => {
  const targetSection = document.getElementById('go-to-abt');
  const offset = 100; 
  const topOffset = targetSection.offsetTop - offset;

  window.scrollTo({
    top: topOffset,
    behavior: 'smooth',
  });
};




function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });
  
    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-10, -35, v)}%`);
  
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
  
    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    );
}

const Hero = () => {
    const[offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);    
    }, []);
   
    return (
        <div className="home-section">
            <div className="home-title">
                <div className="home-header1">SAE Phoenix</div>
                <div className="home-header2">Racing</div>
                {/* <AnchorLink href='#go-to-abt' className="abt-link"><VideoOverlay /></AnchorLink> */}
                <a href="#" className="abt-link" onClick={scrollToSection}>
      <VideoOverlay />
    </a>
            </div>
            <div className="home-title" id="bg-title"  style={{transform:`translateY(${offsetY * 0.5}px)`}}>
                <ParallaxText baseVelocity={-1} div className="home-header1" id="bg-header1">Phoenix</ParallaxText>
                <ParallaxText baseVelocity={1} div className="home-header2" id="bg-header2">Racing</ParallaxText>
            </div>
            <div className="side-img">
                <svg
                    className="blocks"
                    strokeMiterlimit={10}
                    style={{
                        fillRule: 'nonzero',
                        clipRule: 'evenodd',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }}
                    version="1.1"
                    viewBox="0 0 841.995 0.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs />
                    <clipPath id="ArtboardFrame">
                        <rect height="595.35" width="841.995" x="0" y="0" />
                    </clipPath>
                    <g clipPath="url(#ArtboardFrame)" id="Layer-1">
                        <path d="M56.7 0L170.1 0L170.1 113.4L56.7 113.4L56.7 0Z" fill="#0072bb" fillRule="nonzero" opacity="1" stroke="none" />
                        <path d="M170.1 113.4L283.5 113.4L283.5 226.8L170.1 226.8L170.1 113.4Z" fill="#0072bb" fillRule="nonzero" opacity="1" stroke="none" />
                        <path d="M283.5-7.10543e-15L396.9-7.10543e-15L396.9 113.4L283.5 113.4L283.5-7.10543e-15Z" fill="#0072bb" fillRule="nonzero" opacity="1" stroke="none" />
                        <path d="M510.3-7.10543e-15L623.7-7.10543e-15L623.7 113.4L510.3 113.4L510.3-7.10543e-15Z" fill="#0072bb" fillRule="nonzero" opacity="1" stroke="none" />
                        <path d="M396.9 113.4L510.3 113.4L510.3 226.8L396.9 226.8L396.9 113.4Z" fill="#0072bb" fillRule="nonzero" opacity="1" stroke="none" />
                    </g>
                </svg>
            </div>
        </div>

    )
}

export default Hero;