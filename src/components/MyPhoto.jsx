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
        </WindowHeader>
        <WindowContent>
            <img src='/me3.png' width={500} height={350} alt="picture of me"></img>
            <h1 style={{fontSize: '20px'}}>Thats Me!</h1>
        </WindowContent>
      </Window>
  )
}

export default MyPhoto