import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
`;

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
