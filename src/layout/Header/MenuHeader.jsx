import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomeIcon from '@mui/icons-material/Home';import SearchIcon from '@mui/icons-material/Search';
import Button from 'react-bootstrap/Button';


export default function MenuHeader() {
  return (
    <Navbar expand="lg" className="">
    <Container>
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='menuHeader'>
        <Nav className="me-auto">
          <Nav.Link href="#home" className=''><HomeIcon /></Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Programs</Nav.Link>
          <Nav.Link href="#link">Acts & Rules</Nav.Link>
          <Nav.Link href="#link">Organisation & Units</Nav.Link>
          <Nav.Link href="#link">Price Monitoring</Nav.Link>
          <Nav.Link href="#link">CCA</Nav.Link>
          <Nav.Link href="#link">RTI</Nav.Link>
          <Nav.Link href="#link">More</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}

       
        </Nav>
      </Navbar.Collapse>
      <div className="searcContainer">
         <div className="search">
            <input type="text" placeholder="Enter Keyword" />
            <SearchIcon/>
         </div>
          {' '}<Button className='button' variant=''>Report Issue</Button>
      </div>
    </Container>
  </Navbar>
  )
}
