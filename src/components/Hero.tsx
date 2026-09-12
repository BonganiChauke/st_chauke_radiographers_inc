import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "./Navbar";

// variables
export const PR_Number = "Pr No: 1093339";
export const Company_Name = "ST Chauke Radiographers Inc";
export const cmp_st = "ST";
export const cmp_inc = "Inc";
export const trading_hours = "— Mon–Fri, 07:00–16:00";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="blob blob-purple" aria-hidden="true" />
      <div className="blob blob-blue" aria-hidden="true" />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Reveal>
              <span className="hero-badge">
                <span className="pulse" aria-hidden="true" />
                {PR_Number} — HPCSA registered practice
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 id="hero-heading">Advanced imaging</h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="hero-lede">
                <strong> ST Chauke Radiographers Inc </strong> delivers
                accurate, compassionate diagnostic radiography with clarity in
                every image, care in every moment.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-gradient" href="#contact">
                  <CalendarCheck size={19} aria-hidden="true" />
                  Book an Appointment
                </a>
                <a className="btn btn-ghost" href="#services">
                  Explore Our Services
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            {/* <Reveal delay={340}>
              <ul className="hero-trust">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Same-day X-ray reports
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Medical aid claims handled
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Wheelchair accessible
                </li>
              </ul>
            </Reveal> */}

            <Reveal delay={410}>
              <p className="mt-4 mb-0" style={{ fontSize: "0.95rem" }}>
                Prefer to call?{" "}
                <a href={PHONE_HREF} className="fw-semibold">
                  {PHONE_DISPLAY}
                </a>{" "}
                {trading_hours}
              </p>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal direction="right" delay={200}>
              <div className="hero-media">
                {/* <div className="photo-frame">
                  <img
                    src="/images/hero-radiographer.jpg"
                    width={1000}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    alt="A radiographer of Radiographers Inc gently positioning a smiling patient next to a modern digital X-ray machine"
                  />
                </div> */}

                <div className="float-card fc-1">
                  <span className="fc-icon" aria-hidden="true">
                    <BadgeCheck size={22} />
                  </span>
                  <span>
                    <strong>10+ Years</strong>
                    <span>of working experience</span>
                  </span>
                </div>

                <div className="float-card fc-2">
                  <span className="fc-icon" aria-hidden="true">
                    <ShieldCheck size={22} />
                  </span>
                  <span>
                    <strong>HPCSA Registered</strong>
                    <span>Radiography &amp; Clinical Technology</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
