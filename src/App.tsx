import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer, { BackToTop } from "./components/Footer";
import PrivacyModal from "./components/PrivacyModal";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Privacy from "./components/Privacy";

const SECTION_IDS = ["home", "services", "about", "founder", "contact"];

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const { showTop } = useScrollSpy(SECTION_IDS);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Founder />
        <Contact />
        <Privacy />
      </main>

      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <BackToTop show={showTop} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
