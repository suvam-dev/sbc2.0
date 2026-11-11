"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, MapPin, Plus } from "lucide-react";
import { DEMO_DAY_MILESTONES, DEMO_DAY_PLAN } from "@/data/demo-day";
import { DEMO_DAY_AGENDA, PROGRAMME, VENTURE_TRACKS } from "@/data/programme";
import "./DemoDayTimeline.css";

const ease = [0.22, 1, 0.36, 1] as const;
const route = "M 140 36 C 265 36 295 68 420 68 S 575 36 700 36 S 855 68 980 68";

export default function DemoDayTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(3);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 65%"],
  });
  const routeProgress = useTransform(scrollYProgress, [0.12, 0.72], [0, 1]);
  const starRotation = useTransform(scrollYProgress, [0, 1], [-15, 50]);

  useEffect(() => {
    // Expanding a milestone moves the existing GSAP sections below it.
    // Refresh their scroll positions once the panel has finished resizing.
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), reduceMotion ? 0 : 500);
    return () => window.clearTimeout(refreshTimer);
  }, [active, reduceMotion]);

  const focusMilestone = (index: number) => {
    setActive(index);
    buttonRefs.current[index]?.focus({ preventScroll: true });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (index + 1) % DEMO_DAY_MILESTONES.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (index + DEMO_DAY_MILESTONES.length - 1) % DEMO_DAY_MILESTONES.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = DEMO_DAY_MILESTONES.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    focusMilestone(next);
  };

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="forge-section"
      aria-labelledby="forge-title"
    >
      <div className="forge-container">
        <div className="forge-masthead">
          <span>SBC <span aria-hidden="true">×</span> KGP Forge</span>
          <span>Demo Day 2027 <span className="forge-edition-dot" aria-hidden="true" /> The journey</span>
        </div>

        <motion.div
          className="forge-intro"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease }}
        >
          <div>
            <p className="forge-eyebrow">Engineering ideas. Building enterprises.</p>
            <h2 id="forge-title" className="font-display forge-title">
              The road to<br /><span>Demo Day.</span>
            </h2>
          </div>
          <div className="forge-intro-aside">
            <motion.div
              className="forge-star"
              aria-hidden="true"
              style={{ rotate: reduceMotion ? 0 : starRotation }}
            >
              <svg viewBox="0 0 80 80" fill="none">
                <path d="M40 1L47 26L68 12L54 33L79 40L54 47L68 68L47 54L40 79L33 54L12 68L26 47L1 40L26 33L12 12L33 26Z" fill="currentColor" />
                <circle cx="40" cy="40" r="8" fill="var(--ken-cream)" />
              </svg>
            </motion.div>
            <p>
              Forge your startup with expert mentorship, meaningful connections
              and a stage for your next big step.
            </p>
            <a href="#forge-milestones" className="forge-explore-link">
              Explore the journey <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <div className="forge-timeline-caption" id="forge-milestones">
          <p><span className="forge-caption-mark" aria-hidden="true">+</span> Four milestones. One ambition.</p>
          <p id="forge-instructions">Select a point to unfold the details <ArrowDown size={13} aria-hidden="true" /></p>
        </div>

        <div className="forge-track">
          <motion.div
            className="forge-mobile-route"
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : routeProgress }}
          />
          <svg className="forge-route" viewBox="0 0 1120 112" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path d={route} stroke="var(--ken-oxblood)" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
            <motion.path
              d={route}
              stroke="var(--ken-oxblood)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: reduceMotion ? 1 : routeProgress }}
            />
          </svg>

          <ol className="forge-milestones" aria-describedby="forge-instructions">
            {DEMO_DAY_MILESTONES.map((milestone, index) => {
              const isOpen = active === index;
              return (
                <li
                  key={milestone.id}
                  className="forge-milestone"
                  style={{ "--milestone-column": index + 1, "--milestone-offset": index % 2 ? "32px" : "0px" } as CSSProperties}
                >
                  <motion.h3
                    className="forge-step-heading"
                    initial={{ y: reduceMotion ? 0 : 16 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : index * 0.07, ease }}
                  >
                    <button
                      type="button"
                      id={`forge-trigger-${milestone.id}`}
                      ref={(element) => { buttonRefs.current[index] = element; }}
                      className={`forge-stop${isOpen ? " is-open" : ""}`}
                      aria-expanded={isOpen}
                      aria-controls={`forge-detail-${milestone.id}`}
                      onClick={() => setActive(isOpen ? null : index)}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                    >
                      <span className="forge-node" aria-hidden="true">
                        <span className="forge-node-orbit" />
                        <span className="forge-node-number">{milestone.number}</span>
                        <ArrowUpRight className="forge-node-arrow" size={23} />
                      </span>
                      <span className="forge-stop-copy">
                        {milestone.dateTime ? (
                          <time className="forge-date" dateTime={milestone.dateTime}>{milestone.date}</time>
                        ) : (
                          <span className="forge-date">{milestone.date}</span>
                        )}
                        <span className="forge-stop-title">{milestone.title}</span>
                        <span className="forge-stop-action" aria-hidden="true">
                          {isOpen ? "Close details" : "Explore"}<Plus size={14} />
                        </span>
                      </span>
                    </button>
                  </motion.h3>

                  <motion.div
                    id={`forge-detail-${milestone.id}`}
                    className="forge-detail-shell"
                    role="region"
                    aria-labelledby={`forge-trigger-${milestone.id}`}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
                  >
                    <div className="forge-detail">
                      <div className="forge-detail-number" aria-hidden="true">{milestone.number}</div>
                      <motion.div
                        className="forge-detail-story"
                        initial={false}
                        animate={{ y: isOpen ? 0 : 12 }}
                        transition={{ duration: reduceMotion ? 0 : 0.4, ease }}
                      >
                        <p className="forge-eyebrow">{milestone.eyebrow}</p>
                        <h4>{milestone.headline}</h4>
                        <p className="forge-description">{milestone.description}</p>
                        <a className="forge-detail-link" href={milestone.link.href}>
                          {milestone.link.label}<ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      </motion.div>
                      <ul className="forge-takeaways">
                        {milestone.takeaways.map((item) => (
                          <li key={item.title}>
                            <Check size={14} aria-hidden="true" />
                            <div><strong>{item.title}</strong><span>{item.detail}</span></div>
                          </li>
                        ))}
                      </ul>
                      <div className="forge-detail-navigation" aria-label={`${milestone.title} navigation`}>
                        <span>Milestone {milestone.number} / 04</span>
                        <div>
                          <button type="button" disabled={index === 0} aria-label="Previous milestone" onClick={() => focusMilestone(index - 1)}>
                            <ArrowLeft size={16} aria-hidden="true" />
                          </button>
                          <button type="button" disabled={index === 3} aria-label="Next milestone" onClick={() => focusMilestone(index + 1)}>
                            <ArrowRight size={16} aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="forge-schedule-note">
          Programme days are relative to the open call. Demo Day is planned for {PROGRAMME.dateWindow};
          exact calendar dates will be announced.
        </p>

        <div className="forge-showcase">
          <div className="forge-showcase-label">
            <p className="forge-eyebrow">2027 showcase targets</p>
            <h3>Where ventures meet opportunity</h3>
            <p><MapPin size={14} aria-hidden="true" /><span>Venue<br />{DEMO_DAY_PLAN.venue}</span></p>
          </div>
          <dl className="forge-targets">
            {DEMO_DAY_PLAN.targets.map((target) => (
              <div key={target.label}>
                <dt>{target.label}</dt>
                <dd>{target.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="venture-tracks" className="forge-programme-block">
          <p className="forge-eyebrow">Four venture tracks</p>
          <h3>Engineering with a market in mind.</h3>
          <p className="forge-programme-intro">15 flagship pitch slots across four areas of innovation. Figures below are cohort targets.</p>
          <div className="forge-track-grid">
            {VENTURE_TRACKS.map((track, index) => (
              <article className="forge-venture-card" key={track.name}>
                <span className="forge-track-index">0{index + 1} / {track.target} pitch slots</span>
                <h4>{track.name}</h4>
                <p>{track.focus}</p>
              </article>
            ))}
          </div>
          <div className="forge-gallery">
            <span className="forge-eyebrow">Technology-to-Market Gallery · 30 exhibits</span>
            <p>Faculty IP, working prototypes and MSME-ready technologies meet potential licensees,
              industry adopters and manufacturing partners. Faculty technologies can participate
              without an incorporated startup.</p>
          </div>
        </div>

        <div id="event-agenda" className="forge-programme-block">
          <div className="forge-agenda-heading">
            <div>
              <p className="forge-eyebrow">Demo Day programme · IST</p>
              <h3>A day built for meaningful connections.</h3>
            </div>
            <p className="forge-pitch-format"><strong>{PROGRAMME.pitchMinutes} min</strong> pitch<br /><strong>{PROGRAMME.questionsMinutes} min</strong> Q&amp;A</p>
          </div>
          <ol className="forge-agenda">
            {DEMO_DAY_AGENDA.map((item) => (
              <li key={item.time}>
                <span className="forge-agenda-time">{item.time}</span>
                <span>{item.session}</span>
              </li>
            ))}
          </ol>
          <p className="forge-schedule-note">Programme timings are indicative; the final agenda will be shared before the event.</p>
        </div>

        <div className="forge-beyond bg-oxblood-grain">
          <div>
            <p className="forge-eyebrow">The journey continues · 90-day follow-through</p>
            <h3>Support beyond the spotlight.</h3>
            <p>From Days 102–120 into 90-day commercialisation follow-through: advance pilot and
              licensing discussions, explore term sheets and incubation, and track your next milestones.</p>
          </div>
          <a href="#contact">Build what comes next <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
