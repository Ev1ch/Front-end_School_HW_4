const getCutText = (text, limit) => {
  const splittedText = text.slice(0, limit).split(' ');

  while (splittedText.join(' ').length >= limit) {
    splittedText.pop();
  }

  return splittedText.join(' ');
};

export default getCutText;
