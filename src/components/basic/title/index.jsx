import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { basicStyles, lightTheme, darkTheme } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const StyledTitle = styled.h2`
  margin-top: 0;
  margin-bottom: ${basicStyles.gutter * 2}px;
  color: ${color};
`;

const Title = ({ text, className }) => {
  return <StyledTitle className={className}>{text}</StyledTitle>;
};

export default Title;
