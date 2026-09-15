import { Company_Name } from "./Hero";
import { Email } from "./Contact";
import { PHONE_DISPLAY } from "./Navbar";

export default function Privacy() {
  return (
    <section
      id="privacy"
      className="section-pad bg-soft"
      aria-labelledby="privacy-title"
    >
      <div className="container">
        <div className="ri-reveal mx-auto" style={{ maxWidth: "860px" }}>
          {/* title */}
          <h2 id="privacy-title" className="Brush Script MT">
            Privacy &amp; POPIA Statement
          </h2>
          {/* intro text */}
          <p className="text-muted">
            {Company_Name} ("the practice") is committed to protecting your
            personal and health information in accordance with the{" "}
            <strong>
              Protection of Personal Information Act 4 of 2013 (POPIA)
            </strong>
            , the <strong>National Health Act 61 of 2003</strong>, and the
            ethical rules of the{" "}
            <strong>Health Professions Council of South Africa (HPCSA)</strong>.
          </p>

          {/* details */}
          <div className="ri-card p-4 privacy-body">
            {/* 1 */}
            <h3 className="h6 mt-4">1. Information we collect</h3>
            <ul className="text-muted small">
              <li>
                Identity and contact details (name, phone number, email
                address).
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

            {/* 2 */}
            <h3 className="h6 mt-4">2. How your information is used</h3>
            <p className="text-muted small">
              Your information is processed only to provide and report on
              diagnostic imaging, to arrange appointments, to submit claims to
              your medical aid, and to meet our legal and professional
              record-keeping obligations. We never sell personal information.
            </p>

            {/* 3 */}
            <h3 className="h6 mt-4">3. Storage and security</h3>
            <p className="text-muted small">
              Records are stored on encrypted, access-controlled systems and
              physical files are kept in locked facilities. Only authorised
              staff involved in your care may access your information, and all
              staff sign confidentiality undertakings.
            </p>

            {/* 4 */}
            <h3 className="h6 mt-4">4. Retention</h3>
            <p className="text-muted small">
              In line with the National Health Act and HPCSA guidelines,
              diagnostic imaging records are retained for a minimum of six
              years, and longer where the law requires (e.g. for minors, records
              are kept until the patient's 21st birthday).
            </p>

            {/* 5 */}
            <h3 className="h6 mt-4">5. Your rights</h3>
            <ul className="text-muted small">
              <li>
                Request access to, or correction of, your personal information.
              </li>
              <li>
                Withdraw consent for non-essential processing at any time.
              </li>
              <li>
                Lodge a complaint with the Information Regulator of South
                Africa.
              </li>
            </ul>

            {/* 6 */}
            <h3 className="h6 mt-4">6. Our Information Officer</h3>
            <p className="text-muted small">
              For privacy queries or to exercise your rights, contact our
              Information Officer at{" "}
              <a href="mailto:chaukesally1@gmail.com">{Email}</a> or{" "}
              <a href="{PhoneRef}">{PHONE_DISPLAY}</a>. The Information
              Regulator can be reached at{" "}
              <a href="malito:inforeg@justice.gov.za">inforeg@justice.gov.za</a>
              .
            </p>

            {/* 7 */}
            <h3 className="h6 mt-4 ">7. Website accessibility</h3>
            <p className="text-muted small mb-0">
              We aim to conform to the{" "}
              <strong>
                Web Content Accessibility Guidelines (WCAG) 2.2 level AA
              </strong>
              . If you experience any barrier on this website, please let us
              know so we can assist you directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
