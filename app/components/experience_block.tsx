import { SlideIn } from "../animations/slidein";
import ExpEntry from "./exp_entry";
import React from "react";

const jobs = [
    {
        title: "CTO and Founder",
        url: "https://vega-labs.com",
        company: "Vega Labs LLC",
        description: "Running everything from nothing",
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
                                start_date={job.start_date}
                                end_date={job.end_date}
                            />
                        </SlideIn>
                    })
                }                                           
            </div>
        </>
    );
}