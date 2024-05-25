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
        description: `I'm the CTO and one of the founders of Vega Labs, which does consulting work as well as has a SAAS product.
        
        Vega Labs has worked on consulting contracts with numerous parties, such as:
        - Database migrations for Canary, a large home camera and security company
        - Technical consultants for BBDO on commercials for Ford Motors
        - Technical consultants for the Lancaster Urban Farming Initiative to compute required lighting flux and power consumption
        - Web prototyping for a pre-seed startup developing Point Of Sale systems, All-Card
        - Website development for a small business consulting company SBS and their PiP product
        - Automated report generation and API integrations for Algorhythm.io
        - Pro-bono work for professors and academic institutions

        Additionally we have a language placement exam specializing in heritage language speakers which is used by three universities in the NYC area. The product has been running continuously and generating revenue for almost a decade.
        `,
        start_date: new Date("2016-03-15")
    },
    {
        title: "CTO",
        url: "https://qognitive.io",
        logo: "/img/qognitive.png",
        company: "Qognitive",
        description: `I am the CTO and one of the founding members of Qognitive, a Quantum AI startup.

        I am involved in every part of the technical chain. I have done fundamental theory and mathematical work on the algorithm and all of our models have some components of my work. I wrote the mathematical code in C and Python to run the quantum equations. I also have been architecting and coding the API as well as using Terraform to build all our cloud infrastructure.
        
        I came on as the only engineer and have been hiring a team of Ph.D. scientists who also have coding backgrounds to push the system to larger scales and stronger inference.

        I am the technical lead on our research collaboration with the Quantum Computing team at IBM which has recently seen one of our machine learning algorithms successfully run on a transmon quantum computer.
        `,
        start_date: new Date("2024-01-15")
    },
    {
        title: "CTO",
        url: "https://dualitygroup.com",
        logo: "/img/duality.png",
        company: "Duality Group",
        description: `I was the CTO at Duality Group, a ML based quantitative hedge fund. I was a major individual contributor on every aspect of the technical stack.

        I was hired as the first technical hire in NY, where the research and leadership team was based. The technical team was outsourced to eastern europe. I was quickly given control of the project to rebuild the system from the ground up to facillitate faster research as well as to handle more numerous and intricate financial models.

        I grew the US based team to four engineers and we rebuilt the system in C/Python so the Quant team could interact with the system directly as they coded in Python.

        The system facillitated rapid development by the Quant team, expanding our model count from 4 when the new system was migrated over to over 50. The engineering team was able to keep execution time dropping as complexity increased through dynamic DAG calculation graph generation and optimized runtime paths.

        Additionaly the system ran: live streaming from Bloomberg with robust failover tolerance, optimization services for portfolios and broker allocations using MOSEK, API interfaces with Flextrade to execute trades, internal dashboards and reporting metrics.
        
        The exact scope of the entire system is beyond this summary but if you are taking anything away from this:
        - The system went from 30+ engineers to maintain it to 3-4
        - The system never missed a day of trading
        - Research velocity increased as cost and execution time stayed constant or dropped
        `,
        start_date: new Date("2019-07-15"),
        end_date: new Date("2024-01-15")
    },
    {
        title: "Director of Engineering",
        company: "RotoQL",
        url: "https://rotoql.com",
        logo: "/img/rotoql.png",
        description: `The first technical hire at a fantasy sports / sports betting startup in NYC.
        `,
        start_date: new Date("2017-04-15"),
        end_date: new Date("2019-06-15")
    },
    {
        title: "Lead Database Engineer",
        company: "Knewton",
        url: "https://knewton.com",
        logo: "/img/knewton.png",
        description: `Joined Knewton, a mid sized ed-tech startup, to form the Database Engineering team for a large Cassandra deployment at this mid-sized ed-tech startup.
        `,
        start_date: new Date("2015-09-15"),
        end_date: new Date("2017-04-15")
    },
    {
        title: "Lead Database Engineer",
        company: "Sailthru",
        url: "https://sailthru.com",
        logo: "/img/sailthru.png",
        description: `Hired to Sailthru, a mid-sized email personalization startup, as a Database Engineer to run a large MongoDB deployment, eventually leading the team before I left.
        `,
        start_date: new Date("2013-08-15"),
        end_date: new Date("2015-09-15")
    },
    {
        title: "Software Engineer",
        company: "We-Care",
        description: `Joined We-Care, a small startup that did affiliate advertising, as a Software Engineer.
        `,
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
            className="h-1/2 w-1/2 max-w-3xl bg-gradient-to-t from-amber-950 to-black bg-opacity-95 rounded-lg p-8 overflow-y-scroll"
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