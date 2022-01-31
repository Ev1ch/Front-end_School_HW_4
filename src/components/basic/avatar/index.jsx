import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { lightTheme, darkTheme } from 'styles';

const backgroundColor = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  background-color: ${backgroundColor};
  overflow: hidden;
`;

const Avatar = ({ image, className }) => {
  return <StyledAvatar src={image} className={className}></StyledAvatar>;
};

export default Avatar;
