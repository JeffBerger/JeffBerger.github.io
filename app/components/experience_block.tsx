import { SlideIn } from "../animations/slidein";
import ExpEntry from "./exp_entry";
import React from "react";

const jobs = [
    {
        title: "CTO and Founder",
        url: "https://vega-labs.com",
        company: "Vega Labs LLC",
        description: "Running everything from nothing"
    },
    {
        title: "CTO",
        url: "https://qognitive.io",
        company: "Qognitive",
        description: "Also running everything worth running"
    },
    {
        title: "CTO",
        url: "https://dualitygroup.com",
        company: "Duality Group",
        description: "Building the whole thing"
    },
    {
        title: "Director of Engineering",
        company: "RotoQL",
        url: "https://rotoql.com",
        logo: "./img/rotoql.png",
        description: "Constructing the whole new products"
    },
    {
        title: "Lead Database Engineer",
        company: "Knewton",
        url: "https://knewton.com",
        logo: "./img/knewton.png",
        description: "Running a lot of cassandra"
    },
    {
        title: "Lead Database Engineer",
        company: "Sailthru",
        url: "https://sailthru.com",
        logo: "./img/sailthru.png",
        description: "All the mongo r belong to me"
    },
    {
        title: "Software Engineer",
        company: "We Care",
        description: "I got some death threats"
    }
]

export default function ExperienceBlock(){
    return (
        <>
            <div className="py-12 text-xl flex">
                Experience
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10">
                {
                    jobs.map((job) => {
                        let delay = Math.random() * 0.75;
                        return <SlideIn key={job.company} delay={delay}>
                            <ExpEntry
                                title={job.title}
                                company={job.company}
                                url={job?.url}
                                logo={job?.logo}
                                description={job.description}
                                delay={delay}
                            />
                        </SlideIn>
                    })
                }                                           
            </div>
        </>
    );
}