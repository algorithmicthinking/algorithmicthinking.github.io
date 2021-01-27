// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html, body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .navbar {
    background: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
    .navbar-brand {
      color: ${({ theme }) => theme.text};
    }
    .nav-link {
      p {
        color: ${({ theme }) => theme.text};
      }
    }
  }

  .table {
    td {
      color: ${({ theme }) => theme.text};
    }
  }
  `;
