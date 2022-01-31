import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { basicStyles, lightTheme, darkTheme } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const StyledParagraph = styled.p`
  font: ${basicStyles.font.basic.style};
  margin-top: 0;
  margin-bottom: 0;
  color: ${color};

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Paragraph = ({ text, className }) => {
  return <StyledParagraph className={className}>{text}</StyledParagraph>;
};

export default Paragraph;
