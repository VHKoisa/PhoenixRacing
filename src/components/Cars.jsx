import React from "react";
import './Cars.css';
import CarouselComponent from "./CarsCarousel";
import InfoWrapper from "./infowrapper";
import { Helmet } from "react-helmet";


function Cars() {
    return (
        <div className="cars-page">
            <Helmet>
                <title>Phoenix Racing | Cars</title>
                <meta name="description" content="Explore the high-performance race cars built by Phoenix Racing, the Formula SAE racing team from NIT Surat. Learn about our cutting-edge engineering and innovative design in motorsport." />
                <meta name="keywords" content="Phoenix Racing, NIT Surat, SVNIT, Formula SAE racing team, race cars, motorsport engineering, high-performance vehicles, automotive design" />
            </Helmet>
            <CarouselComponent />
            <InfoWrapper />
        </div>
    );
}
export default Cars;
