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
          width={300}
          height={120}
          start_color="rgb(0,0,0)"
          end_color="rgb(230,250,210)"
          draw_sec={6}
        />
        <span className="inline-block text-4xl align-middle">
          Jeffrey Berger Ph.D.
        </span>
        <MotionEquation
          equation='\ \hat{H}|\psi\rangle = i \hbar \frac{d}{dt}|\psi\rangle\'
          width={300}
          height={120}
          start_color="rgb(0,0,0)"
          end_color="rgb(230,250,210)"
          draw_sec={6}
        />
      </div>
      <div className="flex gap-x-2">
        <div>
          <div className="text-2xl">
              Welconme to my personal page, which is currently under construction. I&apos;m a physicist who has been doing software development for the last 11 years.
          </div>
          <br/>
          <div className="text-xl">
              My specialty is in working with small teams, generally at startups on big problems. I&apos;ve built several companies from the ground up as well as building out the technical team. I&apos;ve given technical talks on research and software development, managed teams and projects and brought them to market, supported production from 24/7 uptime requirements to ensuring billions of dollars in trades go out daily.
          </div>
          <br/>
          <div className="text-xl">
              If this sounds interesting, go ahead and reach out. I&apos;m always looking for new opportunities, but make sure it isn&apos;t an easy problem. Those are boring.
          </div>
        </div>
        <SkillsRadar />
      </div>
      <ExperienceBlock />
    </main>
  );
}
