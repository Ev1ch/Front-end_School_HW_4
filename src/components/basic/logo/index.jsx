import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { lightTheme, darkTheme, basicStyles } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const StyledLogo = styled.div`
  position: relative;
  cursor: pointer;

  &::before {
    z-index: 1;
    position: absolute;
    top: -5px;
    right: -30px;
    content: '';
    width: 20px;
    height: 60px;
    background-color: #d6e0b1;
    transform: rotateZ(-20deg) scale(0);
    transition: ${basicStyles.time}s;
  }

  &:hover {
    &::before {
      transform: rotateZ(20deg) scale(1);
    }
  }
`;

const StyledName = styled.span`
  font-weight: 900;
  font-size: 40px;
  color: ${color};
  position: relative;
  z-index: 2;
`;

const Logo = ({ className, onClick }) => {
  const clickHandler = (event) => {
    if (onClick instanceof Function) {
      onClick(event);
    }
  };

  return (
    <StyledLogo className={className} onClick={clickHandler}>
      <StyledName>Simplier</StyledName>
    </StyledLogo>
  );
};

export default Logo;
