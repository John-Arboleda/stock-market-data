import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar as BstrpNav, Nav } from 'react-bootstrap';
import { ArrowLeftCircle, MicFill, GearFill } from 'react-bootstrap-icons';

const Navbar = () => (
    <BstrpNav bg="primary" variant="dark">
      <Container className="d-flex justify-content-between">
        <NavLink
          to="/"
        >
          <ArrowLeftCircle color="white" size={25} />
        </NavLink>
        <BstrpNav.Brand href="/"><h2>Stock Market Watcher</h2></BstrpNav.Brand>
        <Nav>
          <Nav.Link><MicFill color="white" size={25} /></Nav.Link>
          <Nav.Link><GearFill color="white" size={25} /></Nav.Link>
        </Nav>
      </Container>
    </BstrpNav>
);

export default Navbar;
