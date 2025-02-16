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
import AboutMeTab from './AboutMeTab';
import Education from './Education';
import Experience from './Experience';


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
                <span>All_About_Me.exe</span>
            </WindowHeader>
            <WindowContent >
                <Tabs value={activeTab} onChange={handleChange}>
          <Tab value={0}>Who Is Michael?</Tab>
          <Tab value={1}>Education</Tab>
          <Tab value={2}>Experience</Tab>
        </Tabs>
        <TabBody style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', background: 'white' }}>
  {activeTab === 0 && (
                <AboutMeTab />
  )}
  {activeTab === 1 && (
    <Education />
  )}
  {activeTab === 2 && (
    <Experience />
  )}
</TabBody>

            </WindowContent>
            </Window>

  )
}
