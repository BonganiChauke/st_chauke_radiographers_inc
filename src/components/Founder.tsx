import { Award, GraduationCap, Globe2, Quote } from "lucide-react";
import Reveal from "./Reveal";

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "B.Rad (Hons) Diagnostic Radiography",
    sub: "University of Johannesburg",
  },
  {
    icon: Award,
    title: "HPCSA Registered — Radiography & Clinical Technology",
    sub: "Pr No: 1093339 • 10+ years clinical practice.",
  },
  {
    icon: Globe2,
    title: "Community outreach lead",
    sub: "Mobile breast-screening drives across Gauteng.",
  },
];

export default function Founder() {
  return (
    <section
      id="founder"
      className="section-pad bg-purple-tint"
      aria-labelledby="founder-heading"
    >
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 order-lg-2">
            {/* <Reveal direction="right">
              <div className="founder-photo-frame mx-auto mx-lg-0">
                <img
                  src="/images/founder.jpg"
                  width={700}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  alt="Portrait of Founder and Chief Radiographer of Radiographers Inc"
                />
              </div>
            </Reveal> */}
          </div>

          <div className="col-lg-7 order-lg-1">
            <Reveal>
              <span className="eyebrow">
                <span className="dot" aria-hidden="true" />
                Meet Our Founder
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 id="founder-heading" className="section-title">
                Sally Tsakane Chauke —{" "}
                <span className="text-gradient">
                  Founder &amp; Chief Radiographer
                </span>
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p>
                <strong>Sally Chauke</strong> founded ST Chauke Radiographers
                Inc with over 10 years working experience across public hospitals and private
                practices, Sally founded ST Chauke
                Radiographers Inc to bridge the gap between advanced imaging and
                community-based, compassionate care.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <blockquote className="founder-quote">
                <Quote size={20} aria-hidden="true" className="mb-2 d-block" />A
                scan is never just an image. It is someone's mother, someone's
                child, someone's answer. We treat every patient the way we would
                want our own family treated.
                <footer className="mt-2 fw-bold fst-normal">
                  — Sally Chauke
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={310}>
              <div>
                {CREDENTIALS.map((c) => (
                  <div className="credential" key={c.title}>
                    <c.icon size={21} aria-hidden="true" />
                    <div>
                      <strong>{c.title}</strong>
                      <span>{c.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
