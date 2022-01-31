import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { basicStyles, lightTheme, darkTheme } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const contrastColor = theme('mode', {
  dark: darkTheme.colors.secondary,
  light: lightTheme.colors.basic,
});

const StyledButton = styled.button`
  display: block;
  cursor: pointer;
  padding: ${basicStyles.gutter}px;
  background: none;
  border: 1px solid ${color};
  color: ${color};
  border-radius: ${basicStyles.radius}px;
  position: relative;
  overflow: hidden;
  transition: ${basicStyles.time}s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 0;
    background-color: ${color};
    transition: ${basicStyles.time}s;
  }

  &:hover {
    color: ${contrastColor};

    &::before {
      width: 100%;
    }
  }
`;

const StyledText = styled.span`
  position: relative;
  z-index: 2;
`;

const Button = ({ text, className, onClick }) => {
  const clickHandler = (event) => {
    if (onClick instanceof Function) {
      onClick(event);
    }
  };

  return (
    <StyledButton className={className} onClick={clickHandler}>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

export default Button;
