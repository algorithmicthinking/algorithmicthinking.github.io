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

  img {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src="https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png" style={{width: 30, height: 30}} alt="Sun"/>
      <img src="https://assets.leetcode.com/static_assets/public/icons/apple-touch-icon-180x180.png" style={{width: 30, height: 30}} alt="Moon"/>
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
