import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarsCarousel.css';

const cars = [
  {
    name: "FBEV",
    image: "cars/FBEV_23.png",
    year: 2023,
    description: "Overall 3rd ; 1st in concept goals and management report ; 3rd in business plan presentation"
  },
  {
    name: '7th GKDC',
    image: 'cars/7th_GKDC.jpg',
    year: 2020,
    description: 'Overall champions, 1st in Endurance and fuel economy, best driver award'
  },
  {
    name: '6th GKDC',
    image: 'cars/6th_GKDC.JPG',
    year: 2019,
    description: 'Overall champions, 1st in skidpad, 1st in autocross, 1st in endurance and fuel economy, Best driver, best design, best innovation'
  },
  {
    name: 'Chitrak',
    image: 'cars/Chitrak.jpg',
    year: 2018,
    description: ''
  },
  {
    name: 'PHOENIX',
    image: 'cars/phoenix_2016.png',
    year: 2016,
    description: '13th in all over India'
  },
  {
    name: 'Phoenix',
    image: 'cars/Phoenix_2014.bmp',
    year: 2014,
    description: '4th in overall ranking, 1st in presentation, 2nd in cost report'
  },
  {
    name: 'EKLAVYA',
    image: 'cars/Eklavya.JPG',
    year: 2011,
    description: '39th out of 80 in MINI BAJA 2011'
  },
]

function CarouselComponent() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % cars.length);
    }, 6000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="carousel-wrapper">
      <Carousel
        selectedItem={activeSlide}
        onChange={(slideIndex) => setActiveSlide(slideIndex)}
        autoPlay={true} // Set it to true if you want the carousel to auto-play on load
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        useKeyboardArrows={false}
      >
        {
          cars.map(({ description, image, name, year }) => {
            return (
              <div key={name} className="sliding">
                <img src={image} alt={name} />
                <div className="slide-content">
                  <h2 className="car-name">{name}</h2>
                  <h3>{year}</h3>
                  <p className="car-description">{description}</p>
                </div>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  );
}
export default CarouselComponent;
