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
import Projects from './Projects';


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
            <Window resizable   
            style={{
              width: '70%',
              height: 'clamp(560px, 75vh, 1000px)', // scales the whole panel
              display: 'flex',
              flexDirection: 'column'
            }}>
            <WindowHeader className='window-title'>
                <span>All_About_Me.exe</span>
            </WindowHeader>
            <WindowContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Tabs value={activeTab} onChange={handleChange}>
          <Tab value={0}>Who Is Michael?</Tab>
          <Tab value={1}>Education</Tab>
          <Tab value={2}>Experience</Tab>
          <Tab value={3}>Projects</Tab>
        </Tabs>
        <div style={{ flex: 1, overflow: 'hidden' }}>

        <TabBody style={{ height: '90%', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
  {activeTab === 0 && (
                <AboutMeTab />
  )}
  {activeTab === 1 && (
    <Education />
  )}
  {activeTab === 2 && (
    <Experience />
  )}
  {activeTab === 3 && (
    <Projects />
  )}
</TabBody>
</div>


            </WindowContent>
            </Window>

  )
}
