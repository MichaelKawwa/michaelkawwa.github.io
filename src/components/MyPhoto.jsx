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
            <img src='/me.jpeg' width={500} height={450} alt="picture of me"></img>
        </WindowContent>
      </Window>
  )
}

export default MyPhoto