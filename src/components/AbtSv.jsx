import "./InfoSection";
import Section from "./Animate";

const AbtSv = ({ heading, descr1, descr2,embedLink }) => {   
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
                <Section><img src={embedLink} alt="svnit-logo" className="sv-logo"/></Section>
            </div>
            </div>
        </div>
    )
};

export default AbtSv;