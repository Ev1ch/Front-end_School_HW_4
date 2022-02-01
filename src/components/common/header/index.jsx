import React from 'react';
import styled from 'styled-components';
import { Container, Logo, Switch } from 'components/basic';
import { basicStyles } from 'styles';

const StyledHeader = styled.header`
  padding-top: ${basicStyles.gutter * 2}px;
  padding-bottom: ${basicStyles.gutter * 2}px;
  margin-bottom: ${basicStyles.gutter * 4}px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ onChangeTheme }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <Switch onChange={onChangeTheme} />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
