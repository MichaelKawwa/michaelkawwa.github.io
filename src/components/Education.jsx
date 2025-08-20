import React from "react";
import { Window, WindowHeader, WindowContent, ScrollView, Separator } from "react95";

/**
 * Concise, scannable Education section.
 * - Highlights program + degree
 * - Prioritizes key courses with outcomes/skills
 * - Summarizes extracurriculars with impact
 */

const FEATURED_COURSES = [
  {
    code: "CSE 214",
    title: "Data Structures & Algorithms",
    outcomes: [
      "Implemented arrays/lists, trees, heaps, hash tables, graphs.",
      "Analyzed time/space complexity; applied greedy/DP/graph algorithms."
    ]
  },
  {
    code: "CSE 320",
    title: "Systems Fundamentals II",
    outcomes: [
      "Wrote C for systems programming; memory, concurrency, perf profiling.",
      "Explored processes, IPC, linking/loading, ELF, and debugging toolchains."
    ]
  },
  {
    code: "CSE 216",
    title: "Programming Abstractions",
    outcomes: [
      "Built modular software using OOP, functional patterns, and generics.",
      "Reasoned about type systems, interfaces, and API design trade-offs."
    ]
  },
  {
    code: "CSE 373",
    title: "Analysis of Algorithms",
    outcomes: [
      "Proved correctness and bounds; amortized analysis and reductions.",
      "Explored NP-completeness and approximation techniques."
    ]
  },
  {
    code: "CSE 316",
    title: "Software Development",
    outcomes: [
      "Applied version control, testing, CI, and code reviews at team scale.",
      "Delivered spec-driven features with iterative milestones."
    ]
  },
  {
    code: "CSE 337",
    title: "Scripting Languages",
    outcomes: [
      "Automated workflows in Python, Ruby, Bash; text/JSON/CSV pipelines.",
      "Wrote CLI tools and glue code for data/ops tasks."
    ]
  },
  {
    code: "CSE 361",
    title: "Web Security",
    outcomes: [
      "Mitigated XSS/CSRF, injection, auth/session flaws; threat modeling.",
      "Hardened frontend/backend with secure headers and input validation."
    ]
  },
  {
    code: "CSE 360",
    title: "Software Security",
    outcomes: [
      "Secure coding in C/C++/Java; memory safety, fuzzing, static analysis.",
      "Explored crypto primitives, authZ/authN, and secure deployment."
    ]
  }
];

function Course({ code, title, outcomes }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
        <strong>{code}</strong>
        <span>— {title}</span>
      </div>
      <ul style={{ margin: 4, paddingLeft: 18 }}>
        {outcomes.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Education() {
  return (
        <ScrollView style={{ width: "100%", height: '100%' }}>
          <div style={{ maxWidth: 980, margin: "0 auto", padding: 16}}>
          <h2 style={{ fontWeight: "bold", fontSize: 28, margin: "12px 0" }}>Computer Science At Stony Brook University 💻⚙️</h2>
          <Separator />
            <div style={{ textAlign: "center", margin: "16px 0"}}>
              <img src="/Stony_Brook_University_seal.svg" alt="Stony Brook University" style={{ maxHeight: 120 }} />
            </div>

            <p>
              Final semester B.S. in Computer Science. A rigorous, systems-forward program that sharpened my foundations and
              team software practices.
            </p>

            <Separator style={{ margin: "12px 0" }} />
            <h3 style={{ marginTop: 0 }}>Key Coursework</h3>

            <div style={{ display: "grid", gap: 8 }}>
              {FEATURED_COURSES.map((c) => (
                <Course key={c.code} {...c} />)
              )}
            </div>

            <Separator style={{ margin: "12px 0" }} />
            <h3 style={{ marginTop: 0 }}>Extracurriculars</h3>
            <ul style={{ marginTop: 4, paddingLeft: 18 }}>
              <li>
                <strong>LOQI (VIP Team)</strong> — Frontend engineer for an AI-powered learning platform. Built reusable React patterns,
                collaborated via GitHub workflows, and coordinated with backend/ML services.
              </li>
              <li>
                <strong>IT / TLT Media Lab</strong> — Student software engineer building and maintaining instructional web apps; improved
                DDEV/Docker workflow and accessibility (keyboard navigation, screen-reader support).
              </li>
            </ul>
          </div>
        </ScrollView>
  );
}
