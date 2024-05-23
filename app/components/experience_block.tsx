import { SlideIn } from "../animations/slidein";
import { AnimatePresence, motion } from "framer-motion";
import ExpEntry from "./exp_entry";
import React from "react";

interface Job {
    title: string;
    url?: string;
    company: string;
    description: string;
    logo?: string;
    start_date: Date;
    end_date?: Date;
}

const jobs: Job[] = [
    {
        title: "CTO and Founder",
        url: "https://vega-labs.com",
        company: "Vega Labs LLC",
        description: `Running everything from nothing. I started this company and I will end it.

        One of the worst things is trying to control the Noldor because they get up into all sorts of stuff that they shouldn't. They really need to leave the Silmarils alone. I mean, I get it, they're shiny and all, but they're not worth the trouble. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock. I mean, I'm not going to go and kill my brother over a shiny rock.,
        `,
        start_date: new Date("2016-03-15")
    },
    {
        title: "CTO",
        url: "https://qognitive.io",
        company: "Qognitive",
        description: "Also running everything worth running",
        start_date: new Date("2024-01-15")
    },
    {
        title: "CTO",
        url: "https://dualitygroup.com",
        company: "Duality Group",
        description: "Building the whole thing",
        start_date: new Date("2019-07-15"),
        end_date: new Date("2024-01-15")
    },
    {
        title: "Director of Engineering",
        company: "RotoQL",
        url: "https://rotoql.com",
        logo: "/img/rotoql.png",
        description: "Constructing the whole new products",
        start_date: new Date("2017-04-15"),
        end_date: new Date("2019-06-15")
    },
    {
        title: "Lead Database Engineer",
        company: "Knewton",
        url: "https://knewton.com",
        logo: "/img/knewton.png",
        description: "Running a lot of cassandra",
        start_date: new Date("2015-09-15"),
        end_date: new Date("2017-04-15")
    },
    {
        title: "Lead Database Engineer",
        company: "Sailthru",
        url: "https://sailthru.com",
        logo: "/img/sailthru.png",
        description: "All the mongo r belong to me",
        start_date: new Date("2013-08-15"),
        end_date: new Date("2015-09-15")
    },
    {
        title: "Software Engineer",
        company: "We Care",
        description: "I got some death threats",
        start_date: new Date("2013-03-15"),
        end_date: new Date("2013-08-15")
    }
]

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
};

export default function ExperienceBlock(){
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalData, setModalData] = React.useState(jobs[0]);

    const modal = <motion.div
        onClick={() => setModalOpen(false)}
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="h-1/2 w-1/2 bg-gradient-to-t from-amber-950 to-black bg-opacity-95 rounded-lg p-8 overflow-y-scroll"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <p className="text-xl text-center">{modalData.company}</p>
            <p className="text-lg text-center">{modalData.title}</p>
            <br />
            <p className="text-lg whitespace-pre-line">{modalData.description}</p>
        </motion.div>
    </motion.div>

    return (
        <>
            <AnimatePresence>
                {modalOpen && modal}
            </AnimatePresence>
            
            <div className="py-12 text-xl flex">
                Experience
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10">
                {
                    jobs.map((job) => {
                        let delay = Math.random() * 0.75;
                        return <div
                            key={`div-${job.company}`}
                            onClick={
                                () => {
                                    console.log(job);
                                    setModalOpen(true);
                                    setModalData(job);
                                }
                            }
                        >
                            <SlideIn
                                key={job.company}
                                delay={delay}
                            >
                                <ExpEntry
                                    title={job.title}
                                    company={job.company}
                                    url={job?.url}
                                    logo={job?.logo}
                                    description={job.description}
                                    delay={delay}
                                    start_date={job.start_date}
                                    end_date={job.end_date}
                                />
                            </SlideIn>
                        </div>
                    })
                }                                           
            </div>
        </>
    );
}