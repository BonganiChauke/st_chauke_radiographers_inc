// import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  CircleCheck,
  Eye,
  HeartHandshake,
  Lock,
  Users2,
} from "lucide-react";
import Reveal from "./Reveal";
import { Company_Name, PR_Number } from "./Hero";

// const STATS = [
//   { end: 18, suffix: "+", label: "Years serving Joburg" },
//   { end: 120, suffix: "k+", label: "Patients imaged" },
//   { end: 6, suffix: "", label: "Imaging modalities" },
//   { end: 24, suffix: "h", label: "Report turnaround" },
// ];

// function Counter({ end, suffix }: { end: number; suffix: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         io.disconnect();
//         const duration = 1400;
//         const start = performance.now();
//         const tick = (now: number) => {
//           const p = Math.min((now - start) / duration, 1);
//           setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
//           if (p < 1) requestAnimationFrame(tick);
//         };
//         requestAnimationFrame(tick);
//       },
//       { threshold: 0.4 },
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [end]);

//   return (
//     <span ref={ref}>
//       {value}
//       {suffix}
//     </span>
//   );
// }

const VALUES = [
  { icon: HeartHandshake, label: "Ubuntu & compassion" },
  { icon: Eye, label: "Clinical accuracy" },
  { icon: Users2, label: "Patient dignity" },
  { icon: Lock, label: "POPIA confidentiality" },
];

const PROMISES = [
  {
    title: "Ethical, evidence-based care",
    text: "We practise within the ethical guidelines of the Health Professions Council of South Africa (HPCSA) and only image when clinically justified.",
  },
  {
    title: "Your information, protected",
    text: "Patient records and images are stored securely and processed strictly in line with the Protection of Personal Information Act (POPIA).",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Reveal direction="left">
              <div className="position-relative me-lg-4">
                {/* <div className="about-photo">
                  <img
                    src="/images/about-mri.jpg"
                    width={1000}
                    height={775}
                    loading="lazy"
                    decoding="async"
                    alt="The modern MRI suite at Radiographers Inc with purple and blue accent lighting"
                  />
                </div> */}
                {/* <div className="exp-chip" aria-hidden="true">
                  <strong>2006</strong>
                  <span>Established in Parktown</span>
                </div> */}
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6 mt-2">
            <Reveal delay={100}>
              <span className="eyebrow">
                <span className="dot" aria-hidden="true" />
                About Us
              </span>
            </Reveal>
            <Reveal delay={160}>
              <h2 id="about-heading" className="section-title">
                A practice built on{" "}
                <span className="text-gradient">trust and precision</span>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p>
                 <strong>{Company_Name}</strong>  has provided Johannesburg
                families, doctors and hospitals with dependable diagnostic
                imaging. Our radiographers are registered with the{" "}
                <strong>
                  Health Professions Council of South Africa (HPCSA)
                </strong>{" "}
                and pursue ongoing education so every scan is performed safely,
                gently and to the highest clinical standard.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div role="list" aria-label="Our values">
                {VALUES.map((v) => (
                  <span className="value-chip" role="listitem" key={v.label}>
                    <v.icon size={16} aria-hidden="true" />
                    {v.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={340}>
              <ul className="check-list">
                {PROMISES.map((p) => (
                  <li key={p.title}>
                    <CircleCheck size={20} aria-hidden="true" />
                    <span>
                      <strong>{p.title}.</strong> {p.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={160}>
          <p
            className="text-center mt-4 mb-0 d-flex align-items-center justify-content-center gap-2 flex-wrap"
            style={{ fontSize: "0.93rem", marginTop: "2rem" }}
          >
            <BadgeCheck size={18} className="text-success" aria-hidden="true" />
            Registered with the Professional Board for Radiography and Clinical
            Technology. HPCSA - {PR_Number}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
