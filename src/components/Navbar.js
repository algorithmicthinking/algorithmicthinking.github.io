import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const SiteNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" id="navscroll">
      <Navbar.Brand href=".">
        <strong>Leetcode 101 DeCal</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link id="na1" href="#schedule">
            Schedule
          </Nav.Link>
          <Nav.Link id="na5" href="#link">
            Staff
          </Nav.Link>
          <Nav.Link href="#syllabus">Syllabus</Nav.Link>
          <Nav.Link
            id="na3"
            target="_blank"
            rel="noreferrer"
            href="https://piazza.com/berkeley/spring2021/cs198112"
          >
            Piazza <i class="fas fa-external-link-alt"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SiteNavbar;
