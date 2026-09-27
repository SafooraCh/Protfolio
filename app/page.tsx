import { GridBackground } from "@/effects/GridBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Expertise } from "@/sections/Expertise";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Certification } from "@/sections/Certification";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <GridBackground>
      {/* Floating Navigation */}
      <Navbar />

      <main className="flex flex-col w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section (2-3 short lines) */}
        <About />

        {/* 3. Expertise Section (Merged Skills + What I Do) */}
        <Expertise />

        {/* 4. Projects Section (1-2 line descriptions) */}
        <Projects />

        {/* 5. Experience Section (1 short highlight each) */}
        <Experience />

        {/* 6. Education Section (Degree + Institute only) */}
        <Education />

        {/* 7. Certification Section (Udemy AI & GenAI) */}
        <Certification />

        {/* 8. Contact Section (Direct channels + Short Form) */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </GridBackground>
  );
}
