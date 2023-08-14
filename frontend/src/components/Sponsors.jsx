import React from 'react'
import "./Sponsors.css"
import Gallery from './Gallery'
// import SlideLeft from './SlideLeft';
// import SlideRight from './SlideRight';
import Slider from './Slider';
import brochure from '/brochure.pdf';
import Connect from './connect';
import { Helmet } from 'react-helmet';

const Sponsors = () => {
    const currentSponsors = [
        { url: 'sponsors/2023-24/20230116_Bender_LOGO_Yellow.png', title: 'Image 1' },
        { url: 'sponsors/2023-24/agni-logo.png', title: 'Image 2' },
        { url: 'sponsors/2023-24/ansys.png', title: 'Image 3' },
        { url: 'sponsors/2023-24/mathworks-logo-full-color-rgb.png', title: 'Image 4' },
        { url: 'sponsors/2023-24/NIT_Surat_Logo.svg.png', title: 'Image 5' },
        { url: "sponsors/2023-24/Prayosha Logo.png", title: "" },
    ];
    const prevSponsors = [

        { url: "sponsors/past/apollo-tyres-logo.png", title: "", link:"https://shop.apollotyres.com/"},
        { url: "sponsors/past/canerabank.png", title: "" , link:"https://canarabank.com/"},
        { url: "sponsors/past/ceat.png", title: "" , link:"https://www.ceat.com/"},
        { url: "sponsors/past/GCST.png", title: "" , link:"https://gujcost.gujarat.gov.in/"},
        { url: "sponsors/past/godrej.png", title: "", link:"https://www.godrej.com/" },
        { url: "sponsors/past/Indian-Oil-Emblem.png", title: "" , link:"https://iocl.com/"},
        { url: "sponsors/past/JK-Tyre-logo-PNG-Transparent.png", title: "" , link:"https://www.jktyre.com/"},
        { url: "sponsors/past/ktm.png", title: "" , link:"https://www.ktm.com/"},
        { url: "sponsors/past/mahindra.png", title: "" , link:"https://www.mahindra.com/"},
        { url: "sponsors/past/OYO_Rooms_(logo).png", title: "" , link:"https://www.oyorooms.com/"},
        { url: "sponsors/past/sopan.png", title: "" , link:"https://sied.in/"},
        { url: "sponsors/past/tata-motors-logo-3.png", title: "" , link:"https://www.tata.com/home-page"},
        { url: "sponsors/past/toyota.png", title: "" , link:"https://www.toyotabharat.com/"},


    ]
    return (
        <div className='sponsor'>
            <Helmet>
                <title>Phoenix Racing | Sponsors</title>
                <meta name="description" content="Discover the sponsors and partners supporting Phoenix Racing, the Formula SAE racing team from NIT Surat. Learn about our collaborations and how we work together to achieve excellence in motorsport engineering." />
                <meta name="keywords" content="Phoenix Racing, NIT Surat, SVNIT, Formula SAE racing team, sponsors, partners, collaborations, motorsport engineering" />
            </Helmet>
            <div className='hero'>
                <div className="hero-image">
                    <h1>To Our Sponsors</h1>
                    <p>
                        Team Phoenix Racing extends its heartfelt appreciation to the sponsors who have generously supported us, enabling students to explore their capabilities through real-world competition and nurturing young Indian talent. With their invaluable assistance, Team Phoenix Racing is empowered to pursue innovative design and development, striving to become a globally respected team. Our sponsors play a crucial role in providing the means and resources necessary for our success, allow us to push boundaries and make a meaningful impact in the lives of our team members and future engineers. We express our deep gratitude to all our sponsors and donors for their unwavering dedication and contributions. It is an honor for us to represent your name, and we eagerly anticipate showcasing our abilities to the best of our capabilities.
                    </p>
                    <p>
                        Thank you everyone who supports our team.
                    </p>
                </div>
            </div>
            <div className='current'>
                <h1>Our Sponsors</h1>
                <Gallery images={currentSponsors} />
            </div>
            <div className='prev'>
                <h1>Previous Sponsors</h1>
                <Gallery images={prevSponsors} />
            </div>
            <div className="sponsor-btn">
                <Connect title="Interested in sponsoring us?" btnName="Contact Us" />
            </div>
            <div className="brochure-btn">
                <a href={brochure} target='__blank'>View Brochure</a>
            </div>
        </div>
    )
}

export default Sponsors;
