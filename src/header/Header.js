import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import navlogo from '../assets/navlogo.png'
import headerstyle from './header.module.css'

const Header = () => {
    return (
      <div className={headerstyle.header}>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to = '/' className="navbar-brand">
        <img src= {navlogo} alt="logo"  />
        </NavLink>
        <Navbar.Brand>
        <span className="text-primary fs-3 fw-bold">Health-</span>
        <span className="text-danger fs-3 fw-bold">Plus</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="nav-items">
          <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/aboutus" className = 'nav-link'>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to = '/treatment' className={'nav-link'}>Treatments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to = '/bookappointment' className={'nav-link'}>Book appointments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to = '/offers' className='nav-link'>Offers </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to = '/contactus' className={'nav-link'}>Contact Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to = '/contactus' className={'nav-link'}>New appointment</NavLink>
          </li>
           <li className="nav-item">
            <NavLink to = '/contactus' className={'nav-link'}>Location</NavLink>
          </li>
          </ul>
        </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
    )
}
export default Header;