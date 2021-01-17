import React, { useState } from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "../css/navbar.scss";

// dark theme toggle stuff
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';
import Toggle from './Toggle';
import { useDarkMode } from './UseDarkMode';

const SiteNavbar = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar">
      <Navbar.Brand href="#home">
        <strong>Leetcode 101 DeCal</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#schedule">Schedule</Nav.Link>
          <Nav.Link href="#staff">Staff</Nav.Link>
          <Nav.Link href="#syllabus">Syllabus</Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noreferrer"
            href="https://piazza.com/berkeley/spring2021/cs198112"
          >
            Piazza
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/wXqGwjcD"
          >
            Discord
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noreferrer"
            href="https://wiki.python.org/moin/TimeComplexity"
          >
            Reference
          </Nav.Link>
          <ThemeProvider theme={themeMode}><><GlobalStyles /><Toggle theme={theme} toggleTheme={toggleTheme} /> </> </ThemeProvider>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SiteNavbar;
