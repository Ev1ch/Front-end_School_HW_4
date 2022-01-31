import React, { useState } from 'react';
import theme from 'styled-theming';
import styled, { css } from 'styled-components';
import { basicStyles, darkTheme, lightTheme } from 'styles';

const backgroundColor = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const hoverBackgroundColor = theme('mode', {
  dark: darkTheme.colors.accent,
  light: lightTheme.colors.accent,
});

const StyledCircle = styled.div`
  cursor: pointer;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background-color: ${backgroundColor};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color ${basicStyles.time}s;

  ${(props) =>
    props.active
      ? css`
          right: 2px;
        `
      : css`
          left: 2px;
        `}

  &:hover {
    background-color: ${hoverBackgroundColor};
  }
`;

const StyledSwitch = styled.div`
  border: 1px solid ${backgroundColor};
  border-radius: ${basicStyles.radius}px;
  height: 30px;
  width: 50px;
  position: relative;
`;

const Switch = ({ className, onChange }) => {
  const [isActive, setIsActive] = useState(false);

  const changeStateHandler = (event) => {
    setIsActive((prevState) => !prevState);

    if (onChange instanceof Function) {
      onChange(event);
    }
  };

  return (
    <StyledSwitch onClick={changeStateHandler} className={className}>
      <StyledCircle active={isActive} />
    </StyledSwitch>
  );
};

export default Switch;
