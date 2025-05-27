import React from "react";
import Navigation from "./components/Navigation";
import HomeButton from "./components/HomeButton";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact"; // Make sure to create this component as well

export default function App() {
  return (
    <div className="font-sans relative overflow-x-hidden bg-black text-white">
      {/* Global Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        section {
          scroll-snap-align: start;
        }
        body {
          scroll-snap-type: y mandatory;
          overscroll-behavior: contain;
        }
      `}</style>
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

      <Navigation />
      <HomeButton />

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}