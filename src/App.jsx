import { useState } from 'react'
import './App.css'

import { AppBar, Toolbar, Hourglass, styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider, styled } from 'styled-components';

import peggysPastels from 'react95/dist/themes/peggysPastels';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;


const App = () => (
  <div className='desktop'>
    <GlobalStyles />
    <ThemeProvider theme={peggysPastels}>
    </ThemeProvider>
    </div>
);

export default App;
