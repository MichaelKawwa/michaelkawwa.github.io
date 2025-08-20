import React from "react";
import { ScrollView, Separator, Button, Frame } from "react95";

// CONTENT-ONLY Projects tab (no nested <Window>)
// - Data-driven cards
// - Tech chips + optional links (GitHub / Demo / Case Study)
// - Fills TabBody and scrolls internally

const PROJECTS = [

    {
        title: "AI Academy — LLM Quiz Generator",
        subtitle: "Web app for ingest → retrieve → generate quizzes",
        timeframe: "2025",
        desc: "React + Chakra UI frontend with a LangGraph/FastAPI backend that ingests PDFs/URLs/text, builds embeddings, and performs vector retrieval to generate interactive MCQs. Orchestrates parsing, chunking, embedding, cosine filtering, and top‑k re‑ranking to boost relevance while trimming latency and token spend.",
        tech: ["React", "TypeScript", "Chakra UI", "FastAPI", "LangGraph", "Embeddings", "Vector Search"],
        links: [
        { label: "GitHub", href: "https://github.com/MichaelKawwa/ai-academy/tree/main" }
        ]
        },
        {
        title: "Phreddit (Reddit Clone)",
        subtitle: "CSE 316 — Software Development",
        timeframe: "2024",
        desc: "Full‑stack clone supporting communities, posts, comments, and voting with a RESTful API. Focused on clean data modeling, client/server validation, and responsive UX for seamless interaction.",
        tech: ["React", "Axios", "Node.js", "Express", "MongoDB"],
        links: [
        { label: "GitHub", href: "https://github.com/MichaelKawwa/phreddit" }
        ]
        },
        {
            title: "LOQI — AI Learning Platform",
            subtitle: "VIP team frontend work",
            timeframe: "2024",
            desc: "Implemented reusable React components and patterns; coordinated with backend/ML microservices via REST.",
            tech: ["React", "TypeScript", "Design System", "REST"],
            links: [ {label: "GitHub", href: "https://github.com/viLoqi/neo_client"} ]
          },
  {
    title: "Verbal Digit Span (WAIS-style)",
    subtitle: "Web app using Web Speech APIs",
    timeframe: "2025",
    desc: "Digit Span Forward/Backward/Sequencing with 1s pacing, speech synthesis/recognition, and WAIS-IV norm-based scoring.",
    tech: ["React", "Vite", "Web Speech API", "TypeScript"],
    links: [
       { label: "Live Demo", href: "https://verbal-digitspan.netlify.app/" },
    ]
  },
  {
    title: "InsomniChat",
    subtitle: "iOS app for late-night chat rooms",
    timeframe: "HS • Published",
    desc: "Native iOS app built during high school. Rooms unlock after certain hours; focused on simple UX and reliability.",
    tech: ["Swift", "Xcode", "iOS"],
    links: [
      // { label: "App Store", href: "" },
    ]
  },
  {
    title: "Consistently",
    subtitle: "Habit tracking with streak insights",
    timeframe: "HS • Published",
    desc: "Lightweight habit tracker with streak logic and daily prompts. Emphasis on offline-first and fast UI.",
    tech: ["Swift", "SwiftUI", "iOS"],
    links: []
  },
];

const styles = {
  wrap: { maxWidth: 1060, margin: "0 auto", padding: 16 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16,
    marginTop: 12
  },
  card: { padding: 12, background: "#fff" },
  titleRow: { display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" },
  title: { fontWeight: 700, fontSize: 18 },
  timeframe: { marginLeft: "auto", fontSize: 12, opacity: 0.75 },
  subtitle: { fontSize: 14, opacity: 0.9 },
  desc: { marginTop: 8 },
  chips: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 },
  chip: { display: "inline-flex", padding: "2px 8px", border: "1px solid #000", background: "#e5e5e5", fontSize: 12 },
  links: { display: "flex", gap: 8, marginTop: 10 }
};

function TechChips({ items }) {
  if (!items?.length) return null;
  return (
    <div style={styles.chips}>
      {items.map((t) => (
        <span key={t} style={styles.chip} aria-label={`Tech: ${t}`}>{t}</span>
      ))}
    </div>
  );
}

function LinkButtons({ links }) {
  if (!links?.length) return null;
  return (
    <div style={styles.links}>
      {links.map((l) => (
        <Button key={l.label} onClick={() => window.open(l.href, "_blank")}>
          {l.label}
        </Button>
      ))}
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <Frame variant="outside" shadow style={styles.card}>
      <div style={styles.titleRow}>
        <div style={styles.title}>{p.title}</div>
        <div style={styles.timeframe}>{p.timeframe}</div>
      </div>
      {p.subtitle && <div style={styles.subtitle}>{p.subtitle}</div>}
      <div style={styles.desc}>{p.desc}</div>
      <TechChips items={p.tech} />
      <LinkButtons links={p.links} />
    </Frame>
  );
}

export default function Projects() {
  return (
    <ScrollView style={{ width: "100%", height: "100%" }}>
      <div style={styles.wrap}>
        <h1 style={{ fontWeight: "bold", fontSize: 28, margin: "12px 0" }}>Projects 🚧</h1>
        <p>Selected builds across mobile, web, and automation. Each card lists stack + a quick summary; add GitHub/Demo links as you like.</p>
        <Separator />
        <div style={styles.grid}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </ScrollView>
  );
}
