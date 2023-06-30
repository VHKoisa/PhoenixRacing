import React from 'react';
import './CrewCard.css';

export default function CrewCard() {
  return (
    <div className='crew-card'>
      <img className='profile' src='crew-image.png' alt='Crew Profile' />
      <a className='name' href='destination_url'>Name</a>
      <a className='position' href='destination_url'>Position</a>
      <img className='linked-in' src='linkedin.png' alt='LinkedIn' />
    </div>
  );
}
