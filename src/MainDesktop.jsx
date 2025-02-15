import { useState } from 'react'
import './App.css'

import { AppBar, Button, Toolbar, MenuList, MenuListItem, Separator, TextInput, Hourglass, styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider, styled, css } from 'styled-components';

import Clock from './components/Clock';
import AboutMe from './components/AboutMe';
import MyPhoto from './components/MyPhoto';
import MePokedex from './components/MePokedex';
import Me from './components/Me';
import Resume from './components/Resume';


import original from 'react95/dist/themes/original';

import logoIMG from './assets/logo.png';
import github_logo from '/github-mark.png'
import linkedin_logo from '/LI-In-Bug.png'

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';




const size = {
  small: 400,
  medium: 900,
  large: 1140
}

const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${size[label]}px) {
          ${css(...args)}
      }
  `
  return acc;
}, {});

const Wrapper = styled.div`

  height: 70vh;
  width: 100%;

  padding: 7rem;
  padding-left: 5rem;

  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: stretch;
  margin-bottom: 40px;

  ${media.medium`
      grid-template-columns: 1fr;
      grid-gap: 40px;
      padding: 10px;
      width: 95%;
  `}   


  background: ${({ theme }) => theme.desktopBackground};
  
  .window-title {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }

    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }

    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .window {
    min-height: 60%;
    background: white;
  }


  .window:nth-child(2) {
    margin: 1rem;
  }

  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;

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

const MainDiv = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: stretch;
  margin-bottom: 40px;

  ${media.medium`
      grid-template-columns: 1fr;
      grid-gap: 40px;
      padding: 10px;
      width: 95%;
  `} 
`;


function MainDesktop() {

  const [open, setOpen] = useState(false);
  const [openSocials, setOpenSocials] = useState(false);

  const [window, setWindow] = useState({
    activeWindow: 0
  });

  const handleChange = (value) => {
    console.log({ value });
    setWindow({ activeWindow: value });
  };

  const { activeWindow } = window;



    return(
      <div className='desktop' style={{ background: original.desktopBackground }}>
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <nav>
            <AppBar style={{ zIndex: 3, padding: '2.5px' }}>
              <Toolbar style={{ justifyContent: 'space-between' }}>
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Me onClick={() => handleChange(1)}/>
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
                >
                  <MenuListItem onClick={() => { 
                  handleChange(0); 
                  setOpen(false); 
                  }}> 
                    <span role='img' aria-label='👨‍💻'>
                      👨‍💻
                    </span>
                     Michael
                  </MenuListItem>
                  <MenuListItem onClick={() => { 
                  handleChange(3); 
                  setOpen(false); 
                  }}> 
                    <span role='img' aria-label='📁'>
                      📁
                    </span>
                    Resume
                  </MenuListItem>
                  <MenuListItem onClick={() => setOpen(false)}>
                    <span role='img' aria-label='🛠️'>
                      🛠️
                    </span>
                    Projects
                  </MenuListItem>
                  <MenuListItem onClick={() => { 
                  handleChange(2); 
                  setOpen(false); 
                  }}>
                    <span role='img' aria-label='📁'>
                     🔥
                    </span>
                    Skills
                  </MenuListItem>
                  <Separator />
                  <MenuListItem onClick={() => setOpenSocials(!openSocials)}>
                    <span role='img' aria-label='📱'>
                      📱
                    </span>
                    Socials
                  </MenuListItem>
                  <Separator />
                  <MenuListItem onClick={() => setOpen(false)}>
                    <span role='img' aria-label='📧'>
                      📧
                    </span>
                    Email
                  </MenuListItem>
                </MenuList>
              )}
      {open && openSocials && (
      <MenuList 
      style={{
        position: 'absolute',
        left: '125%',
        top: '400%'
        }}>
       <MenuListItem onClick={() =>setOpenSocials(false)}>
          <a href='https://github.com/MichaelKawwa' style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', gap: '10px', alignItems: 'center' }}>
         <img src={github_logo} alt="github"/>
          Github
          </a>
        </MenuListItem>
        <MenuListItem onClick={() =>setOpenSocials(false)}>
        <a href='https://www.linkedin.com/in/michael-kawwa-6734b7255/' style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', gap: '10px', alignItems: 'center' }}>
         <img src={linkedin_logo} alt="linkedin"/>
          Linkedin
        </a>
        </MenuListItem>
      </MenuList>
      )};
            </div>
            </div>

            <Clock />
          </Toolbar>
            </AppBar>
          </nav>


      
          <Wrapper>

        {activeWindow == 0 && <AboutMe />}

        {activeWindow == 1 && <MyPhoto />}

        {activeWindow == 2 && <MePokedex />}

        {activeWindow == 3 && <Resume />}


        </Wrapper>




        </ThemeProvider>
        </div>
    );
};

export default MainDesktop;
