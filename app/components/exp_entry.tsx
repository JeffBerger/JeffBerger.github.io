import React from "react";

import { Wiggle } from "../animations/wiggle";
import { motion } from "framer-motion";


interface expEntryProps {
    title: string;
    url?: string;
    logo?: string;
    company: string;
    description: string;
    delay?: number;
}

export default function ExpEntry(props: expEntryProps){
    let url = props.url || "#";
    let logo = props.logo || "https://placehold.co/50x50.jpg";
    const draw = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
              pathLength: {ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1, duration: 3, delay: 1.25 * (props.delay || 0)},
            }
        }
    }
    const pulse = {
        hidden: { scale: 0.5, x: 40, y: 5},
        visible: {
            scale: 1.5,
            x: 40,
            y: 80,
            transition: {
              scale: {ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1, duration: 3, delay: 1.25 * (props.delay || 0)},
            }
        }
    }
    return (
        <div className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl">
            <div>
                <motion.a
                  href={url}
                  target="_blank"
                  className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md"
                  whileHover={{
                    scale: 1.2
                  }}
                >
                    <Wiggle delay={Math.random() * 1.5}>
                        <img src={logo} alt={props.company} height="50px" width="50px"/>
                    </Wiggle>
                </motion.a>
                <motion.svg
                    width="80"
                    height="90"
                    viewBox={`0 0 80 90`}
                >
                    <motion.line
                        x1="40"
                        y1="10"
                        x2="40"
                        y2="75"
                        stroke="#00cc88"
                        pathLength={0}
                        animate={{
                            pathLength: 1,
                            transition: {
                                pathLength: {
                                    ease: "easeInOut", 
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: 1,
                                    duration: 3,
                                    delay: 1.25 * (props.delay || 0)},
                            }
                        }}
                    />
                    <motion.circle
                        cx="40"
                        cy="10"
                        r="3"
                        fill="#00cc88"
                        animate={{
                            y: 65,
                            transition: {
                                y: {
                                    ease: "easeInOut", 
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: 1,
                                    duration: 3,
                                    delay: 1.25 * (props.delay || 0)},
                            }
                        }}
                    />
                    <motion.circle
                        cx="40"
                        cy="10"
                        opacity={0.5}
                        r="5"
                        fill="#00cc88"
                        animate={{
                            y: 65,
                            scale: [1, 1.5, 1, 1.5, 1, 1.5, 1],
                            transition: {
                                y: {
                                    ease: "easeInOut", 
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: 1,
                                    duration: 3,
                                    delay: 1.25 * (props.delay || 0)
                                },
                                scale: {
                                    ease: "easeInOut", 
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: 1,
                                    duration: 3,
                                    delay: 1.25 * (props.delay || 0)},
                                }
                        }}
                    />                    
                </motion.svg>
            </div>
            <div className="text-left">
                <div className="text-xl pb-4">
                    <span className="text-xl pe-8">{props.company}</span>
                    <span className="text-lg text-slate-400"> Start Date - End Date</span>
                </div>
                <div className="">
                    {props.description}
                </div>
            </div>
        </div>
    );
}