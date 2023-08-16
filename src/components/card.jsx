import React from "react";
import "./alumni.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Card(props) {
  return (
    <div className="alumni-card">
      <div className="alumni-top" style={{ backgroundImage: `url(${props.img})` }}>
        {/* <img src={props.img} alt="profilepicture" className="alumni-card-img"></img> */}
      </div>
      <div className="alumni-bottom">
        <h2>{props.name}</h2>
        {/* <h3>{props.position}</h3> */}
        <h4>{props.company}</h4>
        <a href={props.url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
        </a>
      </div>
    </div>
  );
}
export default Card;
