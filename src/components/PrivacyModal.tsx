import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Company_Name } from "./Hero";
import { Email } from "./Contact";
import { PHONE_DISPLAY } from "./Navbar";

type PrivacyModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement;
      closeButtonRef.current?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
        if (lastFocused.current instanceof HTMLElement)
          lastFocused.current.focus();
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="privacy-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="privacy-dialog">
        <header>
          <h2 id="privacy-title" className="d-flex align-items-center gap-2">
            Privacy &amp; POPIA Statement
          </h2>
          <button
            type="button"
            ref={closeButtonRef}
            className="btn btn-ghost"
            style={{ minHeight: "44px", padding: "8px 14px" }}
            onClick={onClose}
            aria-label="Close privacy statement"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className="privacy-body">
          <p>
            {Company_Name} ("the practice") is committed to protecting your
            personal and health information in accordance with the{" "}
            <strong>
              Protection of Personal Information Act 4 of 2013 (POPIA)
            </strong>
            , the <strong>National Health Act 61 of 2003</strong>, and the
            ethical rules of the{" "}
            <strong>Health Professions Council of South Africa (HPCSA)</strong>.
          </p>

          <h3>1. Information we collect</h3>
          <ul>
            <li>
              Identity and contact details (name, phone number, email address).
            </li>
            <li>
              Medical aid details and referral information needed to provide
              imaging services.
            </li>
            <li>
              Clinical records, images and reports generated during your care.
            </li>
            <li>
              Website enquiry details submitted through the appointment form.
            </li>
          </ul>

          <h3>2. How your information is used</h3>
          <p>
            Your information is processed only to provide and report on
            diagnostic imaging, to arrange appointments, to submit claims to
            your medical aid, and to meet our legal and professional
            record-keeping obligations. We never sell personal information.
          </p>

          <h3>3. Storage and security</h3>
          <p>
            Records are stored on encrypted, access-controlled systems and
            physical files are kept in locked facilities. Only authorised staff
            involved in your care may access your information, and all staff
            sign confidentiality undertakings.
          </p>

          <h3>4. Retention</h3>
          <p>
            In line with the National Health Act and HPCSA guidelines,
            diagnostic imaging records are retained for a minimum of six years,
            and longer where the law requires (e.g. for minors, records are kept
            until the patient's 21st birthday).
          </p>

          <h3>5. Your rights</h3>
          <ul>
            <li>
              Request access to, or correction of, your personal information.
            </li>
            <li>Withdraw consent for non-essential processing at any time.</li>
            <li>
              Lodge a complaint with the Information Regulator of South Africa.
            </li>
          </ul>

          <h3>6. Our Information Officer</h3>
          <p>
            For privacy queries or to exercise your rights, contact our
            Information Officer at{" "}
            <a href="mailto:chaukesally1@gmail.com">{Email}</a> or{" "}
            <a href="{PhoneRef}">{PHONE_DISPLAY}</a>. The Information
            Regulator can be reached at{" "}
            <a href="malito:inforeg@justice.gov.za">inforeg@justice.gov.za</a>. 
          </p>

          <h3>7. Website accessibility</h3>
          <p>
            We aim to conform to the{" "}
            <strong>
              Web Content Accessibility Guidelines (WCAG) 2.2 level AA
            </strong>
            . If you experience any barrier on this website, please let us know
            so we can assist you directly.
          </p>
        </div>

        <footer>
          <button type="button" className="btn btn-gradient" onClick={onClose}>
            I have read this statement
          </button>
        </footer>
      </div>
    </div>
  );
}
