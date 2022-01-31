import React from 'react';
import styled from 'styled-components';
import { Button, Paragraph, Subtitle, Title } from 'components/basic';
import { getCutText } from 'helpers';

const StyledText = styled.div``;
const StyledPost = styled.article``;

const Post = ({ post: { title, subtitle, text: initialText }, className }) => {
  const text = getCutText(initialText, 200);

  return (
    <StyledPost className={className}>
      <Title text={title} />
      <Subtitle text={subtitle} />
      <StyledText>
        <Paragraph text={`${text}...`} />
      </StyledText>
      <Button text="Read more" />
    </StyledPost>
  );
};

export default Post;
