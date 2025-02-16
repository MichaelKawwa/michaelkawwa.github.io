import React from 'react'

import {ScrollView, Separator } from 'react95'


export default function Experience() {
  return (
    <ScrollView style={{ width: '100%', height: '400px' }}>
        <h1 style={{margin: '20px', fontWeight:'bold', fontSize: '30px'}}>
        <strong>Work Experience 👨‍💻🏢</strong></h1>
        <Separator />

        <p style={{margin: '20px', fontSize: '20px'}}>
        All my education and background ultimately set the stage for establishing my career out in the real world. However my work experiences have been just as crucial to my learning journey as all my schooling was. 
        </p>

        <p style={{margin: '20px', fontSize: '20px'}}>
        During my internship at <span style={{fontWeight:'bold'}}>Pulp Chat</span>, a startup, dedicated to revolutionizing how we conversate and communicate using AI, I was given many large responsibilities and my first taste of professional software development. I solely led the development of a web application to be used by the other members of the company to preprocess and collect data. I learned to use flask and SQLite in the process. I had to ensure the reliability and security of the application due to how crucial it was to all the other operations happening at the company. This also introduced me to the importance of documenting my work and making sure my work meets the requirements of the team. Following this, I also got to work on the frontend of the application using React and Tailwind CSS, and database management using Prisma. I got to experience full stack web development in a professional environment. 
        </p>

        <p style={{margin: '20px', fontSize: '20px'}}>
        As a Web Development intern at <span style={{fontWeight:'bold'}}>Black to Business</span>, a platform for African American Entrepreneurs, I helped work on their podcasting platform site. I utilized Wordpress along with Custom CSS and Javascript to create and beautifully redesign many of the pages in the site, working closely with a graphic designer. I learned to pay close attention to visual details to make websites aesthetically pleasing and create a pleasant user experience. I also used my scripting skills to automate collecting and storing podcast analytics data, an idea which I proposed as I had figured their process can and should easily be automated. This helped garner confidence in initiating and implementing my own ideas. 
        </p>

        <p style={{margin: '20px', fontSize: '20px'}}>
        Working as a software engineer in my VIP team, <span style={{fontWeight:'bold'}}>LOQI</span>, my primary focus was on the frontend which was implemented in React JS. Working on the interface and design throughout my time here has made me a seasoned frontend developer and teamplayer, having to efficiently communicate my work to other members of the team to ensure we were reaching progress on our goals. 
        </p>

        
    </ScrollView>
  )
}
