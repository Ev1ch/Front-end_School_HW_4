import React from 'react';
import styled from 'styled-components';
import { Button, Paragraph, Subtitle, Title } from 'components/basic';
import { getCutText } from 'helpers';
import { basicStyles } from 'styles';

const StyledText = styled.div`
  margin-bottom: ${basicStyles.gutter}px;
  text-align: justify;
`;

const StyledPost = styled.article``;

const Post = ({ post: { title, body: initialText }, className }) => {
  const text = getCutText(initialText, 200);

  return (
    <StyledPost className={className}>
      <Title text={title} />
      <Subtitle text={title} />
      <StyledText>
        <Paragraph text={`${text}...`} />
      </StyledText>
      <Button text="Read more" />
    </StyledPost>
  );
};

export default Post;
