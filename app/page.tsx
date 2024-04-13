'use client'

import ExperienceBlock from "./components/experience_block";
import MotionEquation from "./components/framer_eq";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-7xl mx-auto">
      <div className="flex gap-x-2">
        <div>
          <div className="text-4xl">
            Jeffrey Berger, Ph.D.
          </div>
          <div className="text-lg">
            I specialize in building things for other people.  If you are another person and you need something built go ahead and reach out.
          </div>
        </div>
        <div>
          <MotionEquation
            equation='\ \left( i \partial \!\!\!/ - m  \right) \psi  = 0 \'
            scale={2}
            start_color="rgb(0,0,0)"
            end_color="rgb(230,250,210)"
            draw_sec={6}
          />
          <MotionEquation
            equation='\ \hat{H}|\psi\rangle = i \hbar \frac{d}{dt}|\psi\rangle\'
            scale={2}
            start_color="rgb(0,0,0)"
            end_color="rgb(230,250,210)"
            draw_sec={6}
          />
        </div>
      </div>
      <ExperienceBlock />
    </main>
  );
}
