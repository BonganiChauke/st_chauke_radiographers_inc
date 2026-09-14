import { useState, type FormEvent } from "react";
import {
  Ambulance,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
} from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "./Navbar";
import { Company_Name, trading_hours } from "./Hero";

export const MAPS_DIRECTIONS = "https://maps.app.goo.gl/HzZjRCqxzPHiHqJL9";
export const MAPS_VIEW =
  "https://www.google.com/maps/dir/-26.35194,28.22492/16638+Umnyango+St,+Vosloorus,+1486/@-26.3519013,28.222427,17z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x1e951ebef33bf4ab:0x3b43f7de8347baf5!2m2!1d28.2249549!2d-26.3518292!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D";
export const WHATSAPP = "https://wa.me/27731127351";
export const Address = "16639 Umnyango St, Vosloorus, 1486";
export const Email = "chaukesally1@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="section-pad"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="text-center mb-5">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Contact Us
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="contact-heading" className="section-title">
              Book a scan or <span className="text-gradient">say hello</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-lede mx-auto">
              Call, WhatsApp, email or visit us in person and our friendly team
              will help you arrange the right scan at the right time.
            </p>
          </Reveal>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-md-6 col-lg-3">
            <Reveal className="h-100">
              <div className="info-tile">
                <span className="it-icon" aria-hidden="true">
                  <Phone size={21} />
                </span>
                <div>
                  <h3>Call us</h3>
                  <p className="mb-0">
                    <a href={PHONE_HREF} className="fw-semibold">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                  <small>Tap to call {trading_hours}</small>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-md-6 col-lg-3">
            <Reveal delay={90} className="h-100">
              <div className="info-tile">
                <span className="it-icon" aria-hidden="true">
                  <MapPin size={21} />
                </span>
                <div>
                  <h3>Visit us</h3>
                  <p className="mb-0">
                    <a
                      href={MAPS_VIEW}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold"
                    >
                      {Address}
                    </a>
                  </p>
                  <small>
                    <a
                      href={MAPS_DIRECTIONS}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get directions on Google Maps
                    </a>
                  </small>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-md-6 col-lg-3">
            <Reveal delay={180} className="h-100">
              <div className="info-tile">
                <span className="it-icon" aria-hidden="true">
                  <Mail size={21} />
                </span>
                <div>
                  <h3>Email us</h3>
                  <p className="mb-0">
                    <a
                      href="mailto:chaukesally1@gmail.com"
                      className="fw-semibold"
                    >
                      {Email}
                    </a>
                  </p>
                  <small>Replies within one working day</small>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-md-6 col-lg-3">
            <Reveal delay={270} className="h-100">
              <div className="info-tile">
                <span className="it-icon" aria-hidden="true">
                  <Clock3 size={21} />
                </span>
                <div>
                  <h3>Hours</h3>
                  <p className="mb-0">
                    {trading_hours}
                    <br />
                    Sat: 08:00–14:00
                  </p>
                  <small>Sun &amp; public holidays: on-call only</small>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <Reveal direction="left">
              <div className="emergency-strip mb-4">
                <Ambulance size={24} aria-hidden="true" />
                <p>
                  <strong>Medical emergency?</strong> This website cannot
                  respond to emergencies. Call{" "}
                  <a href="tel:10177">
                    <strong>10177</strong>
                  </a>{" "}
                  or go to your nearest casualty unit immediately.
                </p>
              </div>

              <div className="card-lift">
                <h3 className="h5 d-flex align-items-center gap-2">
                  <PhoneCall
                    size={20}
                    aria-hidden="true"
                    style={{ color: "var(--purple-700)" }}
                  />
                  Chat on WhatsApp
                </h3>
                <p className="mb-3">
                  We're here to help! Chat with us on WhatsApp for quick
                  assistance.
                </p>
                {/* <ul className="check-list mb-0">
                  {["Vosloorus"].map((area) => (
                    <li key={area}>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul> */}
                <hr className="my-4" />
                <a
                  className="btn btn-gradient w-100"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={19} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-7">
            <Reveal direction="right" delay={120}>
              <div className="contact-form-card">
                <h3 className="h4 mb-1">Request an appointment</h3>
                <p style={{ fontSize: "0.95rem" }}>
                  Complete the form and our bookings desk will confirm your
                  slot. For same-day X-rays, calling us is fastest.
                </p>

                {sent && (
                  <div
                    className="alert alert-success d-flex align-items-center gap-2"
                    role="status"
                  >
                    <CheckCircle2 size={20} aria-hidden="true" />
                    <span>
                      Thank you — your request has been noted. Our bookings desk
                      will contact you on the details provided.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate={false}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="first_name" className="form-label">
                        First Name{" "}
                        <span className="star" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="name"
                        className="form-control"
                        autoComplete="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="last_name" className="form-label">
                        Last Name{" "}
                        <span className="star" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="name"
                        className="form-control"
                        autoComplete="name"
                        placeholder="Surname"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone number{" "}
                        <span className="star" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        autoComplete="tel"
                        placeholder="e.g. 082 555 0100"
                        required
                        aria-describedby="cf-phone-help"
                      />
                      <p id="cf-phone-help" className="form-text mb-0 mt-1">
                        We will only use this to arrange your appointment.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email address{" "}
                        <span className="star" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                        placeholder="Email Address"
                        autoComplete="email"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="service" className="form-label">
                        Scan required{" "}
                        <span className="star" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="form-select"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service…
                        </option>
                        <option>Theatre</option>
                        <option>Cath Lab</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Message{" "}
                        <span className="star" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows={4}
                        required
                        maxLength={250}
                        placeholder="Tell us briefly what you need, your preferred day, and whether you have a referral letter."
                      />
                    </div>
                    <div className="col-12">
                      <div className="consent-box form-check d-flex gap-2 align-items-start">
                        <input
                          className="form-check-input mt-1"
                          type="checkbox"
                          id="consent"
                          name="consent"
                          required
                        />
                        <label className="form-check-label" htmlFor="consent">
                          I consent to {Company_Name} processing the personal
                          information in this form, in line with the Protection
                          of Personal Information Act (POPIA), solely to respond
                          to my enquiry. <span aria-hidden="true">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-gradient w-100">
                        Send Request
                      </button>
                      <p className="form-text text-center mt-3 mb-0">
                        Please do not include sensitive medical details in this
                        form. Bring referral letters and your medical aid card
                        to your appointment.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
