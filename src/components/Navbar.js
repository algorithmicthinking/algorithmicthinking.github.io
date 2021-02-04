import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Logo from "../img/logo.png";

import "../css/navbar.scss";

// dark theme toggle stuff
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import { GlobalStyles } from "./Global";
import Toggle from "./Toggle";
import { useDarkMode } from "./UseDarkMode";

const SiteNavbar = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="" />
        <strong style={{ color: "#ED9705" }}>Leetcode 101 DeCal</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#schedule">
            <p>Schedule</p>
          </Nav.Link>
          <Nav.Link href="#staff">
            <p>Staff</p>
          </Nav.Link>
          <Nav.Link href="#syllabus">
            <p>Syllabus</p>
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noreferrer"
            href="https://piazza.com/berkeley/spring2021/cs198112"
          >
            <p>Piazza</p>
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/Ewyh3YJd8m"
          >
            <p>Discord</p>
          </Nav.Link>
          <Nav.Link
            href="#resources"
          >
            <p>Resources</p>
          </Nav.Link>
          <div className="toggle">
            <ThemeProvider theme={themeMode}>
              <>
                <GlobalStyles />
                <Toggle
                  theme={theme}
                  toggleTheme={toggleTheme}
                  className="theme-button"
                />
              </>
            </ThemeProvider>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SiteNavbar;
