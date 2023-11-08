import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBBadge,
} from 'mdb-react-ui-kit';


export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <MDBNavbar expand='lg' sticky light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/home' className='d-flex align-items-end flex-nowrap'>
          <span className="nav-logo">
            <img src='./logo.png' alt='logo'></img>
            <h6>SAE Phoenix Racing</h6>
          </span>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{ color: '##0072BB' }}
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faBars} />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav right fullWidth={false} className='d-flex justify-content-center align-items-center mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <Link to='/'>
                <div className={`text ${showNav ? 'no-padding' : ''}`}>Home</div>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='/cars'>
                <div className={`text ${showNav ? 'no-padding' : ''}`}>
                  Cars
                </div>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a'>
                  <span className={`text ${showNav ? 'extra-padding' : ''}`} id="nav-team">Team</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/team?year=2025'>
                    <Link to='/team?year=2025'>
                      <div className="drop-text">2025</div>
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem link href='/team?year=2024'>
                    <Link to="/team?year=2024">
                      <div className="drop-text">2024</div>
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to='/alumni'>
                  <div className={`text ${showNav ? 'no-padding' : ''}`}>Alumni</div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/sponsors">
                  <div className={`text ${showNav ? 'no-padding' : ''}`}>Sponsors</div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='position-relative d-inline-block'>
                <Link to="/blogs">
                  <div className={`text ${showNav ? 'no-padding' : ''}`}>News</div>
                </Link>
                <span>
                  <MDBBadge color='danger' notification pill className='position-absolute translate-middle start-80 top-3 d-md-none d-lg-inline-block'>
                    New<span className="visually-hidden">New alerts</span>
                  </MDBBadge>
                </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
