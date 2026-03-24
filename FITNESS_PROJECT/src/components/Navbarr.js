import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './LOGOPROJECT.png';
import './Navbarr.css';

function Navbarr() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/salledesport" style={{textDecoration:"none", color:"black"}}>GYMS</Link></Nav.Link>
            <Nav.Link><Link to="/partner" style={{textDecoration:"none", color:"black"}}>Find Partner</Link></Nav.Link>
            <Nav.Link><Link to="/Lifecoach" style={{textDecoration:"none", color:"black"}}>LifeCoach</Link></Nav.Link>
             <Nav.Link><Link to="/Contact" style={{textDecoration:"none", color:"black"}}>Contact</Link></Nav.Link>
          </Nav>

          {/* Login on the right */}
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="outline-dark">Login</Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;