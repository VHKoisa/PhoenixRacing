import React from "react";
import Info from "./info";
import "./infowrapper.css"
function InfoWrapper()
{
    return (
        <div className="infowrapper">
            <div className="headinginfo">
                <h2>Our Cars Over the Years</h2>
            </div>
            <Info />
        </div>
    );
}
export default InfoWrapper;