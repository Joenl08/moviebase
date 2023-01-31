import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Film, Users, HelpCircle } from 'react-feather';

const Menu = () => {
  return (  
    <header>
      <Navbar expand="lg" className="justify-content-md-between">
      <Container>
        <Navbar.Brand as={Link} to="/">Moviebase</Navbar.Brand>
        <Navbar.Toggle color="dark" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies"><Film /> Movies</Nav.Link>
            <Nav.Link as={Link} to="/actors"><Users /> Actors</Nav.Link>
            <Nav.Link as={Link} to="/about"><HelpCircle /> About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

export default Menu;
