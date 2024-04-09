"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Link  from 'next/link'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Next.js</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/Pricing">Pricing</Link>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;


// function header() {
//     return(
//     <div className="header">
//         <p>logo</p>
//         <nav>
// <Link href="/">Home</Link>
// <Link href="/About">About</Link>
// <Link href="/Contact">Contact</Link>
// <Link href="/Pricing">Pricing</Link>
//         </nav>
//     </div>
//     )
// }

// export default header;