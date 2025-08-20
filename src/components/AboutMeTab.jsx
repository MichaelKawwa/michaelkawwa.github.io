import React from "react";
import { Window, WindowHeader, WindowContent, ScrollView, Separator } from "react95";

/**
 * Concise "About Me" tab.
 * - Keeps personal storytelling, but trims verbosity
 * - Highlights progression: early curiosity → iOS dev → web/software dev → CS undergrad
 */

export default function AboutMeTab() {
  return (
        <ScrollView style={{ width: "100%", height: '100%' }}>
          <div style={{ maxWidth: 960, margin: "0 auto", padding: 16 }}>
            <h2 style={{ fontWeight: "bold", fontSize: 28, margin: "12px 0" }}>Hey, I'm Michael 👋</h2>
            <Separator />

            <div style={{ textAlign: "center", margin: "16px 0" }}>
              <img
                src="/me3.png"
                width={420}
                height={300}
                alt="picture of me"
                style={{ borderRadius: 4 }}
              />
            </div>

            <p>
              I’ve always been fascinated by technology. As a kid, I dismantled old remotes trying to understand how a thin circuit
              board could control a TV. That curiosity grew into a passion for building things of my own.
            </p>

            <p>
              In middle school I discovered programming through <strong>Unity + C#</strong>, making 2D and 3D games for friends. By
              high school, I was diving deep into <strong>iOS development</strong> with Swift and Xcode. My first published app,
              <em>InsomniChat</em>, was built during sleepless nights sophomore year—teaching me backend basics and the grind of
              shipping to the App Store.
            </p>

            <p>
              My interests expanded into <strong>web development</strong> with React.js, where I built sites for family and small
              businesses, and <strong>automation</strong> with Python to solve everyday problems. Software became my universal tool
              for creation and problem-solving.
            </p>

            <p>
              Today, I’m a <strong>Computer Science undergrad at Stony Brook University</strong>. My early tinkering gave me a head
              start, but my coursework and projects here sharpened my fundamentals in systems, algorithms, and security. I’ve
              also grown as a teammate, collaborator, and communicator. <span style={{ fontWeight: "bold" }}>Check out the Education
              tab for details on my academic journey.</span>
            </p>
          </div>
        </ScrollView>
  );
}
