import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'components/basic';
import { Bio, Header, Post } from 'components/common';
import { basicStyles } from 'styles';

const StyledMain = styled.main`
  min-height: 100vh;
`;

const StyledContainer = styled(Container)`
  padding-top: ${basicStyles.gutter * 2}px;
  padding-bottom: ${basicStyles.gutter * 2}px;
`;

const StyledPost = styled(Post)`
  &:not(:last-child) {
    margin-bottom: ${basicStyles.gutter * 3}px;
  }
`;

const Home = ({ onChangeTheme }) => {
  const [posts] = useState([
    {
      id: Math.random(),
      title: 'Title',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in minima saepe cum odit dolorum sunt nulla odio asperiores blanditiis eaque praesentium ratione, enim nobis quos doloribus sapiente rerum repellat.',
    },
    {
      id: Math.random(),
      title: 'Title',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in minima saepe cum odit dolorum sunt nulla odio asperiores blanditiis eaque praesentium ratione, enim nobis quos doloribus sapiente rerum repellat.',
    },
    {
      id: Math.random(),
      title: 'Title',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in minima saepe cum odit dolorum sunt nulla odio asperiores blanditiis eaque praesentium ratione, enim nobis quos doloribus sapiente rerum repellat.',
    },
    {
      id: Math.random(),
      title: 'Title',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in minima saepe cum odit dolorum sunt nulla odio asperiores blanditiis eaque praesentium ratione, enim nobis quos doloribus sapiente rerum repellat.',
    },
    {
      id: Math.random(),
      title: 'Title',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in minima saepe cum odit dolorum sunt nulla odio asperiores blanditiis eaque praesentium ratione, enim nobis quos doloribus sapiente rerum repellat.',
    },
  ]);

  return (
    <StyledMain>
      <Header onChangeTheme={onChangeTheme} />
      <Bio />
      <StyledContainer>
        {posts.map((post) => (
          <StyledPost post={post} key={post.id} />
        ))}
      </StyledContainer>
    </StyledMain>
  );
};

export default Home;
