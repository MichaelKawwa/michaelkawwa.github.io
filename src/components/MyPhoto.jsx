import React from 'react';

import {
  Button,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';

import styled from 'styled-components';

import { useState } from 'react';


function MyPhoto() {
  return (
      <Window className='window'>
        <WindowHeader active={true} className='window-title'>
          <span>Me.jpeg</span>
          <Button>
            <span className='close-icon' />
          </Button>
        </WindowHeader>
        <WindowContent>
            <img src='/me2.jpeg' width={500} height={350} alt="picture of me"></img>
            <h1 style={{fontSize: '20px'}}>Me!!!</h1>
        </WindowContent>
      </Window>
  )
}

export default MyPhoto