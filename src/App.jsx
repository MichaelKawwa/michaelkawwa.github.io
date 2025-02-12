import { useState } from 'react'
import './App.css'

import { AppBar, Button, Toolbar, MenuList, MenuListItem, Separator, TextInput, Hourglass, styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider, styled } from 'styled-components';

import Clock from './components/Clock';

import peggysPastels from 'react95/dist/themes/peggysPastels';

import logoIMG from './assets/logo.png';

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

  const [open, setOpen] = useState(false);

    return(
      <div className='desktop' style={{ background: peggysPastels.desktopBackground }}>
        <GlobalStyles />
        <ThemeProvider theme={peggysPastels}>
          <nav>
            <AppBar style={{ zIndex: 3, padding: '5px' }}>
              <Toolbar style={{ justifyContent: 'space-between' }}>
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Me />
              <div style={{ position: 'relative'}}>
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: 'bold' }}
              >
                <img
                  src={logoIMG}
                  alt='react95 logo'
                  style={{ height: '20px', marginRight: 4 }}
                />
                Start
              </Button>
              {open && (
                <MenuList
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '100%'
                  }}
                  onClick={() => setOpen(false)}
                >
                  <MenuListItem>
                    <span role='img' aria-label='👨‍💻'>
                      👨‍💻
                    </span>
                     Michael
                  </MenuListItem>
                  <MenuListItem>
                    <span role='img' aria-label='📁'>
                      📁
                    </span>
                    Resume
                  </MenuListItem>
                  <Separator />
                  <MenuListItem disabled>
                    <span role='img' aria-label='🔙'>
                      🔙
                    </span>
                    Logout
                  </MenuListItem>
                </MenuList>
              )}
            </div>
            </div>

            <Clock />
          </Toolbar>
            </AppBar>
          </nav>
        </ThemeProvider>
        </div>
    );
};

export default App;
