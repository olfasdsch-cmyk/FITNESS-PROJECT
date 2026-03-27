import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './LOGOPROJECT.png';
import './Navbarr.css';
import { useSelector } from 'react-redux';

function Navbarr() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const user = useSelector((state) => state.user.user);

  return (
    <Navbar expand="lg" fixed="top" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/salledesport">GYMS</Nav.Link>

            {user && <Nav.Link as={Link} to="/partner">Find Partner</Nav.Link>}

            <Nav.Link as={Link} to="/Lifecoach">LifeCoach</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>

            {user?.category === "Admin" && <Nav.Link as={Link} to="/dashbord">Dashbord</Nav.Link>}

          </Nav>

          <Nav className="ms-auto">
            {!user ? (
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="outline-dark">Login</Button>
              </Link>
            ) : (
              <>
                <Link to="/profil" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-dark">Profil</Button>
                </Link>
                <h5>Hello {user?.name} {user?.lastname}</h5>
              </>
            )}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;