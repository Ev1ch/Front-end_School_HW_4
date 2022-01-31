import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import { Home } from 'pages';
import { basicStyles, darkTheme, lightTheme } from 'styles';

const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const backgroundColor = theme('mode', {
  dark: darkTheme.colors.secondary,
  light: lightTheme.colors.basic,
});

const Styled = createGlobalStyle`
* {
  font-family: ${basicStyles.font.basic.family}
}

body {
  margin: 0;
  background-color: ${backgroundColor};
}
`;

const App = () => {
  const [theme, setTheme] = useState(Themes.LIGHT);

  const changeThemeHandler = (event) => {
    setTheme((prevState) =>
      prevState === Themes.LIGHT ? Themes.DARK : Themes.LIGHT,
    );
  };

  return (
    <>
      <ThemeProvider theme={{ mode: theme }}>
        <Styled />
        <Home onChangeTheme={changeThemeHandler} />
      </ThemeProvider>
    </>
  );
};

export default App;
