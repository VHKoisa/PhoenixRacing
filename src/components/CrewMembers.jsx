import React from 'react';
import './CrewMembers.css';
import Navbar from './Navbar';
import CrewCard from './CrewCard';
import Footer from './Footer';

export default function CrewMembers() {
  return (
    <div className='crew-members'>
      <div className='crew-hero'>
        <Navbar />
        <p>Meet the backbone of our racing team - a group of hardworking and dedicated individuals who fuel our drive for success. With unwavering passion and a shared commitment to excellence, they work tirelessly behind the scenes, ensuring our race machines are primed to perform at their peak. Together, they form a tightly-knit unit, seamlessly collaborating and pushing boundaries to push us towards the checkered flag.</p>
      </div>
      <div className='team'>
        <h1 className='heading'>Team</h1>
        <div className='thick-line'></div>
        <div className='technical'>
          <h1 className='technical-heading'>Technical</h1>
          <div className='technical-crew'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thin-line'></div>
        <div className='managerial'>
          <h1 className='managerial-heading'>Managerial</h1>
          <div className='managers'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thick-line'></div>
        <h1 className='department'>Departments</h1>
        <div className='thick-line'></div>
        <div className='managerial'>
          <h1 className='managerial-heading'>Electrical</h1>
          <div className='managers'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thin-line'></div>
        <div className='managerial'>
          <h1 className='managerial-heading'>Brakes</h1>
          <div className='managers'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thin-line'></div>
        <div className='managerial'>
          <h1 className='managerial-heading'>Steering & Suspension</h1>
          <div className='managers'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thick-line'></div>
        <h1 className='heading'>Web Development</h1>
        <div className='black-line'></div>
        <div className='web-member'>
          <h1>Name</h1>
          <p>Position</p>
          <img src='linkedin.png' alt='LinkedIn' />
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Name</h1>
          <p>Position</p>
          <img src='linkedin.png' alt='LinkedIn' />
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Name</h1>
          <p>Position</p>
          <img src='linkedin.png' alt='LinkedIn' />
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Name</h1>
          <p>Position</p>
          <img src='linkedin.png' alt='LinkedIn' />
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Name</h1>
          <p>Position</p>
          <img src='linkedin.png' alt='LinkedIn' />
        </div>
        <div className='black-line' />
      </div>
      <Footer />
    </div>
  );
}
