import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { lightTheme, darkTheme, basicStyles } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const contrastColor = theme('mode', {
  dark: darkTheme.colors.secondary,
  light: lightTheme.colors.basic,
});

const StyledAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  background-color: ${color};
  overflow: hidden;
  border: 3px solid ${contrastColor};
  outline: 3px dashed ${color};
  transition: ${basicStyles.time}s;

  &:hover {
    outline: 3px solid ${color};
  }
`;

const Avatar = ({ image, className }) => {
  return <StyledAvatar src={image} className={className}></StyledAvatar>;
};

export default Avatar;
