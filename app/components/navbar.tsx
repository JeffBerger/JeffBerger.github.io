'use client'
import React from "react";

import Link from "next/link";

import { motion, animate } from "framer-motion";

function getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

  
export default function NavBar(){

    const links = [
        {
            title: "contact",
            href: "/contact"
        },
        {
            title: "research",
            href: "/research"
        },
        {
            title: "blog",
            href: "/blog"
        }
    ]

    return (
        <header className="py-6 px-6 border-amber-950/50 border-b-2">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href={"/"} className="hover:bg-slate-900 p-2 rounded">
                    Berger
                </Link>
                <nav>
                    <ul className="flex items-center gap-x-8">
                        {links.map((link, index) => (
                            <div className="hover:bg-slate-900 p-2 rounded">
                            <motion.li
                                key={index}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [-getRandomIntInclusive(-3, 3), -1 * getRandomIntInclusive(-3, 3)],
                                    y: [0, getRandomIntInclusive(-5, 5), 0, getRandomIntInclusive(-5, 5), 0],
                                    x: [0, getRandomIntInclusive(-5, 5), 0, getRandomIntInclusive(-5, 5), 0],
                                    transition: {
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    },
                                }}
                                onHoverEnd={
                                    (event) => {
                                        // @ts-expect-error
                                        const target: HTMLElement | null = event.target;
                                        if (target){
                                            animate(target, {x: 0, y: 0, rotate: 0});
                                        }
                                    }
                                }
                            >
                                <Link href={link.href}>
                                    {link.title}
                                </Link>
                            </motion.li>
                            </div>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
