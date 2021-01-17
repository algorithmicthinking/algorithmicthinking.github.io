import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as MoonIcon } from './../icons/moon.svg';
import { ReactComponent as SunIcon } from './../icons/sun.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 5rem;
  height: 3rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ darkTheme }) => darkTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} >
      <MoonIcon />
      <SunIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
