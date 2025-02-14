import React from 'react';

import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  ScrollView,
  Tabs,
  Tab,
  TabBody,
  Separator 
} from 'react95';

import styled from 'styled-components';

import { useState } from 'react';


export default function AboutMe() {
    const [state, setState] = useState({
        activeTab: 0
    });
    const handleChange = (value, event) => {
            console.log({ value, event });
            setState({ activeTab: value });
          };
        
    const { activeTab } = state;
  return (
            <Window resizable className='window' style={{ width: '70%', height: '100%' }}>
            <WindowHeader className='window-title'>
                <span>Me.exe</span>
                <Button>
                <span className='close-icon' />
                </Button>
            </WindowHeader>
            <WindowContent >
                <Tabs value={activeTab} onChange={handleChange}>
          <Tab value={0}>Who Am I?</Tab>
          <Tab value={1}>Experience</Tab>
          <Tab value={2}>Education</Tab>
        </Tabs>
        <TabBody style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', background: 'white' }}>
  {activeTab === 0 && (
                 <ScrollView style={{ width: '100%', height: '400px' }}>
                <h1 style={{margin: '20px', fontWeight:'bold', fontSize: '30px'}}>
                <strong>Hey, I'm Michael!</strong></h1>
                <Separator />
                <p style={{margin: '20px', fontSize: '20px'}}>
                When you set &quot;resizable&quot; prop, there will be drag handle
                in the bottom right corner (but resizing itself must be handled by
                you tho!)
                </p>
     </ScrollView>
  )}
  {activeTab === 1 && (
    <div style={{ width: '100%', height: '100%' }}>
      <div>Accesories stuff here</div>
    </div>
  )}
  {activeTab === 2 && (
    <div style={{ width: '100%', height: '100%' }}>
      <div>Clothing stuff here</div>
    </div>
  )}
</TabBody>

            </WindowContent>
            </Window>

  )
}
