import React from 'react';
import styled from 'styled-components';
import { Button, Paragraph, Subtitle, Title, Datetime } from 'components/basic';
import { extractDate, getCutText } from 'helpers';
import { basicStyles } from 'styles';

const StyledText = styled.div`
  margin-bottom: ${basicStyles.gutter}px;
  text-align: justify;
`;

const StyledPost = styled.article``;

const Post = ({
  post: { title, body: initialText, date: initialDate },
  className,
}) => {
  const text = getCutText(initialText, 200);
  const { date, time } = extractDate(initialDate);

  return (
    <StyledPost className={className}>
      <Title text={title} />
      <Subtitle text={title} />
      <Datetime date={date} time={time} />
      <StyledText>
        <Paragraph text={`${text}...`} />
      </StyledText>
      <Button text="Read more" />
    </StyledPost>
  );
};

export default Post;
