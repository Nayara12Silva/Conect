import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/01.png'
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} width="200"height="80" className="d-inline-block align-top" alt="React Bootstrap logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}navbarScroll >
            <Nav.Link>
              <Link to="/register">Adiconar Grupo</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">Meus Grupos</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Pesquisar por grupos" className="me-2"aria-label="Search"/>
            <IconButton>
              <Search/>
            </IconButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;