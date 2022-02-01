import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { basicStyles, lightTheme, darkTheme } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const StyledSubtitle = styled.h3`
  margin-top: 0;
  margin-bottom: ${basicStyles.gutter}px;
  color: ${color};
`;

const Subtitle = ({ text, className }) => {
  return <StyledSubtitle className={className}>{text}</StyledSubtitle>;
};

export default Subtitle;
