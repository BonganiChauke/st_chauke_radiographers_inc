import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "./Navbar";
import { cmp_inc, cmp_st, Company_Name, PR_Number } from "./Hero";
import { Email, MAPS_DIRECTIONS } from "./Contact";


export function BackToTop({ show }: { show: boolean }) {
  return (
    <button
      type="button"
      className={`back-to-top ${show ? "show" : ""}`}
      aria-label="Back to top of page"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
}

type FooterProps = {
  onOpenPrivacy: () => void;
};

export default function Footer({ onOpenPrivacy }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="visually-hidden">
        Footer
      </h2>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span
                className="brand-text brand-name"
                style={{
                  fontFamily: '"Sora", sans-serif',
                  fontWeight: 800,
                  fontSize: "1.2rem",
                }}
              >
                <span style={{ color: "#a78bfa" }}>{cmp_st}</span> Chauke
                Radiographers{" "}
                <span style={{ color: "#a78bfa" }}>{cmp_inc}</span>
              </span>
            </div>
            <p>
              An HPCSA-registered diagnostic radiography practice providing
              compassionate, accurate medical imaging.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#founder">Founder</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#services">
                  Cardiac Catheterisation Laboratory (Cath Lab)
                </a>
              </li>
              <li>
                <a href="#services">Operating Theatre Imaging Services</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h3>Contact</h3>
            <div className="footer-contact-item">
              <Phone size={18} aria-hidden="true" />
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:chaukesally1@gmail.com">{Email}</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={18} aria-hidden="true" />
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
              >
                16639 Umnyango St, Vosloorus, 1486
              </a>
            </div>
          </div>
        </div>

        <div className="footer-legal d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
          <span>
            © {year} {Company_Name} • HPCSA {PR_Number}{" "}
          </span>
          <span className="d-flex gap-3">
            <button type="button" onClick={onOpenPrivacy}>
              Privacy &amp; POPIA Statement
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
}
