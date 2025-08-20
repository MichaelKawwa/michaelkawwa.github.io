import React from 'react'
import { Window, WindowHeader, WindowContent } from 'react95';



function Resume() {
  return (
    <Window style={{ width: '60vw', height: '60vh' }}>
      <WindowHeader>Resume.pdf</WindowHeader>
      <WindowContent style={{ width: '90%', height: '80%' }}>
        <iframe
          src='/michael_kawwa_resume.pdf'
          style={{ width: '100%', height: '100%' }}
        />
      </WindowContent>
    </Window>
  )
}

export default Resume