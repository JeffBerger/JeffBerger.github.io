import React from "react"

import Image from 'next/image';


export default function Contact(){
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto">
      <p className="text-4xl p-8">
        Interested in reaching out to me?
      </p>
      <div className="flex gap-4">
        <div className="py-8">
          <Image
            src="/img/portrait.jpg"
            alt="A picture of me"
            height={400}
            width={400}
            className="rounded-lg"
          />
        </div>
        <div className="p-4 max-w-xl">
          <ul className="text-xl list-disc" >
            <li className="py-2">
              <b>If you are a recruiter</b> and you have engineers you would like me to hire from your talent pool, go ahead and close this tab now. This page isn&apos;t for you, go to qognitive.io.
            </li>
            <li className="py-2">
              <b>Interested in engaging me for contract work?</b> I take all my contract work through the vega-labs.com. You can reach out to me at jeff@vega-labs.com for me and my team&apos;s availablilty to work with you.
            </li>
            <li className="py-2">
              <b>If you are a recruiter</b>, remember I am a veteran startup leader who is currently CTO of a VC backed Quantum AI company. I&apos;m always open to hearing interesting opportunities.
            </li>

            <li className="py-2">
              <b>If you are a starting a startup</b> and you are looking for an early stage technical leader / cofounder go ahead and reach out, but keep some things in mind. I&apos;ll want to get to know you before joining, and I will expect to be on similar equity footing as the business partners. I&apos;ve been playing the a few percents and stay in your lane game with startups for years and if that is what you want then close the tab. If you are looking for an actual partner we can chat.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-xl py-10 max-w-2xl">
          If you made it this far then shoot an email to: jeffrey.j.berger at gmail.com
        </p>
        <p>...and let me know if I should make that list into a flowchart.... I&apos;m tempted...
        </p>
      </div>
    </main>
  )
}