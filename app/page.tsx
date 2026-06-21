"use client";

import { useState } from "react";

const identityItems = [
  {
    title: "Systems",
    text: "Software engineering, research, prototypes, and the hidden structures that shape how things work.",
  },
  {
    title: "Signals",
    text: "Data, behaviour, health, language, and the invisible patterns waiting to be noticed.",
  },
  {
    title: "Light",
    text: "Photography, fragments, atmosphere, and moments suspended briefly before disappearing.",
  },
];

const systemLinks = [
  {
    label: "Publication",
    title: "Speech Recognition",
    subtitle: "COVID-19 Keywords Using Machine Learning",
    href: "https://ijsrcse.isroset.org/index.php/j/article/view/375",
  },
  {
    label: "Code",
    title: "GitHub",
    subtitle: "Code, experiments, prototypes and technical projects.",
    href: "https://github.com/amenytouihri",
  },
  {
    label: "Profile",
    title: "LinkedIn",
    subtitle: "Professional background, research interests and collaborations.",
    href: "https://www.linkedin.com/in/amani-touihri-a67a64179/",
  },
];

const projectGroups = {
  Signals: [
    {
      label: "Robotics",
      title: "Planar Parallel Robotic Arm",
      text: "Developed a dual-motor encoder-based control architecture with joint-level PID control, Python-Arduino communication, Jacobian-based inverse kinematics, and real-time trajectory validation.",
      href: "https://github.com/amenytouihri/RoboticArm",
    },
    {
      label: "RNA Sequencing",
      title: "Toxoplasmic RNA Sequencing",
      text: "Examined how Toxoplasma gondii infection affects gene expression across mouse blood and lung tissues, identifying differentially expressed genes and enriched Gene Ontology terms.",
      href: "https://github.com/amenytouihri/Toxoplasmic",
    },
    {
      label: "Genome Assembly",
      title: "Streptomyces Genomes",
      text: "Analysed three Streptomyces strains to compare secondary metabolite profiles and explore how Collinomycins and CDA compounds may relate to observed biological activity.",
      href: "https://github.com/amenytouihri/Streptomyces-Genomes",
    },
  ],
  Light: [
    {
      label: "Photography",
      title: "Fragments",
      text: "A collection of observed moments.",
      href: "",
    },
    {
      label: "Architecture",
      title: "Architecture",
      text: "Light, geometry, and urban spaces.",
      href: "",
    },
    {
      label: "Storytelling",
      title: "Visual Storytelling",
      text: "Photography as observation.",
      href: "",
    },
  ],
};

const fragments = [
  "/fragment-1.jpg",
  "/fragment-2.jpg",
  "/fragment-3.jpg",
  "/fragment-4.jpg",
  "/fragment-5.jpg",
  "/fragment-6.jpg",
  "/fragment-7.jpg",
  "/fragment-8.jpg",
  "/fragment-9.jpg",
  "/fragment-10.jpg",
  "/fragment-11.jpg",
  "/fragment-12.jpg",
  "/fragment-13.jpg",
  "/fragment-14.jpg",
  "/fragment-15.jpg",
];

export default function Home() {
  const [active, setActive] = useState(1);
  const activeTitle = identityItems[active].title;

  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#282828]">
      <section className="relative min-h-screen overflow-hidden">
  <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />
  <div className="absolute inset-0 bg-black/25" />
<div className="relative z-10 flex min-h-screen items-center justify-end px-8 md:px-20">
  <div className="w-full max-w-3xl text-right text-white">
<h1 className="serif text-[6rem] md:text-[9rem] font-light leading-none tracking-[0.08em] text-white/95">       AMENY
      </h1>

      <div className="mt-10">
<h2 className="serif mb-4 text-4xl font-light md:text-5xl text-white/85">          I am drawn to signals
        </h2>

<p className="serif mt-6 max-w-md ml-auto text-base md:text-lg leading-[1.6] text-white/70">     The ones hidden in data,
          carried through behaviour,

          or suspended briefly in light
          before disappearing.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="relative min-h-screen overflow-hidden bg-[url('/clouds.jpg')] bg-cover bg-center px-6 py-32 text-white">
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
          <div className="serif flex flex-col items-center justify-center gap-8 text-5xl font-light md:flex-row md:gap-10 md:text-6xl">
            {identityItems.map((item, index) => (
              <div key={item.title} className="flex items-center gap-10">
                <button
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`transition-all duration-500 ${
                    active === index
                      ? "opacity-100"
                      : "opacity-45 hover:opacity-80"
                  }`}
                >
                  {item.title}
                </button>

                {index < identityItems.length - 1 && (
                  <span className="hidden opacity-70 md:block">|</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 min-h-[90px]">
            <p className="sans mx-auto max-w-3xl text-lg font-light leading-8 md:text-xl">
              {identityItems[active].text}
            </p>
          </div>

          {activeTitle === "Systems" ? (
            <div className="mt-12 grid w-full gap-8 md:grid-cols-3">
              {systemLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[1.75rem] border border-white/20 bg-white/12 p-7 text-left backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:bg-white/25"
                >
                  <p className="sans mb-5 text-xs uppercase tracking-[0.28em] opacity-70">
                    {link.label}
                  </p>

                  <h3 className="serif text-3xl font-light leading-tight">
                    {link.title}
                  </h3>

                  <p className="sans mt-5 text-base font-light leading-7 opacity-85">
                    {link.subtitle}
                  </p>
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-12 grid w-full gap-8 md:grid-cols-3">
              {projectGroups[activeTitle as keyof typeof projectGroups].map(
                (project) => {
                  const CardContent = (
                    <>
                      <p className="sans mb-5 text-xs uppercase tracking-[0.28em] opacity-70">
                        {project.label}
                      </p>

                      <h3 className="serif mb-5 text-3xl font-light leading-tight">
                        {project.title}
                      </h3>

                      <p className="sans text-base font-light leading-7 opacity-85">
                        {project.text}
                      </p>
                    </>
                  );

                  return project.href ? (
                    <a
                      key={project.title}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[1.75rem] border border-white/20 bg-white/12 p-7 text-left backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:bg-white/25"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <article
                      key={project.title}
                      className="rounded-[1.75rem] border border-white/20 bg-white/12 p-7 text-left backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:bg-white/25"
                    >
                      {CardContent}
                    </article>
                  );
                }
              )}
            </div>
          )}

          <p className="sans mx-auto mt-16 max-w-4xl text-base font-light leading-8 opacity-85 md:text-lg">
            An exploration of systems, data, and the hidden structures that
            shape our world.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d8d8d2] py-0">
        <a
  href="/fragments"
  className="serif absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-7xl font-light tracking-[0.15em] text-white/90 transition hover:opacity-70 md:text-[8rem]"
  style={{
    textShadow:
      "0 2px 12px rgba(0,0,0,0.18), 0 0 30px rgba(0,0,0,0.15)",
  }}
>
  FRAGMENTS
</a>

        <div className="grid w-full grid-cols-2 md:grid-cols-5">
          {fragments.map((src) => (
            <div key={src} className="overflow-hidden">
              <div
                className="aspect-[4/5] bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('${src}')` }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f1ec] px-8 py-12">
  <div className="mx-auto max-w-5xl">
    <h2 className="serif mb-16 text-5xl font-light md:text-6xl">
      On Observation
    </h2>

    <div className="sans max-w-2xl text-[1.25rem] font-light leading-[2rem]">
      <div className="mb-10">
        <h3 className="text-3xl font-semibold">Ameny</h3>
        <p className="mt-2 italic text-black/50">(noun)</p>
      </div>

      <div className="mb-12 space-y-5">
        <p>From the Arabic Umniyah (أمنية):</p>
        <p className="serif text-4xl font-light leading-tight">
          a wish, a hope, an aspiration.
        </p>
        <p className="text-black/70">
          A possibility imagined before it takes shape.
        </p>
      </div>

      <div className="mb-12 space-y-4">
        <p>I am drawn to systems, signals, and light.</p>
        <p>Sometimes that means building software.</p>
        <p>Sometimes it means studying biological data.</p>
        <p>Sometimes it means photographing a fleeting moment.</p>
      </div>

      <p className="mb-12">
        Whether studying biological systems, building digital tools, or
        photographing a fleeting moment, I am interested in the quiet structures
        that shape experience.
      </p>

      <p className="serif text-5xl font-light">
        Systems. Signals. Light.
      </p>
    </div>
  </div>
</section>

      <section className="relative min-h-[70vh] overflow-hidden bg-[url('/hero.jpg')] bg-cover bg-center px-8 py-32 text-white">
  <div className="absolute inset-0 bg-black/45" />

  <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-5xl flex-col justify-center">
    <p className="sans mb-6 text-xs uppercase tracking-[0.35em] opacity-70">
      Contact
    </p>

    <h2 className="serif max-w-3xl text-5xl font-light leading-tight md:text-7xl">
      For collaborations, research, software projects, or visual work.
    </h2>

    <div className="sans mt-12 flex flex-col gap-5 text-base font-light md:flex-row md:items-center md:gap-10">
      <a
        href="mailto:amenytouihri@gmail.com"
        className="transition hover:opacity-70"
      >
        ameny [at] gmail.com
      </a>

      <a
        href="https://www.linkedin.com/in/amani-touihri-a67a64179/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:opacity-70"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/amenytouihri"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:opacity-70"
      >
        GitHub
      </a>

      <a
        href="https://www.instagram.com/ameny_touihri/"
        className="transition hover:opacity-70"
      >
        Instagram
      </a>
    </div>
  </div>
</section>
    </main>
  );
}
