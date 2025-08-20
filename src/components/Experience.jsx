import React from "react";
import {
  Window,
  WindowHeader,
  WindowContent,
  ScrollView,
  Separator,
  Button
} from "react95";

/**
 * A more professional, scannable Experience section:
 * - Data-driven (edit the EXPERIENCES array only)
 * - Role/company/timeframe clearly separated
 * - Impact-focused bullet points
 * - Tech stack chips
 * - Optional links (repo/case study)
 */

const EXPERIENCES = [
  {
    company: "Stony Brook University — TLT Media Lab",
    role: "Student Software Engineer",
    timeframe: "2025 — Present",
    bullets: [
    "Developed and maintained multiple interactive websites used in Stony Brook University courses within a DDEV environment using the LAMP stack.",
    "Configured local DDEV + Docker environments to simulate authenticated user sessions by replicating IdP and service provider authentication flows, creating dev environments that mirror production.",
    "Improved website accessibility by enhancing PHP-based interfaces to support keyboard navigation and screen-reader compatibility for visually impaired students.",
    "Contributed to a streamlined development workflow, ensuring smoother transitions from development to production.",
    "Optimized CI/CD reliability and reduced onboarding time for new developers by codifying environment setup and automating admin authorization."
    ],
    tech: ["Docker", "DDEV", "PHP", "Apache", "MySQL", "CI/CD", "Accessibility"],
    links: []
    },
  {
    company: "Pulp Chat",
    role: "Software Engineering Intern",
    timeframe: "2024",
    bullets: [
      "Designed and shipped a Flask + SQLite internal tool for data preprocessing and collection with access controls.",
      "Built React + Tailwind UI and used Prisma for schema management; delivered a full-stack workflow.",
      "Documented architecture and tests to improve maintainability and team adoption."
    ],
    tech: ["Flask", "SQLite", "React", "Tailwind CSS", "Prisma"],
    links: []
  },
  {
    company: "Black to Business",
    role: "Web Development Intern",
    timeframe: "2024",
    bullets: [
      "Customized WordPress templates with advanced CSS/JS to improve UX consistency on the podcast platform.",
      "Automated podcast analytics ingestion with Python (deployed via GCP Functions) to replace manual workflows.",
      "Collaborated with design to align branding with accessibility best practices."
    ],
    tech: ["WordPress", "JavaScript", "CSS", "Python", "Google Cloud Functions"],
    links: []
  },
  {
    company: "LOQI (VIP Team)",
    role: "Software Engineer — Frontend",
    timeframe: "2024",
    bullets: [
      "Implemented reusable React components and patterns for an AI learning platform (responsive + accessible).",
      "Coordinated with backend/ML services in a microservices setup; hardened API integration flows.",
      "Improved team velocity by standardizing code style and UI primitives."
    ],
    tech: ["React", "TypeScript", "REST", "Design Systems"],
    links: []
  }
];

const styles = {
  container: {
    maxWidth: 980,
    margin: "0 auto",
    padding: 16
  },
  headerRow: {
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    flexWrap: "wrap"
  },
  role: { fontSize: 18, fontWeight: 700 },
  company: { fontSize: 18 },
  timeframe: { marginLeft: "auto", fontSize: 14, opacity: 0.8 },
  ul: { marginTop: 8, marginBottom: 8, paddingLeft: 20 },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 8px",
    border: "1px solid",
    borderColor: "var(--border, #000)",
    background: "#e5e5e5",
    fontSize: 12
  },
  links: { display: "flex", gap: 8, marginTop: 8 }
};

function TechChips({ items }) {
  return (
    <div style={styles.chips}>
      {items.map((t) => (
        <span key={t} style={styles.chip} aria-label={`Tech: ${t}`}>
          {t}
        </span>
      ))}
    </div>
  );
}

function ExperienceItem({ exp }) {
  return (
    <div role="article" aria-label={`${exp.role} at ${exp.company}`}>
      <div style={styles.headerRow}>
        <div style={styles.role}>{exp.role}</div>
        <div style={styles.company}>@ {exp.company}</div>
        <div style={styles.timeframe}>{exp.timeframe}</div>
      </div>
      <ul style={styles.ul}>
        {exp.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <TechChips items={exp.tech} />
      {exp.links?.length ? (
        <div style={styles.links}>
          {exp.links.map((l) => (
            <Button key={l.href} onClick={() => window.open(l.href, "_blank")}>{l.label}</Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Experience() {
  return (
        <ScrollView style={{ width: "100%", height: "100%" }}>
          <div style={styles.container}>
          <h2 style={{ fontWeight: "bold", fontSize: 28, margin: "12px 0" }}>Work Experience 👨‍💻🏢</h2>
          <Separator />
            <p>
              My education laid the groundwork; these roles sharpened the tools. Below are the technical highlights and impact from
              recent work.
            </p>
            <Separator />
            <div style={{ display: "grid", gap: 24 }}>
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx}>
                  <ExperienceItem exp={exp} />
                  {idx < EXPERIENCES.length - 1 && (
                    <Separator style={{ marginTop: 16 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollView>
  );
}
