import React, { useState } from 'react';
import theme from 'styled-theming';
import styled, { css } from 'styled-components';
import { basicStyles, darkTheme, lightTheme } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const activeColor = theme('mode', {
  dark: darkTheme.colors.accent,
  light: lightTheme.colors.accent,
});

const StyledSwitch = styled.div`
  border: 1px solid ${color};
  border-radius: ${basicStyles.radius}px;
  height: 31px;
  width: 50px;
  position: relative;
  cursor: pointer;
  transition: ${basicStyles.time}s;

  &:hover {
    border-color: ${activeColor};
  }
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background-color: ${color};
  position: absolute;
  top: 0.5px;
  transition: ${basicStyles.time}s;
  overflow: hidden;

  ${(props) =>
    props.active
      ? css`
          right: 1px;
        `
      : css`
          left: 1px;
        `}

  &::before {
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 0;
    height: 0;
    background-color: ${activeColor};
    transition: ${basicStyles.time}s;
  }

  &:hover {
    background-color: ${activeColor};

    &::before {
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
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
