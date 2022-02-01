import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'styles';

const StyledContainer = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: ${breakpoints.sm}px) {
    width: 90%;
  }
`;

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
