import React, { useState, useEffect } from 'react'
import './App.css'
import MainDesktop from './MainDesktop';
import { ProgressBar } from 'react95';

import original from 'react95/dist/themes/original';

import { styleReset } from 'react95';

import { createGlobalStyle, ThemeProvider, styled } from 'styled-components';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import Me from './components/Me';

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


function App() {

    const [loading, setLoading] = useState(true);

      const [percent, setPercent] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setPercent(previousPercent => {
            if (previousPercent === 100) {
              setLoading(false);
              return 0;
            }
            const diff = Math.random() * 50;
            return Math.min(previousPercent + diff, 100);
          });
        }, 500);
        return () => {
          clearInterval(timer);
        };
      }, []);
      


    return(
      <div className='desktop' style={{ background: original.desktopBackground }}>
      <GlobalStyles />
      <ThemeProvider theme={original}>
      {loading ? <ProgressBar style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
        }} value={Math.floor(percent)}/> : <MainDesktop />}
      </ThemeProvider>
    </div>
    );

  }


export default App;
