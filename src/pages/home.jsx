import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, Container } from 'components/basic';
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
        allPosts.current = posts;
        loadMoreHandler();
      });
  }, []);

  return (
    <StyledMain>
      <Header onChangeTheme={onChangeTheme} />
      <Bio />
      <StyledContainer>
        {posts.map((post) => (
          <StyledPost post={post} key={post.id} />
        ))}
        <StyledButton text="Load more" onClick={loadMoreHandler} />
      </StyledContainer>
    </StyledMain>
  );
};

export default Home;
