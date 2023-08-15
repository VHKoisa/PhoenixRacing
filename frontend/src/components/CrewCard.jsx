import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './CrewCard.css';

const CrewCard = ({ name, image, text, position, sectionPosition }) => {
  return (
    <div className='crew-card'>
      <div className="img-content" style={{ backgroundImage: `url('${image}')` }}>
        {/* <img className='profile' src={image} alt='Crew Profile' /> */}
      </div>
      <div className="txt-content">
        <div className='name' href='destination_url'>{name}</div>
        {
          sectionPosition && <div className='position' href='destination_url'>{sectionPosition}</div>
        }
        <div className='position' href='destination_url'>{position}</div>
        <a href={text}>
          <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='lg' />
        </a>
      </div>
    </div>
  );
}

export default CrewCard;
