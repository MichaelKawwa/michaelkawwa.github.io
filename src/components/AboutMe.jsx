import React from 'react';

import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  ScrollView
} from 'react95';

import styled from 'styled-components';

import Draggable from 'react-draggable'


const Wrapper = styled.div`

    height: 70vh;
    width: 100%;

  padding: 5rem;
  padding-left: 30rem;
  background: ${({ theme }) => theme.desktopBackground};
  
  .window-title {
    display: flex;
    align-items: center;
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
    min-height: 100%;
    background: white;
  }


  .window:nth-child(2) {
    margin: 2rem;
  }

  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;


export default function AboutMe() {
  return (
        <Wrapper>
            <Window resizable className='window'>
            <WindowHeader className='window-title'>
                <span>Me.exe</span>
                <Button>
                <span className='close-icon' />
                </Button>
            </WindowHeader>
            <Toolbar>
                <Button variant='menu' size='sm'>
                Who Am I?
                </Button>
                <Button variant='menu' size='sm'>
                Experience
                </Button>
            </Toolbar>
            <WindowContent >
                 <ScrollView style={{ width: '100%', height: '100%' }}>
                <div>
                <h1 style={{margin: '20px', fontsize: '40px'}}><strong>Hey, I'm Michael!</strong></h1>
                <p>
                When you set &quot;resizable&quot; prop, there will be drag handle
                in the bottom right corner (but resizing itself must be handled by
                you tho!)
                </p>
                <h1 style={{margin: '20px', fontsize: '40px'}}><strong>Hey, I'm Michael!</strong></h1>
                <p>
                When you set &quot;resizable&quot; prop, there will be drag handle
                in the bottom right corner (but resizing itself must be handled by
                you tho!)
                </p>
                <h1 style={{margin: '20px', fontsize: '40px'}}><strong>Hey, I'm Michael!</strong></h1>
                <p>
                When you set &quot;resizable&quot; prop, there will be drag handle
                in the bottom right corner (but resizing itself must be handled by
                you tho!)
                </p>
                <h1 style={{margin: '20px', fontsize: '40px'}}><strong>Hey, I'm Michael!</strong></h1>
                </div>
                </ScrollView>
            </WindowContent>
            </Window>

        </Wrapper>
  )
}
