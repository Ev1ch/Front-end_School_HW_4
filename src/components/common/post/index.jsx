import { Paragraph, Subtitle, Title } from 'components/basic';
import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div``;
const StyledPost = styled.article``;

const Post = ({ post: { title, subtitle, text }, className }) => {
  return (
    <StyledPost className={className}>
      <Title text={title} />
      <Subtitle text={subtitle} />
      <StyledText>
        <Paragraph text={text} />
      </StyledText>
    </StyledPost>
  );
};

export default Post;
