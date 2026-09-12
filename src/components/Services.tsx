import { Layers, ScanLine } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: ScanLine,
    title: "Operating Theatre Imaging Services",
    desc: "We provide high-precision vascular mapping and real-time fluoroscopic guidance to ensure safety and accuracy during minimally invasive heart and vascular interventions.",
    tag: "Walk-in & same-day",
  },
  {
    icon: Layers,
    title: "Cardiac Catheterisation Laboratory (Cath Lab)",
    desc: "We provide high-precision vascular mapping and real-time fluoroscopic guidance to ensure safety and accuracy during minimally invasive heart and vascular interventions",
    tag: "Rapid acquisition",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad bg-soft"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className="text-center mb-5">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Our Services
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="services-heading" className="section-title">
              Complete diagnostic imaging,{" "}
              <span className="text-gradient">under one roof</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-lede mx-auto">
              Whether you are facing a critical heart procedure or a complex
              surgery, our practice combines advanced imaging tech with the
              precise, reassuring care your family deserves.
            </p>
          </Reveal>
        </div>

        <div className="row g-4">
          {SERVICES.map((svc, i) => (
            <div className="col-sm-6 col-lg-4" key={svc.title}>
              <Reveal delay={(i % 3) * 110} className="h-100">
                <article className="card-lift service-card">
                  <span className="icon-tile" aria-hidden="true">
                    <svc.icon size={26} strokeWidth={2.1} />
                  </span>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <span className="svc-tag">{svc.tag}</span>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
