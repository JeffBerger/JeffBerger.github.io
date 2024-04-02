'use client'

import Equation from "./components/eq";
import ExperienceBlock from "./components/experience_block";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-7xl mx-auto">
      <div className="flex gap-x-2">
        <div>
          <div className="text-4xl">
            Jeffrey Berger, Ph.D.
          </div>
          <div className="text-lg">
            I specialize in building great things for people with bad ideas. Do you have a bad idea that you need executed? Boy maybe I want to build something for you! Founders who value the expertise of others and are willing to take criticism need not apply.
          </div>
        </div>
        <div>
          <Equation
            equation='\ \left( i \partial \!\!\!/ - m  \right) \psi  = 0 \'
            scale={2}
            start_color="rgb(0,0,0)"
            end_color="rgb(230,250,210)"
            draw_ms={3000}
          />
          <Equation
            equation='\ \hat{H}|\psi\rangle = i \hbar \frac{d}{dt}|\psi\rangle\'
            scale={2}
            start_color="rgb(0,0,0)"
            end_color="rgb(230,250,210)"
            draw_ms={6000}
          />
        </div>
      </div>
      <ExperienceBlock />
    </main>
  );
}
