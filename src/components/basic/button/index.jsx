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
  cursor: pointer;
  padding: ${basicStyles.gutter}px;
  background: none;
  border: 1px solid ${color};
  color: ${color};
  border-radius: ${basicStyles.radius}px;
  transition: ${basicStyles.time}s;

  &:hover {
    background-color: ${color};
    color: ${contrastColor};
  }
`;

const Button = ({ text, className, onClick }) => {
  const clickHandler = (event) => {
    if (onClick instanceof Function) {
      onClick(event);
    }
  };

  return (
    <StyledButton className={className} onClick={clickHandler}>
      {text}
    </StyledButton>
  );
};

export default Button;
