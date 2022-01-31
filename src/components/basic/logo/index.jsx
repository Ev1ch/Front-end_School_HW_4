import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { lightTheme, darkTheme } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const StyledLogo = styled.span`
  font-weight: 900;
  font-size: 40px;
  color: ${color};
`;

const Logo = ({ className }) => {
  return <StyledLogo className={className}>Simplier</StyledLogo>;
};

export default Logo;
