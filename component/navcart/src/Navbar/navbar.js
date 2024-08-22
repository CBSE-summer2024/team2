import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../e-commerce.png';

const ArabicNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" dir="rtl">
      <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
        <img
          src={logo}
          width="70"
          height="70"
          className="d-inline-block align-top"
          alt="شعار الموقع "
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link as={Link} to="/new-arrivals" className="nav-link-custom"> الصفحة الرئيسية</Nav.Link>
          <Nav.Link as={Link} to="/new-arrivals" className="nav-link-custom"> وصلنا حديثا </Nav.Link>
          <Nav.Link as={Link} to="/about-us" className="nav-link-custom"> من نحن </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="nav-link-custom"> سلة المشتريات </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link-custom"> تواصل معنا </Nav.Link>
          <Nav.Link as={Link} to="/categories" className="nav-link-custom"> التصنيفات </Nav.Link>
          <Nav.Link as={Link} to="/login" className="nav-link-custom"> تسجيل الدخول </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ArabicNavbar;
