import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const SECTIONS = ["home", "about", "services", "founder", "contact"];

const LINKS: { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "founder", label: "Founder" },
  { id: "contact", label: "Contact Us" },
];

export const PHONE_DISPLAY = "+27 73 112 7351";
export const PHONE_HREF = "tel:+27731127351";

export default function Navbar() {
  const { activeId, scrolled } = useScrollSpy(SECTIONS);
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-custom ${scrolled ? "is-scrolled" : ""}`}
        aria-label="Primary navigation"
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="#home"
            onClick={close}
            aria-label="ST Chauke Radiographers Inc — back to top"
          >
            <span className="brand-text">
              <em>ST</em> Chauke Radiographers <em>Inc</em>
              <span className="brand-sub">Diagnostic Radiography</span>
            </span>
          </a>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-expanded={open}
            aria-controls="primaryNav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`collapse navbar-collapse ${open ? "show" : ""}`}
            id="primaryNav"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 py-3 py-lg-0">
              {LINKS.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    className={`nav-link ${activeId === link.id ? "active" : ""}`}
                    href={`#${link.id}`}
                    aria-current={activeId === link.id ? "true" : undefined}
                    onClick={close}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a className="btn-nav-call" href={PHONE_HREF} onClick={close}>
                  <Phone size={17} aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
