import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ContentPart1 from './components/ContentPart1';
import ContentPart2 from './components/ContentPart2';
import ContentPart3 from './components/ContentPart3';
import ContentPart4 from './components/ContentPart4';
import Footer from './components/Footer';
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import GlobalStyled from './shared/themes/globalStyled';
import { lightTheme, darkTheme } from './shared/themes/themeStyled';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyled />
        <Header toggleTheme={toggleTheme} />
        <ContentPart1 />
        <ContentPart3 />
        <SlideShow />
        <ContentPart2 />
        <ContentPart4 />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
