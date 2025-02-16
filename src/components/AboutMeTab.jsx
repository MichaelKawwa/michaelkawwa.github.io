import React from 'react'

import {ScrollView, Separator } from 'react95'

function AboutMeTab() {
  return (
    <ScrollView style={{ width: '100%', height: '400px' }}>
    <h1 style={{margin: '20px', fontWeight:'bold', fontSize: '30px'}}>
    <strong>Hey, I'm Michael!</strong></h1>
    <Separator />
    <p style={{margin: '20px', fontSize: '20px'}}>
    Growing up I have always had a fascination with technology. Some of my earliest memories include taking apart old tv remotes, completely in awe of how a thin circuit board with funky looking metal pins and etchings on it can tell a tv what channel I want from across the room. It must have been magic, I thought.
    </p>

    <p style={{margin: '20px', fontSize: '20px'}}>
    As I grew a little older so did my curiosity. I would learn it isn’t really magic but light emitting diodes that enabled a tv remote to instantly communicate with a TV (and why these old tv remote were such a pain to use)!  Watching hours of youtube videos explaining science and technology filled my younger mind with all these little revelations of how the world around me worked. Like many other kids my age I spent much of my time getting lost in video games with my friends. Eventually I had my own ideas. No longer satisfied just playing video games I set out to make my own. This introduced me to the world of programming. Starting out with the game engine Unity and C# I spent much of my time in middle school learning and developing my own 2D and 3D games with unity for me and my friends to play. Eventually my passion for game development would develop into a greater fervor for software development in general. 
    </p>

    <p style={{margin: '20px', fontSize: '20px'}}>
    This would come following getting gifted my first personal IMac in my freshman year of high school. Being obsessed with all things apple at this point in my life, this gift would be a turning point in my life. I finally had the hardware to explore all my software interests. Entrenched in the apple ecosystem as I was, I naturally started getting into IOS development. Again, I found myself spending the majority of my time in freshman year learning, this time Swift  and Xcode, the main language and software development environment used for native IOS development. Having so many app ideas of my own I knew I had to learn everything there was to know about IOS development. This led to the release of my first app in sophomore year of highschool: InsomniChat. Struggling with insomnia at the time I decided to code away the long nights to make a chat app only for others awake past a certain hour. This project was one of my most ambitious and required backend knowledge which at the time was a mystery to me. After many sleepless nights and revisions my first app was finally accepted onto the app store. All my hard work paid off and I was ecstatic, sharing the app with all my friends and family. 
    </p>

    <p style={{margin: '20px', fontSize: '20px'}}>
    As time passed, I dipped into other areas of software development. I learned frontend web development with React JS. So when my cousin needed a website for his cafe I was able to step up to the occasion. Seeing how valuable my skill set was to our modern digital world, I started to offer my services to any friends and family who would benefit from them. I saw software as the ultimate tool to solve not only my day to day problems with things like automation programs using python but also helping those around me with their digital needs.     
    </p>

    <p style={{margin: '20px', fontSize: '20px'}}>
    This background helped me immensely once I started College. As a current undergraduate student at Stony Brook University studying Computer Science, I can say that my background helped me not only to get ahead but also allowed me to learn more in my few years at college than I have in the many years before that. <span style={{ fontWeight:"bold" }}>Go to the Education tab to learn more about my learning journey here at Stony Brook.</span>
    </p>

</ScrollView>
  )
}

export default AboutMeTab