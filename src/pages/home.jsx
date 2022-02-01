import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, Container } from 'components/basic';
import { Bio, Header, Post } from 'components/common';
import { basicStyles, breakpoints } from 'styles';

const StyledMain = styled.main`
  min-height: 100vh;
`;

const StyledContainer = styled(Container)`
  padding-top: ${basicStyles.gutter * 2}px;
  padding-bottom: ${basicStyles.gutter * 2}px;
`;

const StyledPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${basicStyles.gutter * 2}px;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPost = styled(Post)`
  &:not(:last-child) {
    margin-bottom: ${basicStyles.gutter * 3}px;
  }
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
`;

const Home = ({ onChangeTheme }) => {
  const options = useRef({
    pageNumber: 0,
    pageSize: 1,
  });
  const allPosts = useRef([]);
  const [posts, setPosts] = useState([]);

  const loadMoreHandler = () => {
    options.current.pageNumber++;
    setPosts(
      allPosts.current.slice(
        0,
        options.current.pageNumber * options.current.pageSize,
      ),
    );
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        allPosts.current = posts.map((post) => ({ ...post, date: new Date() }));
        loadMoreHandler();
      });
  }, []);

  return (
    <StyledMain>
      <Header onChangeTheme={onChangeTheme} />
      <Bio />
      <StyledContainer>
        <StyledPosts>
          {posts.map((post) => (
            <StyledPost post={post} key={post.id} />
          ))}
        </StyledPosts>
        <StyledButton text="Load more" onClick={loadMoreHandler} />
      </StyledContainer>
    </StyledMain>
  );
};

export default Home;
