"use client";
import { useState } from "react";
import { useLang } from "../context/LangContext";
import Image from "next/image";

type Cat = "solar" | "electrical" | "generators" | "maintenance";
type Filter = "all" | Cat;

/* Category assignments based on image content */
const photos: { file: string; cat: Cat; dir?: string }[] = [
  /* ── New project photos (2026) ───────────────────────── */
  { file: "solar-aerial-school-01.jpeg", cat: "solar" },
  { file: "solar-aerial-school-02.jpeg", cat: "solar" },
  { file: "solar-carport-01.jpeg", cat: "solar" },
  { file: "solar-carport-02.jpeg", cat: "solar" },
  { file: "solar-carport-03.jpeg", cat: "solar" },
  { file: "solar-rooftop-array.jpeg", cat: "solar" },
  { file: "solar-rooftop-carpark.jpeg", cat: "solar" },
  { file: "solar-rooftop-foundations.jpeg", cat: "solar" },
  { file: "solar-farm-01.jpeg", cat: "solar" },
  { file: "solar-farm-02.jpeg", cat: "solar" },
  { file: "solar-farm-03.jpeg", cat: "solar" },
  { file: "solar-desert-01.jpeg", cat: "solar" },
  { file: "solar-desert-02.jpeg", cat: "solar" },
  { file: "solar-desert-03.jpeg", cat: "solar" },
  { file: "solar-desert-04.jpeg", cat: "solar" },
  { file: "solar-desert-pump.jpeg", cat: "solar" },
  { file: "maintenance-coating-qa.jpeg", cat: "solar" },
  { file: "generators-engine-01.jpeg", cat: "generators" },
  /* ── Earlier project photos ──────────────────────────── */
  { file: "WhatsApp Image 2026-06-14 at 5.56.47 PM.jpeg", cat: "generators" },
  { file: "WhatsApp Image 2026-06-14 at 5.56.51 PM.jpeg", cat: "solar" },
  // 20
  { file: "WhatsApp Image 2026-06-14 at 5.56.54 PM.jpeg", cat: "solar" },
  { file: "WhatsApp Image 2026-06-14 at 5.56.55 PM.jpeg", cat: "generators" },
  { file: "WhatsApp Image 2026-06-14 at 5.56.56 PM.jpeg", cat: "electrical" },
  { file: "WhatsApp Image 2026-06-14 at 5.56.57 PM.jpeg", cat: "electrical" },
  {
    file: "WhatsApp Image 2026-06-14 at 5.56.57 PM (1).jpeg",
    cat: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-14 at 5.56.57 PM (2).jpeg",
    cat: "generators",
  },
  { file: "WhatsApp Image 2026-06-14 at 5.56.58 PM.jpeg", cat: "electrical" },
  { file: "WhatsApp Image 2026-06-14 at 5.56.59 PM.jpeg", cat: "electrical" },
  { file: "WhatsApp Image 2026-06-14 at 5.56.59 PM (1).jpeg", cat: "solar" },
  { file: "WhatsApp Image 2026-06-14 at 5.57.01 PM.jpeg", cat: "electrical" },
  // 30
  { file: "WhatsApp Image 2026-06-14 at 5.57.02 PM.jpeg", cat: "solar" },
  { file: "WhatsApp Image 2026-06-14 at 5.57.03 PM.jpeg", cat: "electrical" },
  {
    file: "WhatsApp Image 2026-06-14 at 5.57.03 PM (1).jpeg",
    cat: "electrical",
  },
  { file: "WhatsApp Image 2026-06-14 at 5.57.04 PM.jpeg", cat: "solar" },
  {
    file: "WhatsApp Image 2026-06-14 at 5.57.04 PM (1).jpeg",
    cat: "solar",
  },
  { file: "WhatsApp Image 2026-06-14 at 5.57.05 PM.jpeg", cat: "solar" },
  { file: "WhatsApp Image 2026-06-14 at 5.57.05 PM (1).jpeg", cat: "solar" },
  { file: "WhatsApp Image 2026-06-14 at 5.57.05 PM (2).jpeg", cat: "solar" },
  { file: "WhatsApp Image 2026-06-14 at 5.57.07 PM.jpeg", cat: "solar" },
  { file: "WhatsApp Image 2026-06-14 at 5.57.08 PM.jpeg", cat: "electrical" },
  {
    file: "WhatsApp Image 2026-06-14 at 5.57.08 PM (1).jpeg",
    cat: "solar",
  },
  {
    file: "WhatsApp Image 2026-06-14 at 5.57.08 PM (2).jpeg",
    cat: "solar",
  },
  {
    file: "WhatsApp Image 2026-06-14 at 5.57.08 PM (3).jpeg",
    cat: "solar",
  },
  { file: "WhatsApp Image 2026-06-14 at 5.57.09 PM.jpeg", cat: "solar" },
  /* ── Generator project photos (/public/generators) ────── */
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.26 AM.jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.26 AM (1).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.27 AM.jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.27 AM (1).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.27 AM (2).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.27 AM (3).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.27 AM (4).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.27 AM (5).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.28 AM.jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.28 AM (1).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.28 AM (2).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.28 AM (3).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.11.28 AM (4).jpeg",
    cat: "generators",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.43 AM.jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.43 AM (1).jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.43 AM (2).jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.43 AM (3).jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.43 AM (4).jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.43 AM (5).jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.44 AM.jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.44 AM (1).jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.44 AM (2).jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.44 AM (3).jpeg",
    cat: "electrical",
    dir: "generators",
  },
  {
    file: "WhatsApp Image 2026-06-19 at 12.12.44 AM (4).jpeg",
    cat: "electrical",
    dir: "generators",
  },
];

const badge: Record<Cat, string> = {
  solar: "bg-amber-500",
  electrical: "bg-blue-600",
  generators: "bg-emerald-600",
  maintenance: "bg-violet-600",
};

function imgSrc(file: string, dir = "docs") {
  return `/${dir}/${encodeURIComponent(file)}`;
}

export default function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.projects.all },
    { key: "solar", label: t.projects.solar },
    { key: "electrical", label: t.projects.electrical },
    { key: "generators", label: t.projects.generators },
    { key: "maintenance", label: t.projects.maintenance },
  ];

  const catLabel: Record<Cat, string> = {
    solar: t.projects.solar,
    electrical: t.projects.electrical,
    generators: t.projects.generators,
    maintenance: t.projects.maintenance,
  };

  const visible =
    active === "all" ? photos : photos.filter((p) => p.cat === active);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">
            {t.projects.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-body">
            {t.projects.title}
          </h2>
          <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === f.key
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-card text-faint border border-edge hover:border-primary hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {visible.map((p, i) => (
            <div
              key={`${p.file}-${i}`}
              className="group relative rounded-xl overflow-hidden aspect-square bg-card border border-edge"
            >
              <Image
                fill
                src={imgSrc(p.file, p.dir)}
                alt={catLabel[p.cat]}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Category badge */}
              <span
                className={`absolute top-2.5 start-2.5 text-xs font-bold text-white px-2.5 py-1 rounded-full ${badge[p.cat]}`}
              >
                {catLabel[p.cat]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
