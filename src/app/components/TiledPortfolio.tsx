"use client";

import { CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import portfolioData from "@/data/portfolio.json";
import { makeBoldWords } from "@/app/utils/stringUtils";
import Tile from "@/app/components/Tile";

const { colors, personal, projects, contact } = portfolioData;

/**
 * Intro sequence:
 * intro   -> the photo is alone, centered in the frame
 * shrink  -> the photo gets slightly smaller
 * grow    -> the photo moves to its slot while the tiles grow from behind it
 * content -> the content of every tile fades in
 */
type Phase = "intro" | "shrink" | "grow" | "content";

const TIMELINE: { phase: Phase; at: number }[] = [
  { phase: "shrink", at: 600 },
  { phase: "grow", at: 1000 },
  { phase: "content", at: 1700 },
];
// On replay the photo first flies back to the center, give it time to land
const REPLAY_OFFSET = 500;

const PHOTO_TRANSITION = { duration: 0.6, ease: [0.65, 0, 0.35, 1] as const };

function randomThemeIndex(current?: number) {
  if (current === undefined) return Math.floor(Math.random() * colors.length);
  // never pick the current theme again
  const index = Math.floor(Math.random() * (colors.length - 1));
  return index >= current ? index + 1 : index;
}

function ProfilePhoto({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <motion.div
      layoutId="profile-photo"
      transition={PHOTO_TRANSITION}
      style={{ borderRadius: 24, ...style }}
      className={`relative z-10 overflow-hidden ${className}`}
    >
      <Image src={personal.profilePicture} alt={personal.name} fill priority sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
    </motion.div>
  );
}

export default function TiledPortfolio() {
  const reduceMotion = useReducedMotion();
  // Picked on the client: with a static export a server-side pick would be frozen at build time
  const [themeIndex, setThemeIndex] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>("intro");
  const [runId, setRunId] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const slotRef = useRef<HTMLDivElement>(null);
  const [slotRatio, setSlotRatio] = useState<number | null>(null);

  const ready = themeIndex !== null;

  useEffect(() => {
    setThemeIndex(randomThemeIndex());
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (reduceMotion) {
      setPhase("content");
      return;
    }
    setPhase("intro");
    const offset = runId === 0 ? 0 : REPLAY_OFFSET;
    const timers = TIMELINE.map(({ phase, at }) => setTimeout(() => setPhase(phase), at + offset));
    return () => timers.forEach(clearTimeout);
  }, [ready, runId, reduceMotion]);

  // The centered photo keeps the slot's aspect ratio, so flying into the grid is a uniform scale (no stretched face).
  // Measured in a layout effect so the ratio is known before the first paint, then kept up to date on resize.
  useLayoutEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;
    const measure = () => {
      const { width, height } = slot.getBoundingClientRect();
      if (width > 0 && height > 0) setSlotRatio(width / height);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slot);
    return () => observer.disconnect();
  }, [ready]);

  if (!ready) return <div className="h-screen" />;

  const color = colors[themeIndex];
  const photoPlaced = phase === "grow" || phase === "content";
  const tileState = { revealed: photoPlaced, contentVisible: phase === "content" };
  const darkTile = { backgroundColor: color.dark, color: color.secondary };

  const email = contact.find(item => item.type === "email");
  const links = contact.filter(item => item.type !== "phone");
  const project = projects[activeProject];

  const replay = () => {
    setThemeIndex(current => randomThemeIndex(current ?? undefined));
    setRunId(id => id + 1);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div style={{ backgroundColor: color.secondary }} className="min-h-screen lg:h-screen flex flex-col items-center justify-center p-4 lg:p-8 transition-colors duration-500">
        <div style={{ backgroundColor: color.primary }} className="relative w-full max-w-xl lg:max-w-none lg:w-5/6 lg:h-[min(100%,max(83.333%,700px))] rounded-3xl p-3 lg:p-5 flex flex-col transition-colors duration-500">
          <Tile {...tileState} origin="center" delay={0.1} style={darkTile} className="h-16 lg:h-24 shrink-0"
                innerClassName="flex items-center justify-between text-lg lg:text-3xl font-clash-regular px-4 lg:px-6">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ChevronLeftIcon className="w-4 h-4" />
              <span className="text-base lg:text-xl">Retour</span>
            </Link>
            <div className="flex-1 min-w-0 truncate text-center">
              {personal.name}
            </div>
            <div className="w-16 lg:w-20"></div>
          </Tile>
          <div className="flex flex-col lg:flex-row lg:flex-1 lg:min-h-0 w-full mt-3 lg:mt-5 gap-3 lg:gap-5">
            <div className="w-full lg:w-2/3 lg:h-full flex flex-col gap-3 lg:gap-5">
              <div className="w-full lg:flex-1 flex flex-col lg:flex-row gap-3 lg:gap-5">
                <Tile {...tileState} origin="right" style={darkTile} className="lg:w-4/6"
                      innerClassName="flex flex-col justify-between gap-4 lg:gap-0 p-5">
                  <div className="flex w-full justify-end">
                    <button type="button" onClick={replay} aria-label="Changer de thème" title="Changer de thème"
                            className="hover:cursor-pointer hover:scale-110 transition-transform">
                      <svg className='animate-slower-spin size-14 lg:size-[67pt]' version="1.0" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="67pt" height="67pt" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                           stroke="none">
                          <path d="M575 1720 l-410 -238 -3 -489 -2 -488 407 -235 c243 -140 417 -235 432 -235 15 0 194 97 433 235 l408 235 0 486 0 486 -412 239 c-226 132 -418 240 -427 241 -9 1 -200 -106 -426 -237z m385 -30 l0 -160 -37 0 c-49 0 -396 -18 -493 -25 -54 -5 -72 -3 -64 5 12 12 575 338 587 339 4 1 7 -71 7 -159z m386 -10 c153 -89 283 -166 289 -171 6 -6 -18 -8 -70 -4 -122 8 -444 25 -487 25 l-38 0 0 161 c0 132 2 160 14 156 7 -3 139 -78 292 -167z m-430 -233 c5 -14 -376 -679 -392 -684 -10 -3 -277 648 -268 656 3 3 148 13 322 22 174 9 321 17 325 18 4 0 10 -5 13 -12z m566 -11 c142 -6 260 -14 262 -17 9 -8 -258 -659 -269 -656 -15 5 -396 669 -392 682 3 7 29 10 73 7 38 -2 185 -9 326 -16z m-273 -375 c111 -191 201 -351 201 -355 0 -3 -185 -6 -411 -6 -387 0 -411 1 -405 18 4 9 80 143 168 297 229 397 228 395 237 395 5 0 99 -157 210 -349z m-859 -91 c61 -153 109 -283 106 -288 -6 -10 -198 -92 -215 -92 -8 0 -11 104 -11 330 0 182 2 330 4 330 2 0 54 -126 116 -280z m1415 -378 c-8 -8 -225 82 -225 93 0 6 51 136 112 290 l113 280 3 -329 c1 -181 0 -331 -3 -334z m-375 18 c0 -13 -379 -480 -390 -480 -11 0 -390 467 -390 480 0 7 130 10 390 10 260 0 390 -3 390 -10z m-721 -201 c90 -110 161 -202 159 -204 -2 -1 -124 67 -271 152 -185 107 -265 159 -258 166 11 11 179 84 197 86 6 1 84 -89 173 -200z m929 162 c108 -44 122 -55 96 -69 -11 -6 -133 -76 -272 -156 -140 -80 -252 -142 -250 -136 5 16 318 400 326 400 4 0 49 -17 100 -39z"/>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <p className="text-2xl sm:text-3xl min-[90rem]:text-4xl font-clash-regular leading-snug">
                    {makeBoldWords(
                      personal.shortDescription,
                      ["FullStack", "React.js", "Java Spring"]
                    )}
                  </p>
                </Tile>
                <div ref={slotRef} className="w-full aspect-[4/5] max-h-[65vh] lg:aspect-auto lg:max-h-none lg:w-2/6">
                  {photoPlaced && <ProfilePhoto className="h-full w-full" />}
                </div>
              </div>
              <div className="w-full lg:min-h-0 flex flex-col lg:flex-row gap-3 lg:gap-5">
                <Tile {...tileState} origin="top" delay={0.15} style={darkTile} className="lg:w-3/5"
                      innerClassName="flex flex-col p-5 overflow-y-auto">
                  <div className="mt-auto space-y-2 text-[15px] lg:text-sm min-[85rem]:text-[15px] 2xl:text-[17px] font-clash-regular leading-snug">
                    {personal.description.map(({ paragraph }) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </Tile>
                <Tile {...tileState} origin="top" delay={0.1} style={{ backgroundColor: color.secondary, color: color.dark }}
                      className="min-h-48 lg:min-h-0 lg:w-2/5">
                  <a href={email?.url} className="@container group h-full w-full flex flex-col justify-between p-5">
                    <div className="flex flex-col gap-2">
                      <ArrowUpRightIcon className="self-end w-7 h-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      {/* 7.5cqw keeps this address on one line across the tile width, revisit if the email gets longer */}
                      <span className="text-[min(7.5cqw,1.75rem)] font-clash-regular whitespace-nowrap overflow-hidden text-ellipsis">{email?.subtitle}</span>
                    </div>
                    <span className="text-4xl font-clash-medium">Me contacter</span>
                  </a>
                </Tile>
              </div>
            </div>
            <div className="w-full lg:w-1/3 lg:h-full flex flex-col gap-3 lg:gap-5">
              <Tile {...tileState} origin="left" delay={0.05} style={darkTile} className="w-full lg:h-10/12"
                    innerClassName="flex flex-col gap-4 p-5 overflow-y-auto">
                <h2 className="text-2xl font-clash-medium">Projets</h2>
                <div style={{ backgroundColor: color.primary }} className="relative w-full aspect-video lg:aspect-auto lg:flex-1 lg:min-h-24 rounded-2xl overflow-hidden transition-colors duration-500">
                  <motion.div key={project.screenshot} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0">
                    <Image src={project.screenshot} alt={project.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-top" />
                  </motion.div>
                </div>
                <ul className="flex flex-col">
                  {projects.map((item, index) => (
                    <li key={item.title} style={{ borderColor: color.primary }} className="border-t transition-colors duration-500">
                      <a href={item.githubUrl} target="_blank" rel="noopener noreferrer"
                         onMouseEnter={() => setActiveProject(index)} onFocus={() => setActiveProject(index)}
                         className={`flex flex-col gap-1 py-2.5 transition-opacity ${index === activeProject ? "opacity-100" : "opacity-60"}`}>
                        <span className="flex items-center justify-between text-xl font-clash-regular">
                          {item.title}
                          <ArrowUpRightIcon className="w-5 h-5" />
                        </span>
                        <span className="text-xs truncate">{item.technologies.join(" · ")}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Tile>
              <Tile {...tileState} origin="left" delay={0.2} style={darkTile} className="w-full lg:h-2/12"
                    innerClassName="grid grid-cols-2 justify-items-center gap-y-3 p-5 lg:flex lg:items-center lg:justify-around lg:py-0 text-lg min-[90rem]:text-xl font-clash-regular">
                {links.map(link => (
                  <a key={link.type} href={link.url} className="hover:opacity-70 transition-opacity"
                     {...(link.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {link.label}
                  </a>
                ))}
              </Tile>
            </div>
          </div>
          {!photoPlaced && slotRatio !== null && (
            // fixed on mobile: the page is taller than the screen, the photo must start centered on the screen
            <div className="fixed lg:absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <ProfilePhoto
                style={{
                  aspectRatio: slotRatio,
                  // capped by the screen width so the photo never overflows a phone screen
                  height: phase === "intro" ? `min(60%, ${85 / slotRatio}vw)` : `min(50%, ${70 / slotRatio}vw)`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}
