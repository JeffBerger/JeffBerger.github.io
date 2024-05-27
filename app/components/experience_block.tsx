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

        I joined when there was one product that was soley built by the CTO and managed by him. I was put in charge of building the second product, a fantasy sports app that was primarily for mobile. I was the primary individual contrubutor on the fantasy product and a manager/IC on the bet product.
        
        The fantasy product involved using undocumented APIs to integerate our app with Yahoo, ESPN and CBS as well as implementation of fast integer optimziation that was configurable by the user.
        
        I hired out a team and expanded our fantasy sports infrastructure to include services targetting sports betting as well. The two products shared common backend services such as an internal data service as well as authentication, so a user could use SSO between all Roto services.

        The final project was to build off of the recent Transformers papers to build a structure data to natural language generator with the aim to automatically generate accurate and realistic articles off of sports statistics. the team and I got pretty close and this was well before ChatGPT made this kind of work obviously possible. We struggled with hallucinations in our model, which current transformers still have problems with. I wish I took it a bit more seriously as the future rather than just a curiousity.
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

        I brought my lead database engineer from Sailthru with me as an entire-team hire in order to bring order to the chaos of the large Cassandra deployments that Knewton ran on and had both performance and uptime issues. Neither of us had worked on Cassandra before.

        Over the two years that I was at Knewton the team improved uptime and cost of the database system as well as overall cloud spend, saving close to a million a year. My team was part of the first cohort of certified Cassandra administrators and the team gave several talks at database conferences around the country.

        We built an automation suite around the Cassandra clusters and optimized the JVM environment for our use case. The system ran smoothly enough that the database team was dissolved and the engineers reallocated to other teams. I was offered the position of Director of Infrastructure, which I declined.
        `,
        start_date: new Date("2015-09-15"),
        end_date: new Date("2017-04-15")
    },
    {
        title: "Lead Database Engineer",
        company: "Sailthru",
        url: "https://sailthru.com",
        logo: "/img/sailthru.png",
        description: `Hired to Sailthru, a mid-sized email personalization startup, as a Database Engineer to run a large MongoDB deployment, eventually leading the team.

        Sailthru ran one of the largest MongoDB sharded clusters at the time, as well as sending ~2% of total global email volume. I came on as a Database Engineer and was promoted to the team lead after about a year. I hired the team up to a total of four engineers who gave talked as various conferences on large scale MongoDB deployments, including MongoDB World.

        Our deployments were a hybrid of AWS cloud and Sailthru owned infrastructure in colocated datacenters.  I worked with the system operations team to execute a datacenter move from Manhattan to NJ as well as reconfigure our database hardware. The cloud spend was decreased by ~$1M/yr through improved archiving methods.

        This is also where I picked up python and asyncronous programming, working with some very talented engineers.
        `,
        start_date: new Date("2013-08-15"),
        end_date: new Date("2015-09-15")
    },
    {
        title: "Software Engineer",
        company: "We-Care",
        logo: "/img/we-care.jpeg",
        description: `Joined We-Care, a small startup that did affiliate advertising, as a Software Engineer.

        This was my first job out of my Ph.D. program. There was another Ph.D. Physicist working there and I responded to an ad that was looking for a physicist/coder. It turns out they didn't need a physicist but often people just out of gradschool didn't know the market and they could underpay them for some amount of time.

        It was helpful, I learned a lot about some modern (and some Ancient) programming techniques. I built a message bus in C++ that interacted with a MongoDB server that they were rolling onto. I did a bunch of backend and website improvements, learned PhP (which I have thankfully all forgotten now) and Javascript (which continues to haunt me).

        I did some mapreduce/hadoop work as well as install/uninstall rate data analysis. One of the things the hadoop and uninstall message data showed was just how much people hated the browser extensions that were installed by We-Care on people's computers, mostly unknown to them. There were a good amount of death threats in there. A real surprise for my first industry job.

        But wow you really are digging into the past, why are you all the way back here?
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
            className="h-1/2 w-1/2 max-w-3xl bg-gradient-to-t bg-slate-900 bg-opacity-95 rounded-lg p-8 overflow-y-scroll"
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