import React from 'react';
import { Container, Navbar as BstrpNav, Nav } from 'react-bootstrap';
import { ArrowLeftCircle, MicFill, GearFill } from 'react-bootstrap-icons';

const Navbar = () => (
    <BstrpNav bg="primary" variant="dark">
      <Container className="d-flex justify-content-between">
        <Nav>
          <Nav.Link href="/">
            <ArrowLeftCircle color="white" size={25} />
          </Nav.Link>
        </Nav>
        <BstrpNav.Brand href="/"><h2 className="m-0">Stock Market Watcher</h2></BstrpNav.Brand>
        <Nav>
          <Nav.Link><MicFill color="white" size={25} /></Nav.Link>
          <Nav.Link><GearFill color="white" size={25} /></Nav.Link>
        </Nav>
      </Container>
    </BstrpNav>
);

export default Navbar;
