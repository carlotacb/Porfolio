"use client";

import Typewriter from "typewriter-effect";

import { title } from "@/components/primitives";
import { AboutMe } from "@/components/about-me";
import { Timeline } from "@/components/timeline";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/imgs/bg1.jpeg")',
          opacity: 0.5,
        }}
      />
      <div className="flex items-center justify-center h-screen">
        <div className="relative inline-block max-w-xl text-center">
          <span className={title()}>Hi there 👋🏼</span>
          <br />
          <br />
          <span className={title({ size: "sm" })}>I&#39;m&nbsp;</span>
          <span className={title({ color: "blue", size: "sm" })}>
            Carlota&nbsp;
          </span>
          <span className={title({ color: "blue", size: "sm" })}>C</span>
          <span className={title({ size: "sm" })}>atot&nbsp;</span>
          <span className={title({ color: "blue", size: "sm" })}>B</span>
          <span className={title({ size: "sm" })}>ragós</span>
          <br />
          <br />
          <br />
          <Typewriter
            options={{
              strings: [
                "Software Engineer",
                "Full-Stack Developer",
                "Associate Professor",
                "Entrepreneur",
                "Hackathon Organizer",
                "Traveler",
                "Classical Ballet Dancer",
                "Music Lover",
              ],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
              wrapperClassName: "text-2xl sm:text-4xl",
              cursorClassName: "text-2xl sm:text-4xl",
            }}
          />
        </div>
      </div>

      <div className="pb-16" id="about">
        <AboutMe />
      </div>

      <div className="relative w-full py-20 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 w-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/imgs/bg2.JPG")',
            backgroundAttachment: "fixed", // This creates the parallax effect
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5,
            zIndex: 0, // Ensures it stays behind the text
          }}
        />

        <div className="flex items-center justify-center relative z-10">
          {/* Relative positioning to keep text above the background */}
          <Skills />
        </div>
      </div>

      <div className="py-16" id="resume">
        <Timeline />
      </div>

      <div className="relative w-full py-20 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/imgs/bg3.JPG")',
            backgroundAttachment: "fixed", // This creates the parallax effect
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5,
            zIndex: 0, // Ensures it stays behind the text
          }}
        />

        <div className="flex items-center justify-center relative z-10">
          {/* Relative positioning to keep text above the background */}
          <div className="inline-block max-w-xl text-center">
            <span className={title({ size: "sm" })}>Hobbies</span>
            <span className={title({ color: "cyan", size: "sm" })}>
              {" "}
              & Interests
            </span>
          </div>
        </div>
      </div>

      <div className="py-16" id="resume">
        <Projects />
      </div>
    </section>
  );
}

/*
<div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={""}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
* */
