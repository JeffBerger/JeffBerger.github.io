'use client'

import React from "react";

import ExperienceBlock from "./components/experience_block";
import MotionEquation from "./components/framer_eq";
import SkillsRadar from "./components/skills_radar";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-7xl mx-auto">
      <div className="flex gap-x-2 h-36">
        <MotionEquation
          equation='\ \left( i \partial \!\!\!/ - m  \right) \psi  = 0 \'
          width={300}
          height={120}
          start_color="rgb(0,0,0)"
          end_color="rgb(230,250,210)"
          draw_sec={6}
        />
        <p className="text-4xl py-10">
          Jeffrey Berger Ph.D.
        </p>
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
              Welcome to my personal page, which is currently under construction. I&apos;m a physicist who has been doing software development for the last 11 years.
          </div>
          <br/>
          <div className="text-xl">
              My specialty is in working with small teams, generally at startups on big problems. I&apos;ve built several companies from the ground up as well as building out the technical team.
          </div>
          <br/>
          <div className="text-xl">
              I&apos;ve given technical talks on research and software development, managed teams and projects and brought them to market, supported production from 24/7 uptime requirements to ensuring billions of dollars in trades go out daily.
          </div>
        </div>
        <SkillsRadar />
      </div>
      <ExperienceBlock />
    </main>
  );
}
