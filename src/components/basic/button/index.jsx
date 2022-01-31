import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { basicStyles, lightTheme, darkTheme } from 'styles';

const backgroundColor = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.basic,
});

const StyledButton = styled.button`
  padding: ${basicStyles.gutter}px;
  background-color: ${backgroundColor};
  border-radius: ${basicStyles.radius}px;
`;

const Button = ({ text, className }) => {
  return <StyledButton className={className}>{text}</StyledButton>;
};

export default Button;
