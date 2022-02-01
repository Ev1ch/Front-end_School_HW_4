import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Avatar, Container } from 'components/basic';
import { basicStyles, darkTheme, lightTheme } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledBio = styled.div`
  margin-bottom: ${basicStyles.gutter * 4}px;
`;

const StyledDescription = styled.p`
  margin-left: ${basicStyles.gutter}px;
  display: flex;
  flex-direction: column;
  color: ${color};
`;

const StyledName = styled.b``;

const StyledFacts = styled.i``;

const Bio = () => {
  return (
    <StyledBio>
      <StyledContainer>
        <Avatar />
        <StyledDescription>
          <StyledName>Vlad Zusko</StyledName>
          <StyledFacts>Fullstack TS developer</StyledFacts>
        </StyledDescription>
      </StyledContainer>
    </StyledBio>
  );
};

export default Bio;
