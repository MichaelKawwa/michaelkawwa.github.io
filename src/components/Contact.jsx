import React from 'react'
import { Window, WindowHeader, WindowContent } from 'react95'

import github_logo from '/github-mark.png'
import linkedin_logo from '/LI-In-Bug.png'

function Contact() {
    return (
        <Window style={{ width: '40%', height: '50%', background: 'white' }}>
        <WindowHeader>Contact.exe</WindowHeader>
        <WindowContent style={{ background: 'white' }}> 
         
        <h1 style={{ fontSize:'20px', fontWeight:'bold', textDecoration:'underline', marginBottom: '20px'}}>Lets Get In Touch:</h1>
			<p style={{marginBottom: '10px'}}>
				You can email me here: 
				<a href={'mailto:kawwamichael@gmail.com'} style={{ color: 'blue' }}>    kawwamichael@gmail.com</a>
                
			</p>  

            <p style={{marginBottom: '10px'}}>
                you can also find me at Github:
                
                <a href='https://github.com/MichaelKawwa' style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', gap: '10px', alignItems: 'center' }}>
                <img src={github_logo} alt="github"/>
                </a>
            </p>

            <p style={{marginBottom: '10px'}}>
                And Linkedin:
                
                <a href='https://www.linkedin.com/in/michael-kawwa-6734b7255/' style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', gap: '10px', alignItems: 'center' }}>
                <img src={linkedin_logo} alt="linkedin"/>
                </a>
            </p>
    
        </WindowContent>
      </Window>  
    )
}

export default Contact