import React, { useState } from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
    <div class="container">
      <p class="text-center">
        <span class="text-muted">Website template taken with permission from the <a href="https://www.eecs16b.org/">EECS16B</a> website.</span>
      </p>
    </div>
  );
};

export default SiteNavbar;
