import "./InfoSection.css";
import Section from "./Animate";
import LazyVideoPlayer from "./VideoPlayer";

const InfoSection = ({ heading, descr1, descr2,embedLink }) => {   
    return (
        <div className="abt-info" id="go-to-abt">
            <div className="abt-wrapper">
                <div className="abt-left">
            <div className="abt-header">
                <Section>{heading}</Section>
            </div>
            <div className="abt-content">
                <div className="abt-descr1"><Section>{descr1}</Section></div>
                <div className="abt-descr2"><Section>{descr2}</Section></div>  
            </div>
                </div>
            <div className="abt-right">
                
                {/* <LazyVideoPlayer /> */}
                <video controls className="embed-item"><source src={embedLink} />doesnt support</video>
                </div>
            </div>
        </div>
    )
};

export default InfoSection;