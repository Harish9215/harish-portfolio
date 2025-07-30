import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navigation from "./components/Navigation";
import HomeButton from "./components/HomeButton";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import ClickSoundButton from "./components/ClickSoundButton";

export default function App() {
  const [activeSection, setActiveSection] = useState("landing");

  // ✅ Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // ✅ Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // ✅ Scroll Up/Down button logic
  const scrollTo = (direction) => {
    const sections = Array.from(document.querySelectorAll("section"));
    const currentIndex = sections.findIndex((s) => s.id === activeSection);
    const nextIndex =
      direction === "down"
        ? Math.min(currentIndex + 1, sections.length - 1)
        : Math.max(currentIndex - 1, 0);

    const target = sections[nextIndex];
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans relative overflow-x-hidden bg-black text-white">
      {/* Global styles */}
      <style jsx global>{`
        html,
        body {
          scroll-snap-type: y mandatory;
          scroll-behavior: auto !important;
          overscroll-behavior: contain;
        }
        section {
          scroll-snap-align: start;
          min-height: 100vh;
        }
      `}</style>

      {/* Entry animation */}
      <style>{`
        .stretch-in {
          animation: stretchIn 0.8s ease-out both;
        }
        @keyframes stretchIn {
          0% {
            transform: scaleY(0.8);
            opacity: 0;
          }
          60% {
            transform: scaleY(1.05);
            opacity: 1;
          }
          100% {
            transform: scaleY(1);
          }
        }
      `}</style>

      <Navigation activeSection={activeSection} />
      <HomeButton />

      <main>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

        {/* Up/Down buttons – Top right below nav */}
        <div className="fixed top-20 right-4 z-50 flex flex-col items-center space-y-4">
          <button
            onClick={() => scrollTo("up")}
            className="bg-white/10 hover:bg-white/35 backdrop-blur-md text-white text-2xl px-2 py-6 rounded-full border border-white/20 transition"
          >
            ↑
          </button>
          <button
            onClick={() => scrollTo("down")}
            className="bg-white/10 hover:bg-white/35 backdrop-blur-md text-white text-2xl px-2 py-6 rounded-full border border-white/20 transition"
          >
            ↓
          </button>
        </div>

        {/* Sound Button */}
        <div className="fixed bottom-4 left-4 z-50">
          <ClickSoundButton />
        </div>
      </main>
    </div>
  );
}