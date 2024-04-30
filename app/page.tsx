'use client'

import React from "react";

import ExperienceBlock from "./components/experience_block";
import MotionEquation from "./components/framer_eq";
import SkillsRadar from "./components/skills_radar";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-7xl mx-auto">
      <div className="flex gap-x-2 h-36 align-middle">
        <MotionEquation
          equation='\ \left( i \partial \!\!\!/ - m  \right) \psi  = 0 \'
          scale={2}
          start_color="rgb(0,0,0)"
          end_color="rgb(230,250,210)"
          draw_sec={6}
        />
        <div className="text-4xl">
          Jeffrey Berger, Ph.D.
        </div>
        <MotionEquation
          equation='\ \hat{H}|\psi\rangle = i \hbar \frac{d}{dt}|\psi\rangle\'
          scale={2}
          start_color="rgb(0,0,0)"
          end_color="rgb(230,250,210)"
          draw_sec={6}
        />
      </div>
      <div className="flex gap-x-2">
        <div>
          <div className="text-lg">
              I specialize in building things for other people.  If you are another person and you need something built go ahead and reach out.
          </div>
          <div className="text-lg">
              I have a summary of the skills I&aposve picked up over the years on the right that you can click through.
          </div>
        </div>
        <SkillsRadar />
      </div>
      <ExperienceBlock />
    </main>
  );
}
