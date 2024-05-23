import React from "react";

import Image from 'next/image';

import { Wiggle } from "../animations/wiggle";
import { motion } from "framer-motion";
import Moment from "react-moment";


interface expEntryProps {
    title: string;
    url?: string;
    logo?: string;
    company: string;
    description: string;
    delay?: number;
    start_date: Date;
    end_date?: Date;
    charLimit?: number;
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

    const start = (
        <Moment format="MMMM YYYY">
            {props.start_date.toISOString()}
        </Moment>
    )
    // const start = <span>present</span>;
    let end = <span>present</span>;
    if (props.end_date){
        end = (
            <Moment format="MMMM YYYY">
                {props.end_date.toISOString()}
            </Moment>
        )
    }

    const charLimit = props.charLimit || 300;
    const description = props.description.slice(0, charLimit) + (props.description.length > charLimit ? "..." : "");

    return (
        <div className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl hover:bg-slate-900 rounded-lg p-5">
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
                        <Image src={logo} alt={props.company} height={50} width={50}/>
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
                                ease: "easeInOut", 
                                repeat: Infinity,
                                repeatType: "loop",
                                repeatDelay: 1,
                                duration: 3
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
                                ease: "easeInOut", 
                                repeat: Infinity,
                                repeatType: "loop",
                                repeatDelay: 1,
                                duration: 3
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
                                ease: "easeInOut", 
                                repeat: Infinity,
                                repeatType: "loop",
                                repeatDelay: 1,
                                duration: 3
                            }
                        }}
                    />                    
                </motion.svg>
            </div>
            <div className="text-left">
                <div className="text-xl pb-4">
                    <span className="text-xl pe-8">{props.company}</span>
                    <span className="text-lg text-slate-400">
                        {start} - {end}
                    </span>
                </div>
                <div className="whitespace-pre-line">
                    {description}
                </div>
            </div>
        </div>
    );
}