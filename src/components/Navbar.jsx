import React from "react";
import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



const navbar = () => {
  return (
    <>
        <Navbar className="fixed-top" bg="light" expand="lg">
          <Navbar.Brand className="navbar-brand col-3" href="/">
            Kentaro Miura
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Container>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="characters" className="nav-link">
                  Characters
                </Link>
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
};

export default navbar;
